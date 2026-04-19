const express = require('express');
const ledController = require('../controllers/ledController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/devices', authMiddleware, ledController.getDevices);
router.get('/led/actions', authMiddleware, ledController.getSupportedActions);
router.post('/led/action', authMiddleware, ledController.handleLedAction);

module.exports = router;