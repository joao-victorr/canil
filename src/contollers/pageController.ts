
import { Request, Response } from 'express';
import { creatMenuObject } from '../helpers/creatMenuObject';
import { Pet } from '../models/petsModels'


export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()

    res.render('pages/page', {
        banner: {
            title: 'animais',
            background: 'allanimals.jpg'
        },
        menu: creatMenuObject("all"),
        list
    })
};

export const dogs = (req: Request, res: Response) => {

    let list = Pet.getFromType("dog")

    res.render('pages/page', {
        banner: {
            title: 'cachorros',
            background: 'banner_dog.jpg'
        },
        menu: creatMenuObject("dog"),
        list
    })
};

export const cats = (req: Request, res: Response) => {

    let list = Pet.getFromType("cat")

    res.render('pages/page', {
        banner: {
            title: 'gatos',
            background: 'banner_cat.jpg'
        },
        menu: creatMenuObject("cat"),
        list
    })
};

export const fishes= (req: Request, res: Response) => {

    let list = Pet.getFromType("fish")

    res.render('pages/page', {
        banner: {
            title: 'peixes',
            background: 'banner_fish.jpg'
        },
        menu: creatMenuObject("fish"),
        list
    })
};