-- This is just a query file it's utilized to write queries to the db

-- SQL: Structured Query Language
-- A language that is used to interact with databases
-- Sublanguages (DDL, DML, DQL, TCL, DCL)
-- Each sublanguage has its own commands and is in charge of a specific function within SQL
-- DDL (Data Def Language) -> Used to define schema (Create/alter/drop tables)
-- DML (Data Manipulation Language) -> Used to perfrom basic CRUD ops (Create/Insert, Read/Select, Update, and Delete)
-- DQL (Data Query Language) -> Sometimes considered part of DML but it contains SELECT and all of the sub clauses from select
-- TCL (Transaction Control Language) -> Used to create, commit, save and rollback transactions in SQL
-- DCL (Data Control Language) -> Used to grant or revoke priveleges to specific users on what they can do


CREATE TABLE employees(
	-- Whenever we want to create a table we need to fill out the columns
	-- 3 Pieces of info for the columns: name, datatype, and the constraints on a column
	-- Constraints are restrictions on the data that can be entered to validate data
	-- Examples: 
	-- UNIQUE (Guarantees a unique value for this column in the table)
	-- NOT NULL (Guarantees that we have a value for that column)
	-- PRIMARY KEY (Creates a unique identifier for a row, combines UNIQUE and NOT NULL)
	-- FOREIGN KEY (This column references the primary key of another table, used to define relationships)
	-- DEFAULT (Provides a default value for the column if nothing is given)
	-- CHECK (Provides a check against some conditional statement, like age > 0)


	-- Since we're working with SQL Server, the syntax may be slightly different than if we had worked with something like PostgreSQL or MySQL
	id INT IDENTITY PRIMARY KEY,
	firstName varchar(20) UNIQUE,
	lastName varchar(20) NOT NULL,
	age int CHECK (age > 0),
	stateAbv char(2) DEFAULT 'FL'
);

-- Insert in a basic employee

INSERT INTO employees (firstName, lastName, age, stateAbv) VALUES ('Bryan', 'Serfozo', 25, 'FL');

-- Read back the employee themselves

SELECT * FROM employees;

-- Let's test the constraints and see if we can get them to validate our data
INSERT INTO employees (firstName, lastName, age, stateAbv) VALUES ('Kaitlyn', 'Serfozo', 25, 'FL'); -- We had to change the first name (UNIQUE) to get this to work

-- INSERT INTO employees (firstName, age, stateAbv) VALUES ('Brett',  25, 'GA'); -- Fails since it didn't have a last name
INSERT INTO employees (firstName, lastName, age, stateAbv) VALUES ('Brett', 'Smith', 25, 'GA');

INSERT INTO employees (firstName, lastName, age, stateAbv) VALUES ('John', 'Smith', 2, 'GA'); -- Check constraint guarantees age is greater than 0

INSERT INTO employees (firstName, lastName, age) VALUES ('Mr', 'Worldwide', 43);


-- In SQL Tables that are frequently accessed sometimes there's a specific column that's accessed the most frequently
-- To speed up the process of getting info back from these columns we can create this thing called an index
-- Basically just a different storage for a specific column(s) for a table to speed up operation involving that

CREATE INDEX ix_state_abv ON employees(stateAbv);

select * from employees WHERE stateAbv = 'GA'; -- Just trust me on this, the internal process will be sped up for interactions and operations with this column


-- Transactions
-- Groups of SQL statements that are considered like a block
-- They must adhere to the ACID Properties

-- Transactions act as a block that is all executed at once

BEGIN TRANSACTION;

INSERT INTO employees (firstName, lastName, age) VALUES ('Mrs', 'Worldwide', 43);
UPDATE employees SET firstName = 'Bryan' WHERE id = 3; -- This should violate a constraint and should cause an error

-- This is because we didn't ROLLBACK the transaction
COMMIT;

-- We'll start talking about T-SQL and it's uses
-- We'll create a new transaction and attempt to leverage T-SQL and its resources to make sure there are no error

BEGIN TRANSACTION;

INSERT INTO employees (firstName, lastName, age) VALUES ('Flo', 'Rida', 43);
UPDATE employees SET firstName = 'Catelin' WHERE id = 3; -- This should violate a constraint and should cause an error

-- We'll start using the procedural abilities of T-SQL to run a simple if-else statement to make sure this guy works correctly

IF @@ERROR <> 0 -- What does this mean? @@Error is a built in variable that tracks the errors of the transaction and allows us to do some testing
	BEGIN
		-- This is basically the inside of the IF block
		ROLLBACK; -- Rollback will return the db to the state it was in before the transaction started
	END
ELSE
	BEGIN
		COMMIT;
	END


-- Let's do another piece of procedural code 

-- If I want to declare a variable I'll need to the use the DECLARE keyword
DECLARE @Counter INT = 1;
-- DECLARE @VariableName DataType = Value

WHILE @Counter < 10
	BEGIN
		INSERT INTO employees (firstName, lastName, age) VALUES ('example' + CONVERT(varchar(2), @Counter), 'example', @Counter)
		SET @Counter = @Counter + 1;
	END

SELECT * FROM employees;