
const Inscription = require("../models/Inscription")
exports.addInscription = (req, res, next) => {
    try {
        /*  #swagger.tags = ['Inscription']
            #swagger.description = 'Endpoint to send a Inscription information.' */

        /*  #swagger.parameters['obj'] = {
                in: 'body',
                description: 'Inscription information',
                required: true,
                schema: { $ref: "#/definitions/Inscription" }
        } */
        const inscription = new Inscription({...req.body});
        inscription.save()
            .then(() => res.status(201).json({ message: 'Merci pour votre inscription !'}))
            .catch(error => res.status(400).json({ error }));

    }catch (e){
        res.status(500).json(e)
    }
    }