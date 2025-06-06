const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');
const { fetchDashboardStats } = require('../controllers/statsController');

router.get('/overview', authGuard, fetchDashboardStats);

module.exports = router;