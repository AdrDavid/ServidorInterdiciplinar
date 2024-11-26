import express from "express";
import {imovelController} from "../src/Controller/ImovelController.js";
import multer from 'multer'
import path from 'path'
import auth from '../middleware/auth.js'
import {app} from "../src/app.js";

import { verify } from "crypto";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/upload')
    },

    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
})
const upload = multer({storage: storage})


const ImovelRouter = express.Router();

const ImovelController = new imovelController();

ImovelRouter.get("/", ImovelController.getAll);
ImovelRouter.post("/", upload.array('imagem'), ImovelController.cadastro );
ImovelRouter.delete("/:id", ImovelController.deletar );
ImovelRouter.get("/:id", ImovelController.getId );


export {ImovelRouter};