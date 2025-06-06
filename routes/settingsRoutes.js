const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');
const {
  fetchUserDetails,
  modifyUserDetails,
  storeUserSettings,
  fetchUserSettings
} = require('../controllers/settingsController');

router.get('/user-info', authGuard, fetchUserDetails);
router.patch('/user-info', authGuard, modifyUserDetails);
router.post('/user-settings', authGuard, storeUserSettings);
router.get('/user-settings', authGuard, fetchUserSettings);