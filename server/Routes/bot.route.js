import { Router } from "express";
import {askBot} from "../Controllers/bot.controller.js"

const router = new Router();

router.route("/ask").post(askBot);

export default router;