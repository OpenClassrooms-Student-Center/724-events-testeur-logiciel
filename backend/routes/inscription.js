const express = require('express');
const router = express.Router();

const inscriptionCtrl = require('../controllers/inscription')

router.post('/', inscriptionCtrl.addInscription);

module.exports = router;