import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model_name = "gemini-2.5-flash";
const model = genAi.getGenerativeModel({
  model: model_name,
});
export async function generateSummary(text: string) {
  const response = await model.generateContent(`
    You are a professional PDF text summarizer. Your job is to go through the below attached PDF text and summarize the whole content.
    
    PDF text: ${text}
    
    CRITICAL: You must return ONLY a valid JSON object with no additional text, explanations, or markdown formatting.
    
    Required JSON structure:
    {
      "name": "Generated name for this summary",
      "description": "A two-line description of the content",
      "content": "Complete summary in markdown format"
    }
    
    Return only the JSON object, nothing else.
  `);

  try {
    const responseText = response.response.text().trim();
    let cleanJson = responseText;
    if (cleanJson.startsWith("```json")) {
      cleanJson = cleanJson.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (cleanJson.startsWith("```")) {
      cleanJson = cleanJson.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    const startIndex = cleanJson.indexOf("{");
    const lastIndex = cleanJson.lastIndexOf("}");

    if (startIndex !== -1 && lastIndex !== -1 && lastIndex > startIndex) {
      cleanJson = cleanJson.substring(startIndex, lastIndex + 1);
    }

    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("JSON parsing error:", error);
    // console.error('Response text:', response.response.text());
    return {
      name: "Summary",
      description: "Unable to parse structured response",
    };
  }
}
