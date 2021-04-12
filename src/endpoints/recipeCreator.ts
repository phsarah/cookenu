import {Request, Response} from 'express'
import { insertRecipes } from '../data/insertRecipes'
import { generateId } from "../services/idGenerator"
import { getTokenData, AuthenticationData } from '../services/authenticator'
import { getDataById } from '../data/getDataById'
import dayjs from 'dayjs'


export const recipeCreator = async(req: Request, res: Response): Promise<void> => {
    let statusCode: number = 400
    try{
        const {title, description} = req.body
        const token: string = req.headers.authorization as string

        if(!title){
            statusCode = 422
            throw new Error("Please provide a 'title' for your recipe") 
        }
        const id: string = generateId()
        
        const tokenData: AuthenticationData = getTokenData(token)
        const user = await getDataById(tokenData.id)
        
        if(!user){
            statusCode = 404
            throw new Error('User not found!')
        }
        await insertRecipes({
           id: id,
           title: title,
           description: description || "",
           date_of_creation: dayjs().format('YYYY-MM-DD'),
           creator_id: user.id
       })
        res.status(201).send({
           message: "Recipe created!" 
        })
    }
    catch(e){
        res.status(statusCode).send({
            message: e.sqlMessage || e.message
        })
    }
}
