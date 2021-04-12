import {Request, Response} from 'express'
import { signup } from '../data/signup'
import { generateToken } from '../services/authenticator'
import { generateId } from "../services/idGenerator"
import { hash } from '../services/hashManager'
import { USER_ROLES } from '../types/user'


export const userCreator = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            statusCode = 422
            throw new Error("Please make sure all fields are filled 'name', 'email', 'password' and 'role'(NORMAL, ADMIN)")
        }
        if(!email.includes("@")){
            throw new Error("The 'email' must contain @")
        }
        if(password.length > 6){
            throw new Error("The 'password' must contain a maximum of 6 characters")
        }
        if(role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN){
            throw new Error("role must be 'NORMAL' or 'ADMIN'")
        }
        const id = generateId()
        const token = generateToken({
            id,
            role: role
        })
       
        const cypherPassword:string  = await hash(password)

        await signup({id, name, email, password: cypherPassword, role })
        
        res.status(200).send({
            access_token: token
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}

