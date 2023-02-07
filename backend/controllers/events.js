const Event = require('./../models/Events')

exports.getEvents = async (req, res, next) => {
    /*  #swagger.tags = ['Events']
        #swagger.description = 'Endpoint to get all events information.' */
    try{
        const events = await Event.find()
        const formattedEvents = events.map(e => {
            return {
                ...e._doc,
                id : e._id
            }

        });
        return res.status(200).json(formattedEvents)
    }catch(error){
        return res.status(400).json({error})
    }
}
exports.getEventById = async (req, res, next) => {
    /*  #swagger.tags = ['Events']
       #swagger.description = 'Endpoint to get specific event information.' */
    const event = await Event.findById(req.params.id)
    // const event = events.find(e => e._id === parseInt(req.params.id))
    if(event !== undefined){
        res.status(200).json(event)
    }else{
        res.status(404).json(new Error("404 not found"))
    }
}

exports.getLastEvent = async (req, res, next) => {
    /*  #swagger.tags = ['Events']
       #swagger.description = 'Endpoint to get last event information.' */
    try{
        const events = await Event.find()
        const last = events.filter((evt) => new Date(evt.date).getTime() < new Date.getTime())
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        return res.status(200).json(last)
    }catch(e){
        console.log('err', e)
        res.status(500).json(e)
    }

}