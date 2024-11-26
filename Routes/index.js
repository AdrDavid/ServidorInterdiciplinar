import express from "express";
import {ImovelRouter} from "./ImovelRouter.js";
import {EmailRouter} from "./EmailRouter.js";
import {UserRouter} from "./UserRouter.js";
const router = express.Router();

router.use("/imovel", ImovelRouter);
router.use("/email", EmailRouter);
router.use("/user", UserRouter);


export default router;