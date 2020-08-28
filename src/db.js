var mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: process.env.HOST_URI,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_URI,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

module.exports = con;
