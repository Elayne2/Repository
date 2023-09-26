CREATE TABLE items(items_name varchar(50),price int);
insert into items(items_name,price) values('Small Desk' ,100),('Large desk',300),('Fan',80);
SELECT * FROM  items

CREATE TABLE customers (first_name varchar(50),last_name varchar(50));
insert into customers(first_name,last_name) values(' Greg','Jones'),(' Sandra ','Jones'),(' Scott ','Scott '),(' Trevor ','Trevor '),('Melanie ','Johnson')
SELECT * FROM  customers

SELECT items_name from items

SELECT * FROM items WHERE price > 80;

SELECT * FROM items WHERE price <= 300;

SELECT * FROM customers WHERE last_name = 'Smith';

SELECT * FROM customers WHERE last_name = 'Jones';

SELECT * FROM customers WHERE first_name <> 'Scott';