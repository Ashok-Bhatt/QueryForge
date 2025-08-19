import { Router } from "express";
import {createQna} from "../Controllers/qna.controller.js"

const router = new Router()

router.route("/").post(
    createQna
);

export default router;