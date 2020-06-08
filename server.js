const mysql = require("mysql")
const inquirer = require("inquirer")
const cTable = require("console.table")

require('events').EventEmitter.prototype._maxListeners = 100;

//Stores connection variables to mySQL (PLEASE INPUT PASSWORD)
let connection = mysql.createConnection({
    host: "localhost",
    port: 4000,
    user: "root",
    password: "[ENTER PASSWORD]",
    database: "employee_management_db"
});
  