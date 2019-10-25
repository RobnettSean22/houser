CREATE TABLE homes(
property_id SERIAL PRIMARY KEY,
address VARCHAR(100) NOT NULL,
city VARCHAR(40) NOT NULL,
state VARCHAR(50) NOT NULL,
zip INT NOT NULL,
image TEXT NOT NULL
)
INSERT INTO homes(address, city, state, zip, image)
VALUES
('8224 north washington st', 'thornton', 'Co', 80229, 'ghgh')

SELECT * FROM homes