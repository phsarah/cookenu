import { connection } from "..";

const TABLE = "cookenu_recipes"

export const selectAllRecipes = async (): Promise<any> => {
    try{
        const result = await connection.raw(`
        SELECT * FROM cookenu_recipes
        INNER JOIN cookenu_users
        ON cookenu_users.id = cookenu_recipes.creator_id; 
    `)

        return result[0]
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}  