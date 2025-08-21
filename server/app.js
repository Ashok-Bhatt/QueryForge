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

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the QnA Bot API",
        apiEndpoints: [
            {
                endpoint: "https://queryforge-8cgm.onrender.com/api/v1/qna",
                method: "POST",
                description: "Create a new QnA bot",
                body: {
                    "description": "string",
                    "attachments": "files (optional, can be multiple files)"
                },
                returns: {
                    "statusCode": "number",
                    "data": {
                        "description": "string",
                        "uniqueCode": "string",
                    },
                    "message": "string",
                    "success": "boolean"
                }
            },
            {
                endpoint: "https://queryforge-8cgm.onrender.com/api/v1/bot/ask",
                method: "POST",
                description: "Ask a question to the QnA bot",
                body: {
                    "qnaCode": "string (unique code of the QnA bot generated during creation)",
                    "question": "string"
                },
                returns: {
                    "statusCode": "number",
                    "data": {
                        "response": "string (response to the question asked)"
                    },
                    "message": "string",
                    "success": "boolean"
                }
            }
        ]
    });
});

export {app};