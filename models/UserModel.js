const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  fullName: String,
  emailAddress: { type: String, unique: true },
  secretHash: String,
  settings: {
    theme: String,
    layoutStyle: String
  }
});
module.exports = mongoose.model('UserAccount', UserSchema);