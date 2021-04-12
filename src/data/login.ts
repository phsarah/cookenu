import { connection } from ".."

const TABLE = "cookenu_users"

export const login = async (email: string): Promise<any> => {
    try{
        const result = await connection
        .select("*")
        .from(TABLE)
        .where({email})
        return result[0];
    }
    catch(e){
       throw new Error(e.sqlMessage || e.message)
    }
}