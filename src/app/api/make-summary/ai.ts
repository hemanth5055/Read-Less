import { GoogleGenerativeAI } from "@google/generative-ai";
const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model_name = "gemini-2.5-flash";
const model = genAi.getGenerativeModel({ model: model_name });

export async function generateSummary(text: String) {
  const response = await model.generateContent(`
        You are professional pdf text summarizer.You job is to go throught the below attached pdf text and summarize the whole content. pdf_text : ${text}

        !Important 
        You must return the JSON response in the following format
        {
        "name" : < genarate a name for this summary >,
        "description": < A two line descritopn of the content >,
        "content" : < Complete summary in markdown format "
        }
        - Do NOT include any explanation or markdown syntax.
        - Do NOT wrap the object in \`\`\`json or any code blocks.
        `);
  return JSON.parse(response.response.text());
}
