import {Request, Response} from 'express'
import { getTokenData } from '../services/authenticator'
import { insertFollow } from '../data/insertFollow'
import { selectUserById } from '../data/selectUserById'


export const userFollow = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {userToFollowId} = req.body
        const token: string = req.headers.authorization as string

        const tokenData = getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }

        if(!userToFollowId){
            statusCode = 422
            throw new Error("Please make sure all fields are filled 'userToFollowId'")
        }
        await insertFollow({
            follower_id: tokenData.id,
            followed_id: userToFollowId
        })
                
        const followerData = await selectUserById(tokenData.id)
        const followedData = await selectUserById(userToFollowId)

        if(!followerData || !followedData){
            throw new Error("User not found!")
        }

        res.status(200).send({
            message: `${followerData.name} successfully followed ${followedData.name}!`
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
