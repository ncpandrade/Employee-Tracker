//import mysql
const mysql = require('mysql2');
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
    {
        host: process.env.HOST,
        // Your MySQL username,
        user: process.env.USER,
        // Your MySQL password
        password: process.env.PASS,
        database: 'employee_tracker'
    },
    console.log('Connected to the employee_tracker database.')
);

//export
module.exports = db;