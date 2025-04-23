const db = require('../config/db');

const User = {
  create: (user, callback) => {
    const sql = `INSERT INTO users (firstname, lastname, email, address, password, role) VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [user.firstname, user.lastname, user.email, user.address, user.password, user.role], callback);
  },

  findByEmail: (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
  },

  getAll: (callback) => {
    db.query('SELECT id, firstname, lastname, email, role, created_at FROM users', callback);
  }
};

module.exports = User;
