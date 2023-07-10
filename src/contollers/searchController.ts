
import { Request, Response } from 'express';
import { Pet } from '../models/petsModels';
import { creatMenuObject } from '../helpers/creatMenuObject';



export const search = (req: Request, res: Response) => {

    let query: string = req.query.q as string;
    let list = Pet.getFromName(query)
    console.log(query, list)

    res.render('pages/page', {
        menu: creatMenuObject(''),
        list,
        query
    })
}