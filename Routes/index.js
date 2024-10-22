import express from "express";
import {ImovelRouter} from "./ImovelRouter.js";
import {EmailRouter} from "./EmailRouter.js";

const router = express.Router();

router.use("/imovel", ImovelRouter);
router.use("/email", EmailRouter);


export default router;