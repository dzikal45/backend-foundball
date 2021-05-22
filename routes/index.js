const express = require('express');
const router = express.Router();
const FoundBallController = require('../controllers/FoundBallController');

router.get('/FoundBall', FoundBallController.getPemain);
router.get('/FoundBall/:npm', FoundBallController.getPemain);

module.exports = router;