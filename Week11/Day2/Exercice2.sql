UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'English')
WHERE film_id IN (1, 2, 3);

DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;


SELECT f.title, p.amount
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
WHERE r.return_date IS NULL
ORDER BY p.amount DESC
LIMIT 30;



SELECT title
FROM film
WHERE description LIKE '%sumo wrestler%'
AND film_id IN (
    SELECT film_id
    FROM film_actor
    WHERE actor_id IN (
        SELECT actor_id
        FROM actor
        WHERE first_name = 'Penelope' AND last_name = 'Monroe'
    )
);


SELECT title
FROM film
WHERE length < 60
AND rating = 'R';


SELECT f.title
FROM film f
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN customer c ON r.customer_id = c.customer_id
JOIN staff s ON r.staff_id = s.staff_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';


SELECT title
FROM film
WHERE (title LIKE '%boat%' OR description LIKE '%boat%')
AND film_id IN (
    SELECT film_id
    FROM inventory
    WHERE inventory_id IN (
        SELECT inventory_id
        FROM rental
        WHERE customer_id IN (
            SELECT customer_id
            FROM customer
            WHERE first_name = 'Matthew' AND last_name = 'Mahan'
        )
    )
)
ORDER BY replacement_cost DESC
LIMIT 1;
