const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.Hostname ? process.env.Hostname :  'localhost',
    database: process.env.Database_name ? process.env.Database_name :  'entregaIntermedia',
    user: process.env.Database_user ? process.env.Database_user :  'root',
    password: process.env.Database_password ? process.env.Database_password :  'admin',
    port: process.env.Port_number ? process.env.Port_number :  '3306',
    multipleStatements: true
})

module.exports = {
    pool
}

