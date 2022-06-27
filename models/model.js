var mysql = require('mysql');
var db = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'pbl5'
});
db.getConnection(() => console.log('Da ket noi database !'));
module.exports = db;
