import { compare } from '../services/hashManager'
import {Request, Response} from 'express'
import { login } from '../data/login'
import {generateToken} from '../services/authenticator'

export const userLogin = async(req: Request, res: Response) => {
    let statusCode: number = 400
    try{
        const {email, password} = req.body

        if(!email || !password){
            statusCode = 422
            throw new Error("Please make sure all fields are filled 'email' and 'password'")
        }
       
        const user = await login(email)

        if(!user){
           throw new Error("User not found!")
        }

        const passwordIsCorrect:boolean = compare(
            password, 
            user.password
        )

        if(!passwordIsCorrect){
            throw new Error("Incorrect Password")
        }

        const token = generateToken({
            id: user.id,
            role: user.role
         });

        res.status(200).send({ 
            token 
        });
    }
    catch(e){
        res.status(statusCode).send({
            message: e.message
        })
    }
}