DROP DATABASE IF EXISTS shamazon_db;

CREATE DATABASE shamazon_db;

USE shamazon_db;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	price DECIMAL(13, 4),
	stock_quantity INTEGER(11),
	
	PRIMARY KEY (item_id)
);

INSERT INTO products
 (product_name, price, stock_quantity)
VALUES
 ("Sticky Goop", 4.99, 75),
 ("French Fry Perfume", 9.99, 15),
 ("Hand Dirtitizer", 2.99, 50),
 ("Shampoop", 3.99, 40),
 ("Rock, Slop, Glop", 4.99, 100),
 ("Oderizer", 1.99, 65),
 ("Mystery Box", 10.99, 3),
 ("Fungus by AmongUs", 0.99, 20),
 ("3 Tooth Comb", 1.99, 10),
 ('Book: "What''s That Smell?"', 8.99, 80);

SELECT * FROM products