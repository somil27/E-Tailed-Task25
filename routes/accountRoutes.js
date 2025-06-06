const express = require('express');
const router = express.Router();
const { createUserAccount, generateAccessToken } = require('../controllers/accountController');

router.post('/signup', createUserAccount);
router.post('/access', generateAccessToken);

module.exports = router;
