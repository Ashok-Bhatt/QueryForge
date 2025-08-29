import {GoogleGenAI} from "@google/genai";
import { GEMINI_API_KEY } from "../config.js";
import { scrapeURL, scrapeURLDeclaration } from "./Scrapper.js";

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const tools = {
  scrapeURL,
}

const respondToQuestion = async (context, promptText) => {

  let responseText = "";

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Context : ${context} \n\nQuestion : ${promptText}`,
    config: {
      tools: [{
        functionDeclarations: [scrapeURLDeclaration]
      }],
    },
  });

  responseText = responseText + response.text;

  if (response.functionCalls && response.functionCalls.length>0){
    for (let i=0; i<response.functionCalls.length; i++){
      const {name, args} = response.functionCalls[i];
      const toolResponse = {
          name : name,
          response : await tools[name](args)
      }

      const finalResponse = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Context: ${context} \n\nQuestion: ${promptText} \n\n ${toolResponse.response}`
      })
      
      responseText = responseText + finalResponse.text;
    }
  }

  return responseText;
}

export { respondToQuestion };
