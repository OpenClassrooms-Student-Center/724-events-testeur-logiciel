const Contact = require("../models/Contacts")
exports.addContact = (req, res, next) => {
    console.log(req.body)
    const contact = new Contact({...req.body});
    console.log(contact)
    contact.save()
        .then(() => res.status(201).json({ message: 'Merci de nous avoir contacté !'}))
        .catch(error => res.status(400).json({ error }));
}