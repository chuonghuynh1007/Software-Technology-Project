var mysql = require('mysql');
var db = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'pbl5'
});
db.connect(() => console.log('Da ket noi database !'));
module.exports = db;
