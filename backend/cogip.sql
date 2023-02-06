CREATE DATABASE COGIP;
USE COGIP;

CREATE TABLE types (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       name varchar(50),
                       created_at datetime,
                       updated_at datetime
);

CREATE TABLE companies (
                           id INT PRIMARY KEY AUTO_INCREMENT,
                           name varchar(50),
                           type_id INT,
                           country varchar(50),
                           tva varchar(50),
                           created_at datetime,
                           updated_at datetime,
                           FOREIGN KEY (type_id) REFERENCES types(id)
);

CREATE TABLE invoices (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          company_id INT,
                          created_at datetime,
                          updated_at datetime,
                          FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE contacts (
                          id INT PRIMARY KEY AUTO_INCREMENT,
                          name varchar(50),
                          company_id INT,
                          email varchar(50),
                          phone varchar(50),
                          created_at datetime,
                          updated_at datetime,
                          FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE roles (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       name VARCHAR(50),
                       created_at DATETIME,
                       updated_at DATETIME
);

CREATE TABLE users (
                       id INT PRIMARY KEY AUTO_INCREMENT,
                       first_name VARCHAR(50),
                       role_id INT,
                       last_name VARCHAR(50),
                       email VARCHAR(50),
                       password VARCHAR(50),
                       created_at DATETIME,
                       updated_at DATETIME,
                       FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE roles_permission (
                                  id INT PRIMARY KEY AUTO_INCREMENT,
                                  permission_id INT,
                                  role_id INT,
                                  FOREIGN KEY (permission_id) REFERENCES permissions(id),
                                  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE permissions (
                             id INT PRIMARY KEY AUTO_INCREMENT,
                             name VARCHAR(50),
                             created_at DATETIME,
                             updated_at DATETIME
);
