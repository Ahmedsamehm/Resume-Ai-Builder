import { GoogleGenAI } from "@google/genai";
import prompts from "../../data/Prompts";
import Tost from "../../components/Tost";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || "MISSING_API_KEY",
});

async function GeminiAi(params) {
  const { TostError } = Tost();
  const { Text, handleImprove, contentType, setKeywords } = params;

  const getJobDescription = localStorage.getItem("jobDescription");

  // Get the appropriate prompt based on content type
  const prompt = prompts[contentType];

  // Replace placeholders in the prompt with actual values
  const promptWithValues = prompt
    .replace("{text}", Text || "")
    .replace("{jobDescription}", getJobDescription || "");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: promptWithValues,
    });

    const responses = response?.text;

    // If there's a callback to improve the text, call it
    if (handleImprove) {
      handleImprove(responses);
    }

    // If there's a callback to set keywords, process and set them
    if (setKeywords) {
      // Clean the response from any ``` markers if present
      const cleanedResponse = responses
        .trim()
        .replace(/```(?:json|javascript)?\n?([\s\S]*?)\n?```/, "$1");

      try {
        const parsedKeywords = JSON.parse(cleanedResponse);

        if (parsedKeywords) {
          setKeywords(parsedKeywords);
          const dataToStore = JSON.stringify(parsedKeywords);
          localStorage.setItem("keywords", dataToStore);
        }
      } catch (error) {
        TostError("Failed to parse keywords JSON");
        console.error("Failed to parse keywords JSON:", error, cleanedResponse);
      }
    }

    return responses;
  } catch (error) {
    TostError("Error calling Ai");
    console.error("Error calling Ai: ", error);
    throw error;
  }
}

export { GeminiAi };
