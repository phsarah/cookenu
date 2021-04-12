import {connection} from "./index"

async function createTables(){
   try {
      await connection.raw(`
        CREATE TABLE IF NOT EXISTS cookenu_users
        (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(6) NOT NULL,
            role ENUM ('NORMAL', 'ADMIN') DEFAULT 'NORMAL'
         ) 
      `)

      await connection.raw(`
        CREATE TABLE IF NOT EXISTS cookenu_recipes
        (
            id VARCHAR(255) PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            date_of_creation DATE NOT NULL, 
            creator_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (creator_id) REFERENCES cookenu_users(id)
         )
      `)
      await connection.raw(`
      CREATE TABLE IF NOT EXISTS cookenu_follow
      (
         follower_id VARCHAR(255) NOT NULL,
         followed_id VARCHAR(255) NOT NULL
      ) 
    `)
      console.log("MySql setup completed!")
   } catch (error) {
      console.log(error)
   }
}

createTables()