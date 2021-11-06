//import mysql
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'L0$g3H7$',
        database: 'employee_tracker'
    },
    console.log('Connected to the departments database.')
);

//export
module.exports = db;