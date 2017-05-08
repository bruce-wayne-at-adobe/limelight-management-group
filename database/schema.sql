CREATE DATABASE database_name;
DROP DATABASE IF EXISTS waynes_world;

\c waynes_world

CREATE TABLE blogs (
id SERIAL PRIMARY KEY,
title VARCHAR(80) NOT NULL,
body text,
email text,
image text,
location text
);