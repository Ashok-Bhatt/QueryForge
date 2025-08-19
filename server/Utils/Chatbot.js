import {GoogleGenAI} from "@google/genai";
import { GEMINI_API_KEY } from "../config.js";

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

const respondToQuestion = async (context, promptText) => {

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Context : ${context} \n\nQuestion : ${promptText}`,
  });

  return response.text;
}

export { respondToQuestion };
