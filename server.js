const mysql = require("mysql")
const inquirer = require("inquirer")
const cTable = require("console.table")

require('events').EventEmitter.prototype._maxListeners = 100;

//Stores connection variables to mySQL (PLEASE INPUT PASSWORD)
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employee_management_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  