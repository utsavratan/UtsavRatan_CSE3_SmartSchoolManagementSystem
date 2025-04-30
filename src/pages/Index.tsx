
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";
import StatsCounter from "@/components/StatsCounter";
import Features from "@/components/FeatureCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Index = () => {
  const navigate = useNavigate();

  // Helper function to handle scroll reveal animations
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    // Add the event listener
    window.addEventListener("scroll", handleScroll);
    
    // Trigger once on load
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4">
        <div className="text-center max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-skyBlue to-blue-700 animate-scale-in">
            EduTrack
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 font-light max-w-3xl mx-auto animate-blur-in">
            Smart School Management System
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up">
            <Button 
              onClick={() => navigate("/login")}
              className="bg-skyBlue hover:bg-skyBlueDark text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cta-button"
            >
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-skyBlue opacity-80"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-skyBlue/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 reveal">
            EduTrack Stats
          </h2>
          <StatsCounter />
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 reveal">
            Powerful Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto reveal">
            All the tools you need to streamline school administration and enhance the learning experience
          </p>
          <Features />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-skyBlue/20 to-skyBlueLight/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="circle"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.4,
                filter: 'blur(50px)',
                animation: `float ${10 + Math.random() * 15}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Join EduTrack for best Educational Management Experience
            </p>
            <Button 
              onClick={() => navigate("/login")}
              className="bg-skyBlue hover:bg-skyBlueDark text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto cta-button"
            >
              Login to Dashboard
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} EduTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
