const db = require('./config/db');
const bcrypt = require('bcrypt');
const User = require('./models/user.model');

const adminUser = {
    firstname: 'admin12',
    lastname: 'admin12',
    email: 'nattaphat.l2@rmutsvmail.com',
    address: '',
    password: 'Krabipoy2545', // จะถูกเข้ารหัส
    role: 'admin'
};

bcrypt.hash(adminUser.password, 10, (err, hash) => {
  if (err) throw err;
  adminUser.password = hash;
  
  User.findByEmail(adminUser.email, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      console.log('Admin already exists.');
      process.exit();
    } else {
      User.create(adminUser, (err, result) => {
        if (err) throw err;
        console.log('Admin created successfully!');
        process.exit();
      });
    }
  });
});
