//completa y trabaja lo que tiene que ver con usuarios

var pool = require('./bd'); //llama a la BD
var md5 = require('md5'); //protección de la clave

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = "select * from usuario where usuario = ? and password = ? limit 1";
        var rows = await pool.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getUserByUsernameAndPassword}