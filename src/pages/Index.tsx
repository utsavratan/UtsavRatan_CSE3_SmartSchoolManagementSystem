
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight,
  GraduationCap,
  Clock,
  Github,
  Linkedin,
  BookOpen,
  Bell,
  Users,
  Smartphone
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { ref: statsRef, inView: statsVisible } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: featuresRef, inView: featuresVisible } = useInView({ threshold: 0.2, triggerOnce: true });
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
  
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Comprehensive Learning",
      description: "Integrated curriculum management with resources for students and teachers"
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Instant Notifications",
      description: "Real-time alerts for assignments, exams, and important announcements"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Parent-Teacher Connect",
      description: "Direct communication channels between parents and educators"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Academic Tracking",
      description: "Detailed analytics on student performance and improvement areas"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Accessibility",
      description: "Access all features on-the-go with our responsive mobile interface"
    },
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
      {/* Hero Section with Blue Gradient Theme */}
      <div className="relative h-screen overflow-hidden bg-gradient-to-b from-[#FBCFE8] via-[#6A82FB] to-[#1A2980]">
        <div className="absolute inset-0 w-full h-full">
          {/* Animated geometric background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
            <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-[#4A00E0] blur-3xl"></div>
            <div className="absolute top-[50%] right-[10%] w-96 h-96 rounded-full bg-[#6A82FB] blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[30%] w-80 h-80 rounded-full bg-white blur-3xl"></div>
          </div>
          
          {/* Pattern design */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full opacity-30">
              <path 
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="#1A2980"
                opacity=".8"
              ></path>
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="#6A82FB"
                opacity=".5"
              ></path>
            </svg>
          </div>
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
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white to-[#E0E7FF] bg-clip-text text-transparent mb-3 tracking-tight">
                  EduTrack
                </h1>
                <div className="h-1 w-32 md:w-48 bg-gradient-to-r from-white to-[#E0E7FF] mx-auto rounded-full mb-4"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  {heroSlides[currentSlide].heading}
                </h2>
                <p className="mt-4 text-lg text-white/80">
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
                    className="bg-white text-[#4A00E0] hover:bg-white/90 hover:scale-105 transform transition-all duration-200 group"
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

      {/* Features Section - Light Blue and White Theme */}
      <section ref={featuresRef} className="py-16 bg-gradient-to-r from-[#E0F2FE] to-[#F0F9FF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#33C3F0] rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#33C3F0] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0369A1]">Key Features</h2>
            <p className="text-[#0369A1]/80 max-w-2xl mx-auto">
              Discover how EduTrack can transform your educational institution
            </p>
          </div>

          <motion.div 
            initial="hidden"
            animate={featuresVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-[#BAE6FD]"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E0F2FE] text-[#0369A1] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0369A1] mb-3">{feature.title}</h3>
                  <p className="text-[#0369A1]/70">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Light Blue and White Theme */}
      <section ref={statsRef} className="py-16 bg-gradient-to-r from-[#DBEAFE] to-[#EFF6FF] text-[#1E40AF] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#33C3F0] rounded-full blur-3xl -mr-20 -mb-20"></div>
          <div className="absolute left-0 top-0 w-72 h-72 bg-[#33C3F0] rounded-full blur-3xl -ml-20 -mt-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E40AF]">Impact on Educational Management</h2>
            <p className="text-[#1E40AF]/80 max-w-2xl mx-auto">
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
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-[#1E40AF]/80">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Light Blue and White Theme */}
      <section ref={testimonialRef} className="py-20 bg-gradient-to-b from-[#F0F9FF] to-[#E0F2FE]">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate={testimonialVisible ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-4">
              What Our Users Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-[#0369A1]/80 max-w-2xl mx-auto">
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
                className="bg-white rounded-xl p-8 shadow-lg border border-[#BAE6FD]"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="h-8 w-8 text-[#0369A1]" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9,4C4.456,7.456,1,13.12,1,19.36c0,5.088,3.072,8.064,6.624,8.064,3.36,0,5.856-2.688,5.856-5.856,0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104-6.624-9.024L9,4zm16.512,0c-4.8,3.456-8.256,9.12-8.256,15.36 0,5.088,3.072,8.064,6.624,8.064,3.264,0,5.856-2.688,5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864,4z" />
                    </svg>
                  </div>
                  <p className="text-[#0369A1]/70 mb-4 flex-grow">{testimonial.comment}</p>
                  <div className="mt-6">
                    <p className="font-semibold text-[#0369A1]">{testimonial.name}</p>
                    <p className="text-[#0369A1]/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Developers Section - Mixed Dark and Light Theme */}
      <section ref={developerRef} className="py-20 bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#475569] text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(203,213,225,0.15)_0%,rgba(203,213,225,0)_60%)]"></div>
          {/* Added geometric shapes for visual interest with mixed tones */}
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-[#94A3B8]/10"></div>
          <div className="absolute bottom-40 left-20 w-60 h-60 rounded-full bg-[#94A3B8]/10"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Meet Our Developers</h2>
            <p className="text-lg text-white/80">
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
                className="bg-gradient-to-br from-[#334155]/80 to-[#475569] backdrop-blur-md rounded-xl p-8 border border-[#94A3B8]/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#818CF8] flex items-center justify-center mb-4 overflow-hidden">
                    {index === 0 ? (
                      <img src="/lovable-uploads/img1.jpeg" alt={dev.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <img src="/lovable-uploads/ishan.jpeg" alt={dev.name} className="w-full h-full object-cover rounded-full" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{dev.name}</h3>
                  <p className="text-[#BAE6FD] mb-1">{dev.role}</p>
                  <p className="text-white/70 text-sm mb-3">{dev.university}</p>
                  <p className="text-white/70 text-sm mb-4">{dev.email}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={dev.github} target="_blank" rel="noopener noreferrer" 
                      className="p-2 rounded-full bg-[#94A3B8]/20 hover:bg-[#94A3B8]/30 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-[#94A3B8]/20 hover:bg-[#94A3B8]/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Blue Gradient */}
      <section className="py-20 bg-gradient-to-b from-[#FBCFE8] via-[#6A82FB] to-[#1A2980] text-white relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_60%)]"></div>
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse" style={{animationDuration: '3s'}}></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-white/5 animate-pulse" style={{animationDuration: '4s'}}></div>
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
            <p className="text-lg text-white/90 mb-8">
              Join thousands of educational institutions already using EduTrack to streamline their operations.
            </p>
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-white text-[#4A00E0] hover:bg-white/90 hover:scale-105 transform transition-all duration-200"
              >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer - Black color as requested */}
      <footer className="bg-[#000000e6] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">EduTrack</h3>
              <p className="text-gray-300 text-sm">Smart School Management System</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                © 2025 EduTrack. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
