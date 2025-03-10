// route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


console.log(process.env.GOOGLE_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    
    // Format messages for Gemini
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }]
    }));
    
    // Use the correct model and API version
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Start a chat and send messages
    const chat = model.startChat({
      history: formattedMessages.slice(0, -1),
    });
    
    // Get the last user message
    const lastUserMessage = formattedMessages[formattedMessages.length - 1].parts[0].text;
    
    // Generate a response
    const result = await chat.sendMessage(lastUserMessage);
    const response = await result.response;
    const text = response.text();
    
    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
