import express from "express";
import cors from "cors";
import qnaRouter from "./Routes/qna.route.js";
import botRouter from "./Routes/bot.route.js";
import {CORS_ORIGIN} from "./config.js";
import fileUpload from "express-fileupload";

const app = express();

const corsOption = {
    origin: CORS_ORIGIN,
    credentials: true,
}

app.use(express.json({limit: "16mb"}));
app.use(express.urlencoded({extended: true, limit: "16mb"}));
app.use(express.static("public"));
app.use(fileUpload());

app.use(cors(corsOption));

app.use("/api/v1/qna", qnaRouter);
app.use("/api/v1/bot", botRouter);

export {app};