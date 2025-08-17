import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Heart,
  Lightbulb,
  Globe,
  Users,
  Award,
  Rocket,
  ChevronRight,
  Play,
  Star,
  BookOpen,
  Zap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import AnimatedCounter from "../components/AnimatedCounter";

const Home = () => {
  const { theme } = useTheme();
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "AI-powered learning adapts to every student's unique potential",
    "Tomorrow's leaders are shaped by today's innovative education",
    "Where curiosity meets cutting-edge technology",
    "Empowering minds to solve the challenges of tomorrow",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const promises = [
    {
      icon: Brain,
      title: "Skill-based Learning",
      description:
        "Personalized pathways that adapt to each student's learning style and pace",
    },
    {
      icon: Globe,
      title: "Digital Readiness",
      description:
        "Preparing students for a technology-driven future with hands-on digital experiences",
    },
    {
      icon: Heart,
      title: "Empathy",
      description:
        "Building emotional intelligence and social responsibility in every interaction",
    },
    {
      icon: Lightbulb,
      title: "Curiosity",
      description:
        "Fostering lifelong learning through inquiry-based education and exploration",
    },
  ];

  const features = [
    {
      title: "Learning Experience",
      description: "Discover our innovative curriculum designed for the future",
      link: "/learning-experience",
      icon: BookOpen,
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Student Life",
      description: "Explore the vibrant community and endless opportunities",
      link: "/student-life",
      icon: Users,
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Enrollment",
      description: "Start your journey with us today",
      link: "/enrollment",
      icon: Rocket,
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span
                    className={`block ${theme.primary} bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
                  >
                    FutureLearn Academy
                  </span>
                </h1>
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <p className="text-xl text-gray-600 italic transition-all duration-1000">
                    "{quotes[currentQuote]}"
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/enrollment"
                  className={`px-8 py-4 ${theme.primaryBg} text-white rounded-full font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  Get Started
                </Link>
                <Link
                  to="/connect"
                  className={`px-8 py-4 border-2 ${theme.primaryBorder} ${theme.primary} rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200`}
                >
                  Talk to Admissions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
<<<<<<< HEAD
                  src="./Home/HomeImg1.webp"
                  preload="auto"
=======
                  src="./public/Home/HomeImg1.webp"
>>>>>>> bc79b666753c832f954eac6c87102c0f78a034bd
                  alt="Student Spotlight"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Student Spotlight</p>
                  <p className="text-sm opacity-90">Innovation in Action</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Star className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Promise to Every Student
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to nurturing well-rounded individuals who are
              prepared to thrive in an ever-evolving world
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <promise.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {promise.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {promise.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Discover Your Path
            </h2>
            <p className="text-xl text-gray-600">
              Explore the opportunities that await you at FutureLearn Academy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${feature.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="absolute bottom-4 left-6">
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    Learn More
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Counter */}
      <section
        className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl opacity-90">
              Building the future, one student at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-xl opacity-90">Expert Teachers</p>
              <p className="text-sm opacity-75 mt-2">
                Dedicated educators with advanced degrees
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={2500} suffix="+" />
              </div>
              <p className="text-xl opacity-90">Active Students</p>
              <p className="text-sm opacity-75 mt-2">
                Learners from diverse backgrounds
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-xl opacity-90">Innovations</p>
              <p className="text-sm opacity-75 mt-2">
                Cutting-edge learning technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 ${theme.primaryLight} ${theme.primary} rounded-full text-sm font-semibold mb-4`}
            >
              Innovation Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Where Technology Meets Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience learning like never before with our state-of-the-art
              facilities and innovative teaching methods
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AI-Powered Learning
                  </h3>
                  <p className="text-gray-600">
                    Personalized learning experiences that adapt to each
                    student's unique needs and learning style.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Smart Classrooms
                  </h3>
                  <p className="text-gray-600">
                    Interactive whiteboards, VR headsets, and collaborative
                    digital workspaces enhance every lesson.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Project-Based Learning
                  </h3>
                  <p className="text-gray-600">
                    Real-world projects that challenge students to think
                    critically and solve complex problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="./Home/HomeImg2.jpeg"
                  alt="Innovation Lab"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="./Home/HomeImg3.jpeg"
                  alt="Smart Classroom"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Play className="h-8 w-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border-4 border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Shape Your Future?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already experiencing the future
              of education. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/enrollment"
                className={`px-8 py-4 ${theme.primaryBg} text-white rounded-full font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
              >
                Apply Now
              </Link>
              <Link
                to="/campus-innovation"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
              >
                Take a Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
