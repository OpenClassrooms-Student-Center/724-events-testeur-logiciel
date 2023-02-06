const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required:true },
    type: { type: String, required: true },
    cover: { type: String, required: true },
    description: { type: String, required: true },
    nb_guest: { type: Number, required: true },
    periode: { type: String, required: true },
    prestations: [{ type: String, required: true }],
    location: { type: String, required: true },
});

module.exports = mongoose.model('Event', eventSchema);