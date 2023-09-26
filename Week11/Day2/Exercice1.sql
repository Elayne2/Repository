SELECT * FROM language;

SELECT f.title, f.description, l.name AS language_name
FROM film AS f
JOIN language AS l ON f.language_id = l.language_id;

SELECT f.title, f.description, l.name AS language_name
FROM language AS l
LEFT JOIN film AS f ON l.language_id = f.language_id;

CREATE TABLE new_film (
    id serial PRIMARY KEY,
    name VARCHAR(255)
);

INSERT INTO new_film (name)
VALUES
    ('Film 1'),
    ('Film 2');

CREATE TABLE customer_review (
    review_id serial PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255),
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
VALUES
    (1, 1, 'Review 1', 8, 'This is a great movie.', NOW()),
    (2, 2, 'Review 2', 7, 'Enjoyed it a lot.', NOW());

DELETE FROM new_film WHERE id = 1;