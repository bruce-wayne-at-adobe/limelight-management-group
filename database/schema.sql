DROP TABLE IF EXISTS blogs;

CREATE TABLE blogs(
	id SERIAL PRIMARY KEY,
	title VARCHAR(80) NOT NULL,
	body TEXT,
	email TEXT,
	image BYTEA,
	location TEXT
) ;