import pdf from "pdf-parse";

const getPdfContent = async (file) => {
    try{
        const pdfData = await pdf(file.data);
        let pdfText = pdfData.text + "\n\n";
        return pdfText;
    } catch (error){
        return ""
    }
}

export {
    getPdfContent
}