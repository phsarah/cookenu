import {Request, Response} from 'express'
import {getTokenData, AuthenticationData} from '../services/authenticator'
import { getDataById } from '../data/getDataById'


export const dataCollector = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const token: string = req.headers.authorization  as string

        const tokenData: AuthenticationData = getTokenData(token)

        if(!getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }
    
        const user = await getDataById(tokenData.id)

        if (!user) {
            statusCode = 404
            throw new Error('User not found!')
        }

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.message || e.sqlMessage
        })
    }
}