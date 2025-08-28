import {v4 as uuid} from "uuid";
import qnas from "../Models/qna.model.js";
import {getPdfContent} from "../Utils/pdfContent.js";

const createQna = async (req, res) => {

    try{
        const {name, description} = req.body;
        let finalDescription = description;
        const maxSize = 5*1024*1024;

        if (!description.trim()){
            return res.status(400).json({
                statusCode : 400,
                data : [],
                message : "Description not provided",
                success: false,
            })
        }

        if (req?.files?.attachments){
            if (!Array.isArray(req.files.attachments)){
                if (req.files.attachments.mimetype=="application/pdf" && req.files.attachments.size<=maxSize){
                    const pdfContent = await getPdfContent(req.files.attachments);
                    finalDescription = finalDescription + "\n\n" + pdfContent; 
                }
            } else {
                for (let i=0; i<Math.min(req.files.attachments.length, 5); i++){
                    if (req.files.attachments[i].mimetype=="application/pdf" && req.files.attachments[i].size<=maxSize){
                        const pdfContent = await getPdfContent(req.files.attachments[i]);
                        finalDescription = finalDescription + "\n\n" + pdfContent;
                        console.log(`Accepted: ${i}`);
                    } else {
                        console.log(`Rejected: ${i}`);
                    }
                }
            }
        }

        const newQna = await qnas.create({
            name,
            description : finalDescription,
            uniqueCode: uuid(),
        })

        if (!newQna){
            return res.status(500).json({
                statusCode : 500,
                data : [],
                message : "Couldn't create qna",
                success: false,
            })
        }

        return res.status(200).json({
            statusCode : 200,
            data : newQna,
            message : "Qna created successfully",
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
    createQna
}