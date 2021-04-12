import { connection } from "..";

const TABLE = "cookenu_users"

export const selectUserById = async (id: string): Promise<any> => {
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