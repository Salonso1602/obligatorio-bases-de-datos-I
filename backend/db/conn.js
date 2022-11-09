const mysql = require('mysql2');

const database = mysql.createConnection({
    user: "admin",//process.env.BD_USER,
    password:"admin", //process.env.BD_PASS,
    database: "university"
});

module.exports = {
    database
}

