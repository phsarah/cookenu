import {Request, Response} from 'express'
import { getTokenData } from '../services/authenticator'
import { selectUserById } from '../data/selectUserById'
import { user } from '../types/user'

export const getUserById = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {id} = req.params
        const token: string = req.headers.authorization as string

        getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }

        const user = await selectUserById(id)

        const dataUser: user = {
            id: id,
            name: user.name,
            email: user.email,
            role: user.role
        }

        res.status(200).send(dataUser)
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
