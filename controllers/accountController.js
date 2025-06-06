const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

exports.createUserAccount = async (req, res) => {
  try {
    const { fullName, emailAddress, password } = req.body;
    const secretHash = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, emailAddress, secretHash });
    res.status(201).json({ message: 'Account created successfully.', id: user._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.generateAccessToken = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;
    const user = await User.findOne({ emailAddress });
    if (!user || !(await bcrypt.compare(password, user.secretHash))) {
      return res.status(401).json({ error: 'Incorrect login credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ status: 'success', accessToken: token, expiresIn: 3600 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};