-- Drops the employee_management_db if it exists currently --
DROP DATABASE IF EXISTS employee_management_db;
-- Creates the "employee_management_db" database --
CREATE DATABASE employee_management_db;

-- Ensures which schema/database is used for the following SQL queries. 
USE employee_management_db;

-- Creates department table 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    department_name VARCHAR (50) NOT NULL,
    PRIMARY KEY (id)
)

-- Creates role table
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT, 
    title VARCHAR (50) NOT NULL,
    salary DECIMAL (10,2) NOT NULL, 
    department_id INT NOT NULL,
    PRIMARY KEY (id)
)

-- Creates employee table
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, 
    first_name VARCHAR (50) NOT NULL, 
    last_name VARCHAR (50) NOT NULL, 
    role_id INT NOT NULL, 
    manager_id INT, 
    PRIMARY KEY (id)
)

-- INPUT into department table
INSERT INTO department (department_name)
VALUES ("Development");

INSERT INTO department (department_name)
VALUES ("I.T");

INSERT INTO department (department_name)
VALUES ("Finance");

INSERT INTO department (department_name)
VALUES ("Legal");

-- Example INPUT into role table

INSERT INTO role (title, salary, department_id)
VALUES ("Intern", 0 , 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Development Representative", 35000 , 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Application Engineer", 100000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Junior Application Engineer", 75000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 65000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Human Resources Manager", 80000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Attorney", 150000, 4);

-- Example INPUT into employee table

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Christopher", "Glennon", 1, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ricky", "Bobby", 2, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Darth", "Vader", 3, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Han", "Solo", 4, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Harry", "Potter", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alvis", "Dumbledore", 6, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Calvin", "Harris", 7, NULL);
