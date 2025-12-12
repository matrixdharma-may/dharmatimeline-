import { GoogleGenAI } from "@google/genai";
import { LineageNode } from "../types";

const apiKey = process.env.API_KEY || '';

// Safely initialize the client. If no key, we will handle errors at the call site.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateExplanation = async (
  node: LineageNode,
  userQuestion?: string
): Promise<string> => {
  if (!ai) {
    return "API Key is missing. Please check your environment configuration.";
  }

  const context = `
    You are an expert scholar of Buddhism (Buddhologist) with deep knowledge of history, philosophy, and practice.
    The user is currently viewing the node: "${node.name}" (${node.translation || ''}) in a visualization tree.
    
    Context Information about this node:
    - Description: ${node.description || 'N/A'}
    - Key Figures: ${node.keyFigures?.join(', ') || 'N/A'}
    - Core Themes: ${node.coreThemes?.join(', ') || 'N/A'}
    - Locations: ${node.locations?.join(', ') || 'N/A'}
  `;

  let prompt = "";
  if (userQuestion) {
    prompt = `The user asks: "${userQuestion}". Answer accurately and helpfully based on the context of ${node.name}.`;
  } else {
    prompt = `Provide a concise, engaging summary (max 3 sentences) of ${node.name} aimed at a student learning Buddhist history. Mention its significance.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: context }] },
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        maxOutputTokens: 2048,
        temperature: 0.7,
      }
    });

    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, I cannot access the wisdom archives at this moment. Please try again later.";
  }
};
