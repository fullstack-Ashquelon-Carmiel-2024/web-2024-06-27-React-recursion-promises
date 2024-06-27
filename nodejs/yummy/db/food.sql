USE yummy;

DROP TABLE IF EXISTS food;

CREATE TABLE food (
    id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE KEY,
    kosher_type CHAR(5) NULL, -- MILK,MEAT,PARVE
    cuisine_id TINYINT NOT NULL,
    image VARCHAR(250) NOT NULL,
    calories SMALLINT NULL,
    prepare_time_min SMALLINT NOT NULL, 
    ingredients VARCHAR(300) NOT NULL,
    type_of_dish VARCHAR(15) NULL -- DESSERT,SOUP,MAIN,SIDE DISH,DRINK
);

/**
1byte = 8bits
00000000
2^8 = 256 (0-255)
*/

INSERT INTO food (name,kosher_type,cuisine_id,
    image, calories, prepare_time_min, 
    ingredients,  type_of_dish)
VALUES ('chumus masbacha','parve',1,'chummus-masbacha.jpg',
    550,120,'chumus, tchina, oil','main'),
 ('sushi','parve',2,'sushi.jpeg',
    250,90,'rice, nuri, avocado','main'),
 ('pavlova','milk',3,'pavlova.jpg',
    330,180,'eggs, whipped cream , crunberry',
    'dessert'),
 ('kube selek','meat',4,'kube-selek.jpeg',
    370, 180,'beetroot, meat, semolina',
    'main'),
 ('ramen',null,2,'ramen.jpeg',
    null, 330,'noodles, chicken, soy souce, eggs',
    'soup');