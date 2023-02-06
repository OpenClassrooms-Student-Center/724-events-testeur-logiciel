const express = require('express');
const router = express.Router();
const contactCtrl = require('../controllers/contact')
const inscriptionCtrl = require('../controllers/inscription')
const eventsCtrl = require('../controllers/events')


router.get('/events/', eventsCtrl.getEvents);
router.get('/events/last', eventsCtrl.getLastEvent )
router.get('/events/:id', eventsCtrl.getEventById );
router.post('/contact/', contactCtrl.addContact);
router.post('/inscription/', inscriptionCtrl.addInscription);

module.exports = router;