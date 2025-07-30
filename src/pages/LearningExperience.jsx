import React, { useState } from "react";
import {
  BookOpen,
  Microscope,
  Palette,
  Users,
  Globe,
  Computer,
  Music,
  Trophy,
  Download,
  ChevronRight,
  Play,
  Star,
  Brain,
  Zap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const LearningExperience = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("stem");

  const departments = {
    stem: {
      title: "STEM Excellence",
      icon: Microscope,
      color: "from-blue-500 to-cyan-600",
      description:
        "Science, Technology, Engineering, and Mathematics programs that prepare students for the future",
      courses: [
        "Advanced Physics & Quantum Mechanics",
        "Artificial Intelligence & Machine Learning",
        "Biotechnology & Genetic Engineering",
        "Robotics & Automation",
        "Environmental Science & Sustainability",
        "Data Science & Analytics",
      ],
      features: [
        "State-of-the-art laboratories",
        "Industry mentorship programs",
        "Research project opportunities",
        "International science competitions",
      ],
    },
    arts: {
      title: "Creative Arts",
      icon: Palette,
      color: "from-pink-500 to-purple-600",
      description:
        "Nurturing creativity and artistic expression through diverse mediums and techniques",
      courses: [
        "Digital Art & Design",
        "Music Production & Composition",
        "Theater & Performing Arts",
        "Creative Writing & Literature",
        "Photography & Cinematography",
        "Fine Arts & Sculpture",
      ],
      features: [
        "Professional recording studios",
        "Art galleries and exhibition spaces",
        "Master classes with industry professionals",
        "Annual arts festival and showcases",
      ],
    },
    languages: {
      title: "Global Languages",
      icon: Globe,
      color: "from-green-500 to-teal-600",
      description:
        "Building bridges across cultures through comprehensive language education",
      courses: [
        "Mandarin Chinese",
        "Spanish & Latin American Culture",
        "French & European Studies",
        "Arabic & Middle Eastern Studies",
        "Japanese & East Asian Culture",
        "English Literature & Communication",
      ],
      features: [
        "Native speaker instructors",
        "Cultural immersion programs",
        "International exchange opportunities",
        "Language certification preparation",
      ],
    },
    leadership: {
      title: "Leadership & Innovation",
      icon: Users,
      color: "from-orange-500 to-red-600",
      description:
        "Developing tomorrow's leaders through practical experience and mentorship",
      courses: [
        "Entrepreneurship & Business",
        "Public Speaking & Debate",
        "Social Innovation & Impact",
        "Digital Marketing & Communications",
        "Project Management",
        "Global Citizenship & Ethics",
      ],
      features: [
        "Student-led enterprises",
        "Leadership retreats and workshops",
        "Mentorship with industry leaders",
        "Model UN and debate tournaments",
      ],
    },
  };

  const tools = [
    {
      name: "Smart Interactive Boards",
      description: "AI-powered displays that adapt to learning styles",
      icon: Computer,
      image:
        "./pubilc/LearningExperience/LearningImg5.jpeg",
    },
    {
      name: "AI Learning Labs",
      description: "Personalized learning paths powered by machine learning",
      icon: Brain,
      image:
        "./pubilc/LearningExperience/LearningImg6.jpeg",
    },
    {
      name: "Gamified Learning Platform",
      description: "Making education engaging through game mechanics",
      icon: Trophy,
      image:
        "./pubilc/LearningExperience/LearningImg7.jpeg",
    },
    {
      name: "Virtual Reality Experiences",
      description: "Immersive learning through VR technology",
      icon: Zap,
      image:
        "./pubilc/LearningExperience/LearningImg8.jpeg",
    },
  ];

  const achievements = [
    {
      title: "International Science Fair Winners",
      count: "15+",
      description: "Students recognized globally",
    },
    {
      title: "University Acceptance Rate",
      count: "98%",
      description: "Top-tier institutions",
    },
    {
      title: "Innovation Patents Filed",
      count: "12",
      description: "Student-led research",
    },
    {
      title: "Language Certifications",
      count: "500+",
      description: "Annual certifications earned",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}
            >
              Academic Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transformative Learning
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Experiences
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover a curriculum designed for the future, where traditional
              subjects meet cutting-edge technology and real-world application.
              Every lesson is an adventure in learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {achievement.count}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {achievement.title}
                </div>
                <div className="text-sm opacity-75">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Departments
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive programs designed to nurture every aspect of student
              growth
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {Object.entries(departments).map(([key, dept]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `${theme.primaryBg} text-white shadow-lg transform scale-105`
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
                }`}
              >
                <dept.icon className="h-5 w-5" />
                <span>{dept.title}</span>
              </button>
            ))}
          </div>

          {/* Active Department Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div
              className={`h-64 bg-gradient-to-r ${departments[activeTab].color} relative`}
            >
              <div className="absolute inset-0 bg-pattern opacity-20"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  {React.createElement(departments[activeTab].icon, {
                    className: "h-12 w-12",
                  })}
                  <h3 className="text-3xl font-bold">
                    {departments[activeTab].title}
                  </h3>
                </div>
                <p className="text-lg opacity-90 max-w-2xl">
                  {departments[activeTab].description}
                </p>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Core Courses
                  </h4>
                  <div className="space-y-3">
                    {departments[activeTab].courses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className={`w-8 h-8 ${theme.primaryBg} rounded-lg flex items-center justify-center`}
                        >
                          <BookOpen className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-800">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">
                    Special Features
                  </h4>
                  <div className="space-y-4">
                    {departments[activeTab].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-6 h-6 ${theme.primaryBg} rounded-full flex items-center justify-center mt-1`}
                        >
                          <Star className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button
                      className={`flex items-center space-x-2 px-6 py-3 ${theme.primaryBg} text-white rounded-lg font-semibold ${theme.primaryHover} transition-colors`}
                    >
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Tools */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cutting-Edge Teaching Tools
            </h2>
            <p className="text-xl text-gray-600">
              Technology that enhances learning and engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center`}
                    >
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Our Learning Methodology
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We believe in active, engaged learning that connects classroom
                  knowledge to real-world applications.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Personalized Learning Paths
                    </h3>
                    <p className="text-gray-600">
                      AI-driven assessments create customized learning
                      experiences for each student's unique needs and pace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Collaborative Projects
                    </h3>
                    <p className="text-gray-600">
                      Students work together on real-world challenges,
                      developing teamwork and communication skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center flex-shrink-0`}
                  >
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Achievement Recognition
                    </h3>
                    <p className="text-gray-600">
                      Celebrating progress and milestones to maintain motivation
                      and build confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="./pubilc/LearningExperience/LearningImg1.jpeg"
                  alt="Collaborative Learning"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="./pubilc/LearningExperience/LearningImg2.jpeg"
                  alt="Technology Integration"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="./pubilc/LearningExperience/LearningImg3.jpeg"
                  alt="Interactive Learning"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="./pubilc/LearningExperience/LearningImg4.jpeg"
                  alt="Innovation Lab"
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Progress */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Assessment & Progress Tracking
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive evaluation that goes beyond traditional testing
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Continuous Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Real-time feedback through interactive quizzes, project
                milestones, and peer evaluations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Weekly progress reports</li>
                <li>• Skill-based competency tracking</li>
                <li>• Personalized improvement plans</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Portfolio Development
              </h3>
              <p className="text-gray-600 mb-4">
                Students build comprehensive portfolios showcasing their growth
                and achievements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Digital portfolio platform</li>
                <li>• Project documentation</li>
                <li>• Reflection and self-assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div
                className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6`}
              >
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Parent Partnership
              </h3>
              <p className="text-gray-600 mb-4">
                Transparent communication keeping families engaged in the
                learning journey.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Monthly parent conferences</li>
                <li>• Real-time progress access</li>
                <li>• Home learning support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Curriculum */}
      <section
        className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get the Complete Curriculum Guide
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Download our comprehensive curriculum guide to explore detailed
            course descriptions, learning outcomes, and progression pathways.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <Download className="h-5 w-5" />
              <span>Download Full Curriculum (PDF)</span>
            </button>

            <div className="text-sm opacity-75">
              <p>2.5MB • Updated January 2025</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm opacity-75">Course Offerings</div>
            </div>
            <div>
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-75">Specialized Programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm opacity-75">University Preparation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningExperience;
