DROP DATABASE IF EXISTS waynes_world;
CREATE DATABASE waynes_world; 

\c waynes_world

DROP TABLE IF EXISTS blogs;
CREATE TABLE blogs (
id SERIAL PRIMARY KEY,
title VARCHAR(80) NOT NULL,
body text,
email text,
image text,
location text
);