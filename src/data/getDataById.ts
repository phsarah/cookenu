import { connection } from ".."

const TABLE = "cookenu_users"

export const getDataById = async (id: string): Promise<any> => {
    try{
        const result = await connection
        .select("*")
        .from(TABLE)
        .where({id})
        return result[0];
    }
    catch(e){
        throw new Error(e.sqlMessage || e.message)
    }
}

