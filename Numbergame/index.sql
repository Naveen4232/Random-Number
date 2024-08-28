CREATE DATABASE guess_game;

USE guess_game;

CREATE TABLE score (
    id INT AUTO_INCREMENT PRIMARY KEY,
    score INT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
