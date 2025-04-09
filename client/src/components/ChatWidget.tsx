import { useState, useRef, useEffect } from 'react';
import { SendIcon, XIcon, MessageSquare, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { generateChatResponse } from '@/lib/gemini-ai';
import useChatHistory from '@/hooks/useChatHistory';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { messages, addMessage } = useChatHistory();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage('');
    addMessage(userMessage, 'user');
    setIsLoading(true);

    try {
      const response = await generateChatResponse(userMessage, messages);
      addMessage(response, 'ai');
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage('Sorry, there was an error processing your request. Please try again.', 'ai');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="chat-widget" className="chat-widget" style={{ zIndex: 9999 }}>
      {/* Chat button - floating in the bottom right corner */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 gradient-button"
        style={{ 
          right: '2rem', 
          bottom: '2rem', 
          left: 'auto',
          position: 'fixed',
          zIndex: 9999
        }}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat widget - opens upward from the button */}
      {isOpen && (
        <Card 
          className="fixed w-full max-w-sm sm:max-w-md md:max-w-lg h-[500px] max-h-[calc(100vh-120px)] flex flex-col shadow-xl border border-border gradient-card"
          style={{ 
            right: '2rem', 
            bottom: '5rem', 
            left: 'auto',
            position: 'fixed',
            zIndex: 9999
          }}
        >
          <CardHeader className="flex-none bg-secondary/80 backdrop-blur-sm border-b border-border px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <h3 className="font-semibold gradient-text">Esube Bot</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
              aria-label="Close chat"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
            <div className="bg-secondary/40 backdrop-blur-sm p-3 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                Hi, I'm Esube Bot, Esubalew's AI assistant. How can I help you today?
              </p>
            </div>
            
            {messages.map((msg: { text: string; sender: 'user' | 'ai'; timestamp: number }, index: number) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-tr-none'
                      : 'bg-secondary/40 backdrop-blur-sm border border-border rounded-tl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-3 rounded-lg bg-secondary/40 backdrop-blur-sm border border-border rounded-tl-none">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </CardContent>
          
          <CardFooter className="flex-none border-t border-border p-3 bg-secondary/80 backdrop-blur-sm">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-background/50"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !message.trim()}
                className="h-10 w-10 rounded-full gradient-button"
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;