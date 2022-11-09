var express = require('express');
var router = express.Router();
const db = require('../db/conn');


router.get('/', function(req, res, next) {

    const sqlQuery = 'SELECT * FROM Faculties';

    queryResult = db.database.query(sqlQuery, (err, result) => {
        if (err) throw err;
        return result;
    });
    
    res.send(queryResult);
});

module.exports = router;