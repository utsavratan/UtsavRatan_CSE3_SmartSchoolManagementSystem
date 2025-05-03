
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import AnimatedBackground from "@/components/AnimatedBackground";
import { getGeminiResponse } from "@/services/geminiService";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm EduTrack's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSendHovered, setIsSendHovered] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to the chat
    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    try {
      // Get response from Gemini API
      const response = await getGeminiResponse(input);
      
      // Add assistant message to the chat
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to get response. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-4">
      <Card className="flex-grow flex flex-col bg-white shadow-md overflow-hidden border border-gray-100 rounded-lg">
        {/* Chat Messages */}
        <CardContent className="flex-grow p-0 flex flex-col h-[calc(100vh-220px)]">
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : "flex-row"
                } animate-fade-in`}
              >
                {/* Avatar */}
                <Avatar className={`${
                  message.role === "assistant" 
                    ? "border-2 border-primary shadow-sm" 
                    : "border-2 border-gray-300 shadow-sm"
                } h-8 w-8`}>
                  {message.role === "assistant" ? (
                    <AvatarImage src="/lovable-uploads/bot.png" alt="Bot" />
                  ) : (
                    <AvatarImage src="/lovable-uploads/img1.jpeg" alt="User" />
                  )}
                  <AvatarFallback className="text-xs">
                    {message.role === "assistant" ? <Bot size={14} /> : "U"}
                  </AvatarFallback>
                </Avatar>
                
                {/* Message bubble */}
                <div
                  className={`p-2.5 rounded-lg max-w-[80%] shadow-sm ${
                    message.role === "user"
                      ? "bg-primary text-white rounded-tr-none"
                      : "bg-gray-100 text-gray-800 rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t p-3 bg-gray-50/80 mt-auto">
            <div className="flex items-center gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow resize-none py-2 px-3 min-h-0 h-10 overflow-hidden text-sm border-gray-200 focus:border-primary"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                style={{ height: '40px' }}
              />
              <Button 
                type="submit" 
                size="sm"
                className={`h-10 bg-primary hover:bg-primary/90 text-white flex items-center gap-2 transition-all duration-300 ${
                  isSendHovered ? 'scale-105 shadow-md' : ''
                }`}
                disabled={isLoading}
                onMouseEnter={() => setIsSendHovered(true)}
                onMouseLeave={() => setIsSendHovered(false)}
              >
                <Send size={16} className={`transition-transform duration-300 ${isSendHovered ? 'translate-x-0.5' : ''}`} />
                {isLoading ? "Sending..." : "Send"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
