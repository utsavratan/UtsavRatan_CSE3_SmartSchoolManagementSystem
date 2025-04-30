
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

const ChatBot = () => {
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
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      
      {/* Header - Removed "Back to Home" button */}
      <header className="bg-skyBlue/90 backdrop-blur-md p-4 shadow-md relative z-10">
        <div className="container mx-auto flex justify-center items-center">
          <h1 className="text-2xl font-bold text-white">EduTrack ChatBot</h1>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-grow container mx-auto p-4 flex flex-col relative z-10">
        <Card className="flex-grow flex flex-col bg-white/90 backdrop-blur-md shadow-xl overflow-hidden">
          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-6">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <Avatar className={`${message.role === "assistant" ? "border-2 border-skyBlue" : "border-2 border-gray-300"}`}>
                    {message.role === "assistant" ? (
                      <AvatarImage src="/public/lovable-uploads/bot.png" alt="Bot" />
                    ) : (
                      <AvatarImage src="/public/lovable-uploads/img1.jpeg" alt="User" />
                    )}
                    <AvatarFallback>
                      {message.role === "assistant" ? <Bot size={20} /> : "U"}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Message bubble */}
                  <div
                    className={`p-3 rounded-lg max-w-[80%] ${
                      message.role === "user"
                        ? "bg-skyBlue text-white rounded-tr-none"
                        : "bg-gray-100 text-gray-800 rounded-tl-none"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input area */}
            <form onSubmit={handleSendMessage} className="border-t p-4">
              <div className="flex gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question here..."
                  className="flex-grow resize-none"
                  rows={1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage(e);
                    }
                  }}
                />
                <Button 
                  type="submit" 
                  className={`bg-skyBlue hover:bg-skyBlueDark text-white flex items-center gap-2 transition-all duration-300 ${isSendHovered ? 'scale-110 shadow-lg' : ''}`}
                  disabled={isLoading}
                  onMouseEnter={() => setIsSendHovered(true)}
                  onMouseLeave={() => setIsSendHovered(false)}
                >
                  <Send size={18} className={`transition-transform duration-300 ${isSendHovered ? 'translate-x-1' : ''}`} />
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatBot;
