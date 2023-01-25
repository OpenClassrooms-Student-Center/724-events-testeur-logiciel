const Event = require('./../models/Events')

exports.getEvents = async (req, res, next) => {
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
    const event = await Event.findById(req.params.id)
    // const event = events.find(e => e._id === parseInt(req.params.id))
    if(event !== undefined){
        res.status(200).json(event)
    }else{
        res.status(404).json(new Error("404 not found"))
    }
}

exports.getLastEvent = async (req, res, next) => {
    try{
        const events = await Event.findAll()
        const last = events[events.length -1]
        return res.status(200).json(last)
    }catch(e){
        console.log('err', e)
        res.status(500).json(e)
    }

}