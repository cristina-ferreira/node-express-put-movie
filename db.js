const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // address of the server
user :  'root', // username
password :  'mami',
database :  'movies',
});
module.exports = connection;