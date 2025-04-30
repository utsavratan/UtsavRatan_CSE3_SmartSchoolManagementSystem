import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { useInView } from "react-intersection-observer";

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000 right-0"></div>
        <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-0"></div>
      </div>

      <Navbar />

      <main className="flex-1 relative z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white/80 to-blue-50/80 backdrop-blur-md"
        >
          <div className="container px-4 md:px-6 text-center space-y-10">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 animate-text-glow"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome to <span className="drop-shadow-md">EduTrack</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-gray-600 md:text-xl"
            >
              A smarter way to manage your school – from attendance to exams to communication, all in one place.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-x-4">
              <Link to="/login">
                <Button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Login to Dashboard
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="py-20 bg-white backdrop-blur-md"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Everything You Need in One Place
                </h2>
                <p className="text-gray-600 md:text-lg">
                  From managing students and tracking attendance to running exams and improving communication, EduTrack gives you full control.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {["Students", "Attendance", "Exams", "Chat"].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-transform"
                  >
                    <h3 className="text-xl font-semibold text-blue-700">{feature}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
        >
          <div className="container px-4 md:px-6 text-center space-y-6">
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Join Thousands of Schools
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-600 max-w-xl mx-auto">
              EduTrack powers educational institutions with tools built for the modern world. Let’s build the future of learning together.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/login">
                <Button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Get Started
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <footer className="w-full border-t py-6 bg-white/80 backdrop-blur-sm">
        <div className="container flex flex-col md:flex-row items-center justify-between px-4 md:px-6">
          <p className="text-sm text-gray-500">© 2025 EduTrack. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link to="#" className="text-sm hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;
