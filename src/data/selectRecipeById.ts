import { connection } from "..";

const TABLE = "cookenu_recipes"

export const selectRecipe = async (id: string) => {
    try{
        const result = await connection(TABLE)
        .select("*")
        .where({id})

        return result[0]
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}  