import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="animate-float absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-20"></div>
        <div className="animate-float-delayed absolute top-40 right-20 w-32 h-32 bg-green-100 rounded-full opacity-20"></div>
        <div className="animate-float-slow absolute bottom-20 left-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20"></div>
      </div>

      <Navbar />
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in">
                  Edu<span className="text-blue-600">Track</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl animate-slide-up">
                  Smart School Management System
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all animate-pulse">
                    Login to Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-5xl flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold">Join Our Community</span>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Join us for a smarter school management experience 
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/login">
                  <Button className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-gray-50 relative z-10">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 EduTrack. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-blue-600">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-blue-600">Terms of Service</Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-slow {
          animation: float 10s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Index;
