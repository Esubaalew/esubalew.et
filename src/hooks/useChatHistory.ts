import { useState, useEffect } from 'react';

interface ChatMessage {
  text: string;
  sender: 'user' | 'ai';
  timestamp: number;
}

const useChatHistory = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        setMessages(parsedMessages);
      } catch (error) {
        console.error('Error parsing saved messages:', error);
        // If parsing fails, clear localStorage
        localStorage.removeItem('chatHistory');
      }
    }
  }, []);

  // Save messages to localStorage when they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  // Add a new message to the history
  const addMessage = (text: string, sender: 'user' | 'ai') => {
    const newMessage: ChatMessage = {
      text,
      sender,
      timestamp: Date.now()
    };
    
    setMessages(prevMessages => {
      // Keep only the last 50 messages to prevent localStorage from filling up
      const updatedMessages = [...prevMessages, newMessage];
      if (updatedMessages.length > 50) {
        return updatedMessages.slice(updatedMessages.length - 50);
      }
      return updatedMessages;
    });
  };

  // Clear all messages
  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem('chatHistory');
  };

  return {
    messages,
    addMessage,
    clearMessages
  };
};

export default useChatHistory;