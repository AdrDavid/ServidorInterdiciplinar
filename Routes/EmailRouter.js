import express from "express";

import {emailController} from "../src/Controller/emailController.js";


const EmailRouter = express.Router();
const EmailController = new emailController();
EmailRouter.post("/send", EmailController.enviar);


export {EmailRouter}


