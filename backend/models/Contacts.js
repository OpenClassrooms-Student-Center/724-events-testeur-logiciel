const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: { type: String, required: true, maxLength:20 },
    surname: { type: String, required: true, maxLength:20 },
    contactType: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required:true },
   });

module.exports = mongoose.model('Contact', contactSchema);