-- Drops the employee_management_db if it exists currently --
DROP DATABASE IF EXISTS employee_management_db;
-- Creates the "employee_management_db" database --
CREATE DATABASE employee_management_db;

-- Ensures which schema/database is used for the following SQL queries. 
USE employee_management_db;

-- Creates table for department 
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, 
    department_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)
)