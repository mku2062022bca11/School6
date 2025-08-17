import React, { useState } from "react";
import {
  Users,
  Leaf,
  Code,
  Music,
  Camera,
  Trophy,
  Heart,
  Globe,
  ChevronLeft,
  ChevronRight,
  Star,
  Play,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Modal from "../components/Modal";

const StudentLife = () => {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const clubs = [
    {
      name: "Tech Innovation Club",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      description: "Coding, robotics, AI projects, and tech entrepreneurship",
      members: 45,
      activities: [
        "Weekly coding challenges",
        "Robotics competitions",
        "Tech startups incubator",
        "Guest speaker series",
      ],
      achievements: [
        "3 National Coding Awards",
        "Patent Filed for AI App",
        "5 Startups Launched",
      ],
    },
    {
      name: "Eco Warriors Club",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      description:
        "Environmental conservation, sustainability projects, and green initiatives",
      members: 38,
      activities: [
        "Campus garden maintenance",
        "Recycling programs",
        "Climate action campaigns",
        "Nature photography walks",
      ],
      achievements: [
        "Carbon Neutral Campus",
        "100% Recycling Rate",
        "Tree Planting Record",
      ],
    },
    {
      name: "Creative Arts Society",
      icon: Camera,
      color: "from-purple-500 to-pink-600",
      description:
        "Photography, filmmaking, digital art, and creative expression",
      members: 52,
      activities: [
        "Monthly photo contests",
        "Film production workshops",
        "Art exhibitions",
        "Digital media projects",
      ],
      achievements: [
        "Film Festival Winners",
        "Gallery Exhibitions",
        "Published Photography",
      ],
    },
    {
      name: "Global Music Ensemble",
      icon: Music,
      color: "from-orange-500 to-red-600",
      description: "Orchestra, band, choir, and music technology exploration",
      members: 67,
      activities: [
        "Weekly rehearsals",
        "Concert performances",
        "Music composition",
        "Recording sessions",
      ],
      achievements: [
        "State Competition Gold",
        "Community Concerts",
        "Original Compositions",
      ],
    },
    {
      name: "Leadership Forum",
      icon: Users,
      color: "from-indigo-500 to-purple-600",
      description:
        "Student government, community service, and leadership development",
      members: 34,
      activities: [
        "Student council meetings",
        "Community service projects",
        "Leadership workshops",
        "Peer mentoring",
      ],
      achievements: [
        "$50K Fundraised",
        "500+ Service Hours",
        "Leadership Awards",
      ],
    },
    {
      name: "Global Ambassadors",
      icon: Globe,
      color: "from-teal-500 to-blue-600",
      description:
        "Cultural exchange, international relations, and global awareness",
      members: 29,
      activities: [
        "Cultural festivals",
        "International partnerships",
        "Language exchange",
        "Global issues forums",
      ],
      achievements: [
        "Sister School Partnerships",
        "Cultural Awards",
        "UN Youth Delegate",
      ],
    },
  ];

  const dayInLife = [
    {
      time: "7:30 AM",
      title: "Morning Assembly",
      description:
        "Start the day with inspiration, announcements, and community building",
      image: "./StudentLife/StudentImg1.jpeg",
    },
    {
      time: "8:00 AM",
      title: "Core Learning",
      description:
        "Engaging academics with interactive technology and collaborative projects",
      image: "./StudentLife/StudentImg2.webp",
    },
    {
      time: "10:30 AM",
      title: "Innovation Lab",
      description:
        "Hands-on STEM projects, robotics, and creative problem-solving",
      image: "./StudentLife/StudentImg3.jpeg",
    },
    {
      time: "12:00 PM",
      title: "Lunch & Social Time",
      description:
        "Nutritious meals and valuable social interactions with peers",
      image: "./StudentLife/StudentImg4.jpeg",
    },
    {
      time: "1:30 PM",
      title: "Creative Arts",
      description:
        "Music, visual arts, drama, and creative expression sessions",
      image: "./StudentLife/StudentImg5.jpeg",
    },
    {
      time: "3:00 PM",
      title: "Club Activities",
      description:
        "Pursuing passions and developing leadership through clubs and societies",
      image: "./StudentLife/StudentImg6.webp",
    },
  ];

  const galleryImages = [
    {
      url: "./StudentLife/StudentImg7.jpeg",
      caption: "Students collaborating on innovative projects",
    },
    {
      url: "./StudentLife/StudentImg8.jpeg",
      caption: "Technology-enhanced learning environment",
    },
    {
      url: "./StudentLife/StudentImg9.jpeg",
      caption: "Interactive classroom engagement",
    },
    {
      url: "./StudentLife/StudentImg10.jpeg",
      caption: "Peer learning and collaboration",
    },
    {
      url: "./StudentLife/StudentImg11.jpeg",
      caption: "Creative arts and expression",
    },
    {
      url: "./StudentLife/StudentImg12.jpeg",
      caption: "Leadership development activities",
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "National Science Fair",
      description: "1st Place - AI Innovation Project",
      year: "2024",
    },
    {
      icon: Star,
      title: "International Robotics",
      description: "World Championship Finalists",
      year: "2024",
    },
    {
      icon: Globe,
      title: "Model UN Conference",
      description: "Outstanding Delegation Award",
      year: "2024",
    },
    {
      icon: Music,
      title: "State Music Competition",
      description: "Gold Medal Orchestra Performance",
      year: "2024",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "10,000+ Hours Volunteered",
      year: "2024",
    },
    {
      icon: Code,
      title: "Coding Olympics",
      description: "Regional Champions",
      year: "2024",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dayInLife.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dayInLife.length) % dayInLife.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}
            >
              Vibrant Community
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Life at
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                QB365 Public School Academy
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Beyond academics, we foster a thriving community where students
              discover their passions, build lasting friendships, and develop
              the confidence to make their mark on the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                50+
              </div>
              <div className="opacity-90">Active Clubs & Societies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="opacity-90">Annual Events & Activities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
              <div className="opacity-90">Student Participation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Clubs & Societies
            </h2>
            <p className="text-xl text-gray-600">
              Discover your passion and connect with like-minded peers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-32 bg-gradient-to-r ${club.color} relative`}>
                  <div className="absolute inset-0 bg-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-6 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <club.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {club.name}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {club.members} members
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{club.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Activities
                    </h4>
                    <ul className="space-y-1">
                      {club.activities.map((activity, actIndex) => (
                        <li
                          key={actIndex}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Recent Achievements
                    </h4>
                    <ul className="space-y-1">
                      {club.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-sm text-green-600 flex items-center"
                        >
                          <Trophy className="w-3 h-3 mr-2" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day in the Life Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Day in the Life
            </h2>
            <p className="text-xl text-gray-600">
              Experience the rhythm of learning and growth at QB365 Public
              School Academy
            </p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {dayInLife.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-96">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <div
                          className={`px-4 py-2 ${theme.primaryBg} text-white rounded-full text-sm font-semibold`}
                        >
                          {item.time}
                        </div>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex items-center">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {item.description}
                        </p>

                        <div className="flex items-center space-x-4">
                          <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                              <div
                                key={i}
                                className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"
                              ></div>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">
                            Join 200+ students
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {dayInLife.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? theme.primaryBg : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Capturing moments of growth, creativity, and achievement
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-6 w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Image Viewing */}
      <Modal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        title="Student Life Gallery"
      >
        {selectedImage && (
          <div className="text-center">
            <img
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full max-h-96 object-contain rounded-lg mb-4"
            />
            <p className="text-gray-600">{selectedImage.caption}</p>
          </div>
        )}
      </Modal>

      {/* Achievements Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Student Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating excellence in all its forms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-yellow-400"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900">
                        {achievement.title}
                      </h3>
                      <span
                        className={`text-xs px-2 py-1 ${theme.primaryLight} ${theme.primary} rounded-full font-semibold`}
                      >
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our amazing student community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="./StudentLife/StudentImg13.jpeg"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">
                    Grade 11, Tech Club President
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "QB365 Public School Academy has given me the confidence to
                pursue my passion for AI development. The mentorship and
                resources here are incredible!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="./StudentLife/StudentImg14.jpeg"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Marcus Johnson
                  </h4>
                  <p className="text-sm text-gray-600">
                    Grade 10, Eco Warriors Leader
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The environmental projects we work on here actually make a
                difference in our community. I've learned that we can be the
                change we want to see."
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="./StudentLife/StudentImg15.jpeg"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Aisha Patel</h4>
                  <p className="text-sm text-gray-600">
                    Grade 12, Arts Society VP
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The creative freedom and support I've received here has helped
                me discover my artistic voice. I'm now headed to art school with
                a full scholarship!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Become Part of Our Story
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join a community where your interests are celebrated, your potential
            is nurtured, and your dreams become achievable goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enrollment"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Apply Today
            </a>
            <a
              href="/campus-innovation"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
