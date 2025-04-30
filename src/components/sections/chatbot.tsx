// Chatbot.tsx
import React, { useState, useRef, useEffect } from "react";

// Add type definitions for window objects
declare global {
  interface Window {
    responsiveVoice: any;
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ type: "user" | "bot"; text: string }[]>([
    { type: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = async (text?: string) => {
    const userInput = text ?? input.trim();
    if (!userInput) return;
    
    try {
      setIsLoading(true);
      setMessages((prev) => [...prev, { type: "user", text: userInput }]);
      setInput("");

      const botResponse = await getGeminiResponse(userInput);
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
      speakText(botResponse);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [...prev, { type: "bot", text: "Sorry, something went wrong. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getGeminiResponse = async (inputText: string): Promise<string> => {
    const API_KEY = "AIzaSyA9fMkh6lRMlVf9Mq-KVoWzQSlOkhb1lcE";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: inputText }] }],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that.";
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      return "Error fetching response. Please try again.";
    }
  };

  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && window.responsiveVoice) {
      window.responsiveVoice.speak(text, "UK English Female", { rate: 1 });
    }
  };

  const startVoiceRecognition = () => {
    if (typeof window === 'undefined') return;
    
    try {
      const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!Recognition) {
        alert("Speech recognition is not supported in this browser.");
        return;
      }

      const recognition = new Recognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        sendMessage(transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.error("Speech recognition error:", event.error);
        alert("Error with speech recognition. Please try again.");
      };
      
      recognition.start();
    } catch (error) {
      console.error("Error starting voice recognition:", error);
      alert("Could not start voice recognition. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-500">ChatBot</h2>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div
            ref={chatBoxRef}
            className="max-h-96 overflow-y-auto space-y-4 p-2"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.type === "bot" && (
                  <img
                    src="/lovable-uploads/bot.png"
                    alt="Bot"
                    className="rounded-full w-10 h-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40';
                    }}
                  />
                )}
                <div
                  className={`px-4 py-2 rounded-lg text-sm shadow-sm ${
                    msg.type === "user"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.type === "user" && (
                  <img
                    src="/lovable-uploads/img1.jpeg"
                    alt="User"
                    className="rounded-full w-10 h-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40';
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !isLoading && sendMessage()}
              className="flex-1 p-2 rounded-l-md border border-gray-300 focus:outline-blue-400"
              placeholder="Type your message..."
              disabled={isLoading}
            />
            <button
              onClick={() => sendMessage()}
              className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
            <button
              onClick={startVoiceRecognition}
              className={`ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isLoading}
            >
              🎤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
