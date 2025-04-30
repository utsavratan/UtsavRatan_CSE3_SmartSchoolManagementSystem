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

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Everything You Need to Manage Your School
                </h2>
                <p className="text-gray-500 md:text-xl">
                  EduTrack provides a comprehensive set of tools to streamline school
                  administration, improve communication, and enhance the learning experience.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-blue-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <h3 className="text-lg font-semibold">Student Management</h3>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-blue-600"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <h3 className="text-lg font-semibold">Attendance Track</h3>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                    <h3 className="text-lg font-semibold">Examinations</h3>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-blue-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <h3 className="text-lg font-semibold">Communication</h3>
                  </div>
                </div>
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
