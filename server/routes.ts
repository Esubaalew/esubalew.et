import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateChatResponse } from "../client/src/lib/gemini-ai";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for Gemini AI chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }
      
      const apiKey = process.env.GEMINI_API_KEY || "AIzaSyBLQDfbZF0jVKvDkFAEioudgq6lffC5hDg";
      const response = await generateChatResponse(message, apiKey);
      
      return res.json({ response });
    } catch (error) {
      console.error("Error in /api/chat:", error);
      return res.status(500).json({ 
        error: "Failed to get response from AI",
        details: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
