import express from "express";
import {ImovelRouter} from "./ImovelRouter.js";

const router = express.Router();

router.use("/imovel", ImovelRouter);

export default router;