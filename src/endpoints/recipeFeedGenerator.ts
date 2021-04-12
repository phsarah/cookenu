import {Request, Response} from 'express'
import { selectAllRecipes } from '../data/selectAllRecipesByJoin'
import { getTokenData } from '../services/authenticator'

export const getFeed = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const token: string = req.headers.authorization as string
        
        getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }
        
        const queryData =  await selectAllRecipes()
        
        const recipes = queryData.map((item: any) => {
            return {id: item.id, title: item.title, description: item.description, dateOfCreation: item.date_of_creation, creatorId: item.creator_id, creatorName: item.name}
        })
        
        res.status(201).send({
            recipes: recipes
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
