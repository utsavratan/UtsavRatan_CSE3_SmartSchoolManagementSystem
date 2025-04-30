
const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual API key or use environment variables

interface GeminiRequest {
  contents: {
    role: string;
    parts: {
      text: string;
    }[];
  }[];
  generationConfig: {
    temperature: number;
    topP: number;
    topK: number;
    maxOutputTokens: number;
  };
}

export async function getGeminiResponse(userMessage: string): Promise<string> {
  try {
    // Check if API key is provided
    if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY") {
      return "Please configure your Gemini API key to use this chatbot feature.";
    }
    
    const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
    
    const requestBody: GeminiRequest = {
      contents: [
        {
          role: "user",
          parts: [{ text: userMessage }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 1024
      }
    };
    
    const response = await fetch(`${url}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Gemini API error:", errorData);
      return "Sorry, I encountered an error. Please try again later.";
    }
    
    const data = await response.json();
    
    // Extract the generated text from the response
    if (data.candidates && 
        data.candidates[0] && 
        data.candidates[0].content && 
        data.candidates[0].content.parts && 
        data.candidates[0].content.parts[0]) {
      return data.candidates[0].content.parts[0].text;
    } else {
      return "I'm sorry, I couldn't generate a response at the moment.";
    }
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm sorry, I couldn't process your request due to an error.";
  }
}
