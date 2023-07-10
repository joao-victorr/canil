"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.creatMenuObject = void 0;
const creatMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== "") {
        returnObject[activeMenu] = true;
    }
    return returnObject;
};
exports.creatMenuObject = creatMenuObject;
