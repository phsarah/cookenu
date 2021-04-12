import {Request, Response} from 'express'
import { selectRecipe } from '../data/selectRecipeById'
import { getTokenData } from '../services/authenticator'

export const getRecipesById = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {id} = req.params
        const token: string = req.headers.authorization as string
        
        getTokenData(token)

        if(!token || !getTokenData){
            statusCode = 406
            throw new Error('Invalid token')
        }
        const recipe = await selectRecipe(id)
        
        res.status(201).send({
            id: id,
            title: recipe.title,
            description: recipe.description,
            date_of_creation: recipe.date_of_creation,
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
