CREATE TABLE `cookenu_signup`(
	`id` VARCHAR(255) PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(6) NOT NULL
);
CREATE TABLE cookenu_recipes(
	"id" VARCHAR(255) PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "date_of_creation" DATE NOT NULL, 
    "creator_id" VARCHAR(255) NOT NULL,
	FOREIGN KEY (creator_id) REFERENCES cookenu_users(id)
);
