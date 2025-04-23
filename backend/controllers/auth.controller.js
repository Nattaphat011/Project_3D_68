const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.register = (req, res) => {
  const { firstname, lastname, email, address, password, role } = req.body;
  const hashed = bcrypt.hashSync(password, 10);
  const user = { firstname, lastname, email, address, password: hashed, role: role || 'user' };

  User.create(user, (err) => {
    if (err) return res.status(500).json({ message: "Register failed" });
    res.status(201).json({ message: "User registered" });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email, (err, users) => {
    if (err || users.length === 0) return res.status(404).json({ message: "User not found" });
    const user = users[0];
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "Wrong password" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        role: user.role
      }
    });
  });
};
