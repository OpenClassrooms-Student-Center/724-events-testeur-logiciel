const express = require('express');
const router = express.Router();

const eventsCtrl = require('../controllers/events')

router.get('/', eventsCtrl.getEvents);
router.get('/last', eventsCtrl.getLastEvent )
router.get('/:id', eventsCtrl.getEventById );


module.exports = router;