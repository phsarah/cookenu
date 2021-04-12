import { connection } from "..";
import { recipe } from "../types/recipe";

const TABLE = "cookenu_recipes"

export const insertRecipes = async (newRecipe: recipe) => {
    try{
        await connection(TABLE)
        .insert(newRecipe)
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}   