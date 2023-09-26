CREATE TABLE Customer (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_Profile (
    id SERIAL PRIMARY KEY,
    isLoggedIn BOOLEAN DEFAULT false,
    customer_id INT REFERENCES Customer(id)
);

INSERT INTO Customer (first_name, last_name)
VALUES
    ('John', 'Doe'),
    ('Jerome', 'Lalu'),
    ('Lea', 'Rive');

INSERT INTO Customer_Profile (isLoggedIn, customer_id)
SELECT true, (SELECT id FROM Customer WHERE first_name = 'John')
UNION ALL
SELECT false, (SELECT id FROM Customer WHERE first_name = 'Jerome');

SELECT c.first_name
FROM Customer c
INNER JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;

SELECT COUNT(*) AS num_customers_not_loggedin
FROM Customer c
LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;



CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);


INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');


CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

INSERT INTO Student (name, age)
VALUES ('John', 12),
       ('Lera', 11),
       ('Patrick', 10),
       ('Bob', 14);

CREATE TABLE Library (
  book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

Retrieve all columns from the junction table
SELECT *
FROM Library;

SELECT s.name, b.title
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON b.book_id = l.book_fk_id;


SELECT AVG(s.age) AS average_age
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON b.book_id = l.book_fk_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'John';

SELECT *
FROM Library;
-- When a student is deleted from the student table his records will also be deleted automatically because of the CASCADE ON DELETE 