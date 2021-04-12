import {Request, Response} from 'express'
import { getTokenData } from '../services/authenticator'
import { selectUserById } from '../data/selectUserById'
import { deleteFollow } from '../data/deleteFollow'


export const userUnfollow = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {userToUnFollowId} = req.body
        const token: string = req.headers.authorization as string

        const tokenData = getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }

        if(!userToUnFollowId){
            statusCode = 422
            throw new Error("Please make sure all fields are filled 'userToUnFollowId'")
        }
        await deleteFollow({
            follower_id: tokenData.id,
            followed_id: userToUnFollowId
        })
                
        const followerData = await selectUserById(tokenData.id)
        const followedData = await selectUserById(userToUnFollowId)

        if(!followerData || !followedData){
            throw new Error("User not found!")
        }

        res.status(200).send({
            message: `${followerData.name} successfully unfollowed ${followedData.name}!`
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}