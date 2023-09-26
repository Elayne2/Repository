CREATE TABLE product_orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    order_date DATE NOT NULL
);

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    order_id INT REFERENCES product_orders(order_id),
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);


CREATE OR REPLACE FUNCTION calculate_total_price(order_id INT)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2) := 0.00;
BEGIN
    SELECT SUM(price) INTO total_price
    FROM items
    WHERE order_id = calculate_total_price.order_id;

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION calculate_user_total_price(user_id INT, order_id INT)
RETURNS DECIMAL(10, 2) AS $$
DECLARE
    total_price DECIMAL(10, 2) := 0.00;
BEGIN
    SELECT SUM(price) INTO total_price
    FROM items
    WHERE order_id = calculate_user_total_price.order_id
    AND order_id IN (SELECT order_id FROM product_orders WHERE user_id = calculate_user_total_price.user_id);

    RETURN total_price;
END;
$$ LANGUAGE plpgsql;