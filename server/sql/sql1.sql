CREATE SCHEMA Admission;

DROP TABLE if EXISTS student;

create table student
(
    Registerid   INT         NOT NULL AUTO_INCREMENT,
    firstname    VARCHAR(30) NULL,
    lastname     VARCHAR(50) NULL,
    street       VARCHAR(50) NULL,
    city         VARCHAR(30) NOT NULL,
    state        VARCHAR(30) NOT NULL,
    postalCode   CHAR(5)     NOT NULL,
    percentage	 INT         NOT NULL,
    PRIMARY KEY (Register_No)
);

Drop TABLE if exists school;

create table school
(
 schoolid             INT         NOT NULL AUTO_INCREMENT,
 schoolName	varchar(40) NULL,
 place			varchar(30),
 pin			varchar(8),
 Primary Key(schoolid)
);

DROP TABLE if exists department;

create table department
(
    departmentid             INT         NOT NULL AUTO_INCREMENT,
    departmentName varchar(30) NULL,
    primary key (departmentid)
);

DROP TABLE if EXISTS faculty;

CREATE TABLE faculty
(
    id        INT         NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30) NOT NULL,
    lastname  VARCHAR(50) NOT NULL,
    deptid    INT         NOT NULL,
    PRIMARY KEY (id)
);


DROP TABLE if EXISTS course;

CREATE TABLE course
(
    id         INT         NOT NULL AUTO_INCREMENT,
    courseName VARCHAR(50) NULL,
    deptid     INT         NULL,
    PRIMARY KEY (id)
);

DROP TABLE if EXISTS studentCourse;

CREATE TABLE studentCourse
(
    studentid INT  NULL,
    courseid  INT  NULL,
    progress  INT  NULL,
    startDate DATE NULL,
    FOREIGN KEY (studentid) REFERENCES student (id),
    FOREIGN KEY (courseid) REFERENCES course (id)
);

DROP TABLE iF Exists student