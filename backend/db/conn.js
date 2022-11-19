const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: "sql10.freesqldatabase.com",
    database: "sql10578828",
    user: "sql10578828",
    password: "IX7lRPS8lj",
    port: "3306",
    multipleStatements: true
})

module.exports = {
    pool
}

