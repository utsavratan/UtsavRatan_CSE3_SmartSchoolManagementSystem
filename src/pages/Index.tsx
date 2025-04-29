import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f0f4ff] to-[#dbeafe] scroll-smooth">
      <Navbar />
      <main className="flex-1">
        <section className="relative w-full py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/your-bg.jpg')] bg-cover bg-center opacity-10 blur-sm" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="container px-4 md:px-6 text-center relative z-10"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-blue-900">
              Edu<span className="text-edutrack">Track</span>
            </h1>
            <p className="mt-4 max-w-xl mx-auto text-gray-600 md:text-xl">
              Smart School Management System
            </p>
            <div className="mt-6">
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Login to Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        <section className="w-full py-20 md:py-32">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="container px-4 md:px-6 grid max-w-5xl mx-auto gap-12 lg:grid-cols-2"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Everything You Need to Manage Your School
              </h2>
              <p className="text-gray-600 md:text-xl">
                EduTrack provides tools to streamline school administration, improve communication, and enhance learning.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { title: "Student Management", icon: "👨‍🎓" },
                { title: "Attendance Track", icon: "📅" },
                { title: "Examinations", icon: "📝" },
                { title: "Communication", icon: "📢" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="bg-white/40 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 transition-all hover:scale-105"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="w-full py-24 md:py-32 bg-gradient-to-r from-blue-100 to-blue-50 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="container px-4 md:px-6 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Ready to Streamline Your School Management?
            </h2>
            <p className="mt-4 text-gray-600 md:text-xl">
              Join educational institutions that trust EduTrack for their digital management needs.
            </p>
            <div className="mt-6">
              <Link to="/login">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="w-full border-t py-6 bg-white">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500">© 2025 EduTrack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
