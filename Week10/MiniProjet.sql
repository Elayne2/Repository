SELECT * FROM employees ;
SELECT first_name as Nom, last_name as prenom from  employees;
SELECT DISTINCT department_id FROM employees;
SELECT * FROM employees order by last_name ASC;
SELECT first_name ,last_name , salary * 0.15 as PF from employees;
SELECT employee_id,first_name , last_name , salary from employees order by salary ASC ;
SELECT SUM(salary) FROM employees;
SELECT MAX(salary) FROM employees;
SELECT MIN(salary) FROM employees;
SELECT AVG(salary) FROM employees;
SELECT COUNT(*) AS NombreEmployes FROM Employees;
SELECT UPPER(last_name) AS PrenomEnMajuscules FROM Employees;
SELECT SUBSTRING(last_name ,1,3) FROM employees;
SELECT CONCAT(first_name, ' ', last_name) AS nom_complet FROM employees;
SELECT first_name, last_name, LENGTH(CONCAT(first_name, ' ', last_name)) AS longueur_nom_complet FROM employees;
SELECT first_name FROM employees WHERE first_name like '%[0-9]%';
SELECT * FROM employees LIMIT 10;

SELECT first_name, last_name ,salary FROM employees where(salary between 10000 AND 15000 );
SELECT first_name ,last_name,hire_date FROM employees where hire_date >= '1987-01-01' AND hire_date <= '1987-12-31';
SELECT * FROM employees WHERE first_name LIKE '%c%' AND first_name LIKE '%e%';

SELECT E.last_name,D.department_id,E.salary FROM employees as E 
inner join departments as D on E.department_id=D.department_id
where department_name not in('Programmer','Shipping Clerk')
and salary not in (4500,10000,15000);

SELECT last_name FROM employees WHERE LENGTH(last_name) = 6;

SELECT last_name FROM employees WHERE SUBSTRING(last_name, 3, 1) = 'e';

SELECT E.*,J.job_title FROM employees as E inner join jobs as J on E.job_id=J.job_id; 

SELECT * FROM employees WHERE last_name IN ('JONES', 'BLAKE', 'SCOTT', 'KING', 'FORD');