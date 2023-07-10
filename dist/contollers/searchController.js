"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const petsModels_1 = require("../models/petsModels");
const creatMenuObject_1 = require("../helpers/creatMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    let list = petsModels_1.Pet.getFromName(query);
    console.log(query, list);
    res.render('pages/page', {
        menu: (0, creatMenuObject_1.creatMenuObject)(''),
        list,
        query
    });
};
exports.search = search;
