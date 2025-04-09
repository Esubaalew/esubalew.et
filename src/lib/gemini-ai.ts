interface GeminiResponse {
  candidates: {
    content: {
      parts: {
        text: string;
      }[];
    };
  }[];
}

export const generateChatResponse = async (
  message: string,
  history: { text: string; sender: 'user' | 'ai' }[]
) => {
  try {
    const API_KEY = 'AIzaSyC-VLhV9qldU3tMfihK8vWt0DsPsuSyqog';
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // Format chat history for Gemini
    const formattedHistory = history.map((item) => ({
      role: item.sender === 'user' ? 'user' : 'model',
      parts: [{ text: item.text }],
    }));

    // Add system prompt
    const systemPrompt = {
      role: 'system',
      parts: [{ 
        text: "You are 'Esube Bot', a professional, knowledgeable AI assistant created by Esubalew Chekol. " +
              "You provide helpful, accurate, and concise information about Esubalew's projects, skills, and experiences. " +
              "You represent Esubalew's passion for software development, AI, and helpful technology. " +
              "Keep responses brief and relevant, focusing on Esubalew's work and expertise in Python, JavaScript, React, Django, and Telegram bot development. " +
              "You're running on Gemini Pro API through a custom integration on Esubalew's portfolio website."
      }],
    };

    // Add current message
    const payload = {
      contents: [
        systemPrompt,
        ...formattedHistory,
        {
          role: 'user',
          parts: [{ text: message }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 800,
        safetySettings: [
          { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
          { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
          { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
          { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
        ]
      },
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error details:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as GeminiResponse;
    return data.candidates[0]?.content.parts[0]?.text || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Sorry, there was an error communicating with the AI service. Please try again later.';
  }
};