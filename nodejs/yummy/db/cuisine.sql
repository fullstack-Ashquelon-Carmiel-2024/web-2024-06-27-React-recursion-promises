USE yummy;

DROP TABLE IF EXISTS cuisine;

CREATE TABLE cuisine (
    id TINYINT NOT NULL PRIMARY KEY,
    name VARCHAR(60) NOT NULL UNIQUE KEY,
    continent VARCHAR(15) NOT NULL,
    flag VARCHAR(250) NULL,
    description VARCHAR(500) NULL
);

INSERT INTO cuisine (id,name,continent)
VALUES (1, 'Israeli','Asia'),
 (2, 'Japanese','Asia'),
 (3, 'Australian','Australia'),
 (4, 'Iraqi','Asia'),
 (5, 'French','Europe');

