import { connection } from "..";

const TABLE = "cookenu_recipes"

export const deleteRecipe = async (id: string, createId: string):Promise<void> => {
    try{
        await connection.raw(`
        DELETE FROM cookenu_recipes'
        WHERE id = "${id}" AND creator_id = "${createId}
        `)
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
} 