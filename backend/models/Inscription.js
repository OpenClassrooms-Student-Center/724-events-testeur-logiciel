const mongoose = require('mongoose');

const inscriptionSchema = mongoose.Schema({
    eventId: {type: String, required:true},
    name: { type: String, required: true, maxLength:20 },
    surname: { type: Number, required: true, maxLength:20 },
    email: { type: String, required: true },
    date: { type: Date, required:true },
   });

module.exports = mongoose.model('Inscription', inscriptionSchema);