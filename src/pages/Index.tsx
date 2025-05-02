
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight,
  GraduationCap,
  Clock,
  Github,
  Linkedin
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: statsRef, inView: statsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: testimonialRef, inView: testimonialVisible } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: developerRef, inView: developerVisible } = useInView({ threshold: 0.2, triggerOnce: true });

  const heroSlides = [
    {
      heading: "Smart School Management",
      subheading: "Streamline your educational institution with our all-in-one platform",
    },
    {
      heading: "Track Student Progress",
      subheading: "Monitor academic performance with intuitive dashboards and reports",
    },
    {
      heading: "Efficient Administration",
      subheading: "Simplify administrative tasks with automated workflows",
    }
  ];

  const stats = [
    { value: "95%", label: "Improved efficiency" },
    { value: "80%", label: "Reduced admin work" },
    { value: "50%", label: "Better communication" },
    { value: "70%", label: "Enhanced engagement" },
  ];

  const testimonials = [
    {
      name: "Mr. Sharma",
      role: "School Principal",
      comment: "EduTrack has transformed the way we manage our institution. The streamlined processes have saved us countless hours of administrative work."
    },
    {
      name: "Mrs. Gupta",
      role: "Parent",
      comment: "As a parent, I love being able to track my child's progress in real-time. The interface is intuitive and keeps me connected to their education."
    },
    {
      name: "Prof. Kumar",
      role: "Teacher",
      comment: "The grading and assessment tools have made my job much easier. I can focus more on teaching and less on paperwork."
    }
  ];

  const developers = [
    {
      name: "Utsav Ratan",
      role: "Full Stack Developer",
      university: "K.R. Mangalam University",
      email: "2401010046@krmu.edu.in",
      github: "https://github.com/utsavratan",
      linkedin: "https://linkedin.com/in/misterutsav"
    },
    {
      name: "Ishan Jha",
      role: "Full Stack Developer",
      university: "K.R. Mangalam University",
      email: "2401010022@krmu.edu.in",
      github: "https://github.com/ishanjha",
      linkedin: "https://linkedin.com/in/ishanjha"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Animated Background */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_600px,rgba(120,119,198,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
          <svg className="absolute bottom-0 left-0 right-0 opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center h-[60vh] text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-6"
              >
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-3 tracking-tight">
                  EduTrack
                </h1>
                <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-purple-400 to-indigo-300 mx-auto rounded-full mb-4"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  {heroSlides[currentSlide].heading}
                </h2>
                <p className="mt-4 text-lg text-purple-100">
                  {heroSlides[currentSlide].subheading}
                </p>
              </motion.div>

              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link to="/login">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-900 hover:bg-purple-100 hover:scale-105 transform transition-all duration-200 group"
                  >
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                className="pt-8 flex gap-10 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gradient-to-r from-violet-900 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-white rounded-full blur-3xl -mr-20 -mb-20"></div>
          <div className="absolute left-0 top-0 w-72 h-72 bg-purple-400 rounded-full blur-3xl -ml-20 -mt-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact on Educational Management</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              See how EduTrack is transforming educational institutions
            </p>
          </div>

          <motion.div 
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={statsVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    delay: 0.1 * index 
                  }}
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-purple-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialRef} className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={testimonialVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              EduTrack is making a difference in educational institutions across the country
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={testimonialVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-8 shadow-lg border border-purple-100"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-purple-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104-6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{testimonial.comment}</p>
                  <div className="mt-6">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Developers Section */}
      <section ref={developerRef} className="py-20 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Developers</h2>
            <p className="text-lg text-purple-200">
              The talented team behind EduTrack's development
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={developerVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {developers.map((dev, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center mb-4">
                    <img src={`/lovable-uploads/${dev.name.toLowerCase()}.jpeg`} alt={dev.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{dev.name}</h3>
                  <p className="text-purple-200 mb-1">{dev.role}</p>
                  <p className="text-purple-300 text-sm mb-3">{dev.university}</p>
                  <p className="text-purple-300 text-sm mb-4">{dev.email}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={dev.github} target="_blank" rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your school management?</h2>
            <p className="text-lg text-purple-200 mb-8">
              Join thousands of educational institutions already using EduTrack to streamline their operations.
            </p>
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-white text-purple-900 hover:bg-purple-100 hover:scale-105 transform transition-all duration-200"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">EduTrack</h3>
              <p className="text-gray-400 text-sm">Smart School Management System</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                © 2025 EduTrack. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
