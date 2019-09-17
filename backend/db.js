var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dnr930309',
  database : 'DDing'
});

connection.connect();
  
connection.query('SELECT * FROM test_db', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();