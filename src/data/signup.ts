import { connection } from ".."
import { user } from "../types/user"

const TABLE = "cookenu_users"

export const signup = async(user: user): Promise<void> =>{
    try{
        await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
        .into(TABLE)
        console.log("Successfully created!")
    }
    catch(e){
        console.log(e.sqlMessage || e.message)
    }
}