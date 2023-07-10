"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const creatMenuObject_1 = require("../helpers/creatMenuObject");
const petsModels_1 = require("../models/petsModels");
const home = (req, res) => {
    let list = petsModels_1.Pet.getAll();
    res.render('pages/page', {
        banner: {
            title: 'animais',
            background: 'allanimals.jpg'
        },
        menu: (0, creatMenuObject_1.creatMenuObject)("all"),
        list
    });
};
exports.home = home;
const dogs = (req, res) => {
    let list = petsModels_1.Pet.getFromType("dog");
    res.render('pages/page', {
        banner: {
            title: 'cachorros',
            background: 'banner_dog.jpg'
        },
        menu: (0, creatMenuObject_1.creatMenuObject)("dog"),
        list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = petsModels_1.Pet.getFromType("cat");
    res.render('pages/page', {
        banner: {
            title: 'gatos',
            background: 'banner_cat.jpg'
        },
        menu: (0, creatMenuObject_1.creatMenuObject)("cat"),
        list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = petsModels_1.Pet.getFromType("fish");
    res.render('pages/page', {
        banner: {
            title: 'peixes',
            background: 'banner_fish.jpg'
        },
        menu: (0, creatMenuObject_1.creatMenuObject)("fish"),
        list
    });
};
exports.fishes = fishes;
