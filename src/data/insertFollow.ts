import { connection } from "..";
import { follow } from "../types/follow";

const TABLE = "cookenu_follow"

export const insertFollow = async (newFollow: follow) => {
    try{
        await connection(TABLE)
        .insert(newFollow)
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}   