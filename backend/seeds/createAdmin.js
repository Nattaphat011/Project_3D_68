// seeds/createAdmin.js
require('dotenv').config();
const db = require('../config/db');
const bcrypt = require('bcryptjs');


const adminUser = {
    firstname: 'admin1',
    lastname: 'admin1',
    email: 'nattaphat.l@rmutsvmail.com',
    address: '',
    password: 'Krabipoy2545', // จะถูกเข้ารหัส
    role: 'admin'
  };

(async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const firstname = process.env.ADMIN_FIRST_NAME || 'Admin';
    const lastname = process.env.ADMIN_LAST_NAME || 'User';

    if (!adminEmail || !adminPassword) {
      throw new Error('Please set ADMIN_EMAIL and ADMIN_PASSWORD in .env');
    }

    const [rows] = await db.promise().query('SELECT * FROM users WHERE email = ?', [adminEmail]);
    if (rows.length) {
      console.log('✅ Admin user already exists.');
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await db.promise().query(
      `INSERT INTO users (firstname, lastname, email, address, password, role) VALUES (?, ?, ?, ?, ?, 'admin')`,
      [firstname, lastname, adminEmail, '', hashedPassword]
    );

    console.log('🚀 Admin user created successfully');
    process.exit(0);
  } catch (err) {
    console.error('❌ Failed to create admin user:', err.message);
    process.exit(1);
  }
})();
