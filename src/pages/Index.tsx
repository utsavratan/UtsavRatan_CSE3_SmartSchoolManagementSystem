
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  BarChart3, 
  Calendar, 
  Bell, 
  CheckCircle, 
  ChevronRight,
  GraduationCap,
  Clock
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { ref: featuresRef, inView: featuresVisible } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: statsRef, inView: statsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: testimonialRef, inView: testimonialVisible } = useInView({ threshold: 0.2, triggerOnce: true });

  const heroSlides = [
    {
      heading: "Smart School Management",
      subheading: "Streamline your educational institution with our all-in-one platform",
      image: "/lovable-uploads/901293c5-37b6-41ef-ac36-4640f900bcbb.png"
    },
    {
      heading: "Track Student Progress",
      subheading: "Monitor academic performance with intuitive dashboards and reports",
      image: "/lovable-uploads/img1.jpeg"
    },
    {
      heading: "Efficient Administration",
      subheading: "Simplify administrative tasks with automated workflows",
      image: "/public/lovable-uploads/utsav.jpeg"
    }
  ];

  const features = [
    { icon: <BookOpen className="h-8 w-8 text-primary" />, title: "Comprehensive Learning Management", description: "Manage assignments, resources, and student progress in one place" },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Multi-Role System", description: "Tailored dashboards for students, parents, teachers, and administrators" },
    { icon: <BarChart3 className="h-8 w-8 text-primary" />, title: "Performance Analytics", description: "Track academic progress with detailed visual reports and insights" },
    { icon: <Calendar className="h-8 w-8 text-primary" />, title: "Smart Scheduling", description: "Manage timetables, exams, and events efficiently" },
    { icon: <Bell className="h-8 w-8 text-primary" />, title: "Real-time Notifications", description: "Keep everyone informed with instant updates and alerts" },
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: "Attendance Tracking", description: "Monitor and manage student attendance with ease" },
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

        <div className="container mx-auto px-4 pt-20 md:pt-32 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center md:text-left md:flex-row md:justify-between gap-8 md:gap-12"
            >
              <div className="md:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].heading}
                  </h1>
                  <p className="mt-6 text-lg text-purple-100">
                    {heroSlides[currentSlide].subheading}
                  </p>
                </motion.div>

                <motion.div 
                  className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start"
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
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 hover:scale-105 transform transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </motion.div>

                <motion.div
                  className="pt-10 flex gap-6 justify-center md:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-purple-300" />
                      <span className="text-white font-semibold">3 Roles</span>
                    </div>
                    <p className="text-xs text-purple-300">Students, Teachers, Parents</p>
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-purple-300" />
                      <span className="text-white font-semibold">24/7</span>
                    </div>
                    <p className="text-xs text-purple-300">Access Anytime</p>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="md:w-1/2 flex justify-center rounded-lg overflow-hidden shadow-2xl relative group hover:-rotate-2 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-lg transform transition-all duration-500 group-hover:backdrop-blur-none"></div>
                <img 
                  src={heroSlides[currentSlide].image} 
                  alt="EduTrack Dashboard" 
                  className="rounded-lg object-cover w-full h-full max-h-[60vh] transition-transform duration-500 group-hover:scale-105"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                  animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-sm md:text-base">
                    Powerful dashboards for every role in your educational ecosystem
                  </p>
                </motion.div>
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

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={featuresVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Education
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              EduTrack delivers comprehensive tools designed to enhance every aspect of educational management
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={featuresVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 transition-all"
              >
                <div className="h-14 w-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EduTrack</h3>
              <p className="text-gray-400 text-sm">Smart School Management System</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Student Management</li>
                <li>Teacher Dashboard</li>
                <li>Parent Portal</li>
                <li>Admin Controls</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Support</li>
                <li>Community</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>2401010046@krmu.edu.in</li>
                <li>2401010022@krmu.edu.in</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 EduTrack. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
