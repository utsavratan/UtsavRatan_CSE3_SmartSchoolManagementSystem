
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bot, User, Send } from "lucide-react";
import { useForm } from 'react-hook-form';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getGeminiResponse } from '@/services/geminiService';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      content: "Hello! I'm your EduTrack assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };
  
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
  
    // Get response from Gemini
    try {
      const botResponse = await getGeminiResponse(input);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting response from Gemini:', error);
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
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                } animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === 'user'
                      ? 'bg-edutrack text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.sender === 'bot' ? (
                      <>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/lovable-uploads/bot.png" alt="Bot" />
                          <AvatarFallback><Bot size={16} /></AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-gray-600 font-semibold">EduTrack Bot</span>
                      </>
                    ) : (
                      <>
                        <span className="text-xs text-white font-semibold">You</span>
                        <Avatar className="h-6 w-6">
                          <AvatarFallback><User size={16} /></AvatarFallback>
                        </Avatar>
                      </>
                    )}
                  </div>
                  <p>{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSendMessage} className="border-t p-3 bg-gray-50/80 mt-auto">
            <div className="flex items-center gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="min-h-[50px] max-h-[120px] text-base resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />
              <Button 
                type="submit"
                className="h-[50px] bg-edutrack hover:bg-edutrack/90"
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;
