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
    lookupEl();
  });

  function lookupEl() {
    inquirer
      .prompt([{
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Create",
            "View",
            "Update",
        ]
    },
    {
      name: "option",
      type: "list",
      message: "Chose one of the three option's below please",
      choices: [
        "Department",
        "Employee",
        "Role",
    ]
    
    }])
    .then(function(answer) {
        switch (answer.action) {
        case "Create":
          createData();
          break;
  
        case "View":
          viewData();
          break;
  
        case "Update":
          updateData();
          break;
  
        
        }
      }).catch(function(err){
        console.log(err)
      })
      
  }

  