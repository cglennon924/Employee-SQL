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
connection.connect(function (err) {
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
        .then(function (answer) {
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
        }).catch(function (err) {
            console.log(err)
        })
}

// CREATED INFORMATION FUNCTIONS
// createData function allows user to add an employee, department or role to the corresponding table

function createData(option) {
    switch(option) {
      case "Employee":
        connection.query("SELECT * FROM role", function(err, res){
          const roles = res.map(object => {
            return {
                name: object.title,
                value: object.id
            }
          })
          connection.query("SELECT * FROM employee WHERE manager_id IS NULL", function(error, result){
            if (error) throw error
            const manager = result.map(object => {
              return {
                  name: `${object.first_name} ${object.last_name}`,
                  value: object.id
              }
            })
            inquirer
              .prompt([{
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?",
              },
              {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?",
              },
              {
                name: "role",
                type: "list",
                message: "What is the employee's title",
                choices: roles
              },
              {
                name: "manager",
                type: "list",
                message: "Who is the employee's manager?",
                choices: manager
              },
            ])
            .then(function(res){
              connection.query("INSERT INTO employee SET ?", [{
                first_name: res.first_name,
                last_name: res.last_name,
                role_id: res.role, 
                manager_id: res.manager
              }], 
              function (err){
                if (err) throw err
                console.log(`${res.first_name} ${res.last_name} has been added to the system`)
                keepGoing()
              })
            })
          })
        })
        break;
      case "Department":
        connection.query("SELECT * FROM department", function(err, res){
          if (err) throw err
          console.log("--------------------------------------------------")
          console.table(res)
          console.log("--------------------------------------------------")
          createDepartment()
        });
    }
}