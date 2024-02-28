/*CREATE DATABASE sql_challenges
GO
USE sql_challenges
GO

CREATE TABLE DEPARTMENTS(
	dept_id int PRIMARY KEY IDENTITY(1,1),
	dept_name varchar(20)
);

CREATE TABLE EMPLOYEE_SALES (
	emp_id int PRIMARY KEY IDENTITY(1,1),
	employee_name varchar(25),
	calendar_year int,
	sales int,
	dept_id int REFERENCES DEPARTMENTS(dept_id)
);
GO

INSERT INTO DEPARTMENTS (dept_name) VALUES
('Pharmecuticals'),
('Subscriptions'),
('New Products'),
('Misc')


INSERT INTO EMPLOYEE_SALES (employee_name, calendar_year, sales, dept_id) VALUES
('Gian Paul', 2020, 40, 3),
('Gian Paul', 2021, -20, 3),
('Gian Paul', 2022, -15, 3),
('Carl Fuentes', 2021, -15, 1),
('Carl Fuentes', 2022, -5, 1),
('Carl Fuentes', 2023, 10, 1),
('Jason Deree', 2019, 30, 2),
('Jason Deree', 2020, 45, 2),
('Jason Deree', 2021, 60, 2),
('Tyler Tyson', 2018, 2, 4),
('Tyler Tyson', 2019, 5, 4),
('Tyler Tyson', 2020, 15, 4),
('Tyler Tyson', 2021, 20, 4);

GO
*/


-- After running this an initial time to add the data in, you can comment out the lines above so you're not repeatedly trying to enter in the starting data
-- Use /* and */ to enclose a multiline comment



-- Challenge 1:
-- Write a query to show the name and total sales for a person over all years
SELECT employee_name, sum(sales) from employee_sales group By employee_name



-- Challenge 2:
-- Write a query to show the names of the employees who have had a negative year in sales. If an employee would appear more than once, only show them one time
-- HINT: Look into DISTINCT results
SELECT DISTINCT employee_name from employee_sales where sales < 0




-- Challenge 3:
-- Write a query to show the top 3 most profitable records. The query should return the name of the employee, the calendar year of the sales, and the sales for that record.
-- The records should also be sorted from most sales to least sales
SELECT TOP 3 employee_name, calendar_year, sales from employee_sales order by sales desc
-- NOTE TOP is SQL Server syntax specifically
-- A lot of other sql providers will use the limit keyword instead of top
SELECT  employee_name, calendar_year, sales from employee_sales order by sales desc LIMIT 3



-- Challenge 4:
-- One of your bosses is try to determine some information regarding the lowest selling associates. He has the record for the lowest selling associate, but he needs the next 5 LOWEST records.
-- Your query should show the entire record. The records returned should be ordered from lowest to highest sales numbers and should NOT show the lowest sales record (since your boss already has this)
-- HINT: Look into OFFSET for your query
SELECT * FROM EMPLOYEE_SALES order by sales asc OFFSET 1 ROWS FETCH NEXT 5 ROWS ONLY
-- Other SQL Providers will likely have the ability to offset and do limit
SELECT * FROM EMPLOYEE_SALES order by sales asc OFFSET 1 LIMIT 5
SELECT TOP 5 * from employee_sales where Sales > (SELECT MIN(SALES) FROM EMPLOYEE_SALES) ORDER BY SALES


-- Challenge 5:
-- Now your boss wants to identify the departments with sales team members who are not pulling their weight. Write a query to show the employee name and department
-- name for any employees who have had a negative year in sales. If an employee would appear more than once, only show them one time.
SELECT DISTINCT employee_name, dept_name 
From employee_sales join departments 
on employee_sales.dept_id = departments.dept_id 
where sales < 0