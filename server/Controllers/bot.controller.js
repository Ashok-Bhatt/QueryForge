import qnas from "../Models/qna.model.js";
import {respondToQuestion} from "../Utils/Chatbot.js"

const askBot = async (req, res) => {

    try{
        const {qnaCode, question} = req.body;

        if (!qnaCode?.trim() || !question?.trim()){
            return res.status(400).json({
                statusCode : 400,
                data : [],
                message : "Both Qna Code and questions are required!",
                success: false,
            })
        }

        const searchedQna = await qnas.findOne(
            {
                uniqueCode: qnaCode,
            }
        )

        if (!searchedQna){
            return res.status(400).json({
                statusCode : 400,
                data : [],
                message : "Invalid Qna Code!",
                success: false,
            })
        }

        const questionResponse = await respondToQuestion(searchedQna["description"], question);

        return res.status(200).json({
            statusCode : 200,
            data : questionResponse,
            message : "Query resolved",
            success: true,
        })
    } catch(error){
        console.error("Error in askBot:", error);
        return res.status(500).json({
            statusCode : 500,
            data : [],
            message : "Internal Server Error",
            success: false,
        });
    }
}

export {
    askBot
}