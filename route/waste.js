const express = require('express')
const postwaste = require('../controller/Waste/wastepost');
const getwaste = require('../controller/Waste/getwaste');

const router = express.Router()

router.post('/postwaste', postwaste);
router.get('/getwaste',getwaste);

module.exports = router;