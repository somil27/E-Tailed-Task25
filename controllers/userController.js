const User = require('../models/UserModel');

exports.fetchUserDetails = async (req, res) => {
  const user = await User.findById(req.currentUser.id).select('-secretHash');
  res.json(user);
};

exports.modifyUserDetails = async (req, res) => {
  const updates = (({ fullName, emailAddress }) => ({ fullName, emailAddress }))(req.body);
  const user = await User.findByIdAndUpdate(req.currentUser.id, updates, { new: true });
  res.json(user);
};

exports.storeUserSettings = async (req, res) => {
  const { theme, layoutStyle } = req.body;
  const user = await User.findByIdAndUpdate(req.currentUser.id, {
    settings: { theme, layoutStyle }
  }, { new: true });
  res.json(user.settings);
};

exports.fetchUserSettings = async (req, res) => {
  const user = await User.findById(req.currentUser.id);
  res.json(user.settings);
};