import { connection } from "..";
import { follow } from "../types/follow";

const TABLE = "cookenu_follow"

export const deleteFollow = async (newUnfollow: follow) => {
    try{
        await connection(TABLE)
        .where(newUnfollow)
        .delete()
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}   