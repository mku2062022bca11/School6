import React, { useState } from "react";
import {
  Calendar,
  Play,
  ExternalLink,
  Award,
  Newspaper,
  Users,
  Clock,
  ChevronLeft,
  ChevronRight,
  Star,
  Video,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Modal from "../components/Modal";

const BuzzHighlights = () => {
  const { theme } = useTheme();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const events = [
    {
      date: 5,
      title: "Science Fair 2025",
      type: "Competition",
      time: "9:00 AM",
    },
    {
      date: 12,
      title: "Parent-Teacher Conference",
      type: "Meeting",
      time: "2:00 PM",
    },
    {
      date: 18,
      title: "Innovation Showcase",
      type: "Presentation",
      time: "10:00 AM",
    },
    {
      date: 25,
      title: "Cultural Festival",
      type: "Celebration",
      time: "6:00 PM",
    },
    {
      date: 30,
      title: "Robotics Championship",
      type: "Competition",
      time: "1:00 PM",
    },
  ];

  const pressHighlights = [
    {
      outlet: "Education Weekly",
      headline:
        "QB365 Public School Academy Leads Innovation in AI-Powered Learning",
      date: "January 15, 2025",
      excerpt:
        "The academy's groundbreaking approach to personalized education is setting new standards...",
      image: "./pubilc/Highlights/HighlightImg1.jpeg",
      category: "Innovation",
    },
    {
      outlet: "Tech Education Today",
      headline:
        "Student-Led Startups Emerge from QB365 Public School's Innovation Program",
      date: "January 10, 2025",
      excerpt:
        "Five student startups have raised over $100K in seed funding through the academy's entrepreneurship program...",
      image: "./pubilc/Highlights/HighlightImg2.jpeg",
      category: "Entrepreneurship",
    },
    {
      outlet: "Green Schools Magazine",
      headline: "Carbon Neutral Campus Achievement Recognized Internationally",
      date: "January 8, 2025",
      excerpt:
        "QB365 Public School Academy becomes the first educational institution in the region to achieve carbon neutrality...",
      image: "./pubilc/Highlights/HighlightImg3.jpeg",
      category: "Sustainability",
    },
  ];

  const blogPosts = [
    {
      title: "The Future of STEM Education: Insights from Our Innovation Labs",
      author: "Dr. Sarah Chen",
      date: "January 20, 2025",
      readTime: "5 min read",
      excerpt:
        "Exploring how hands-on experimentation and AI-powered tools are transforming how students engage with science and technology...",
      image: "./pubilc/Highlights/HighlightImg4.jpeg",
      category: "Education",
    },
    {
      title: "Student Spotlight: Building Tomorrow's Sustainable Cities",
      author: "Maria Rodriguez",
      date: "January 18, 2025",
      readTime: "4 min read",
      excerpt:
        "Meet our Grade 11 students who are designing smart city solutions to address climate change and urban planning challenges...",
      image: "./pubilc/Highlights/HighlightImg5.jpeg",
      category: "Student Projects",
    },
    {
      title: "Global Classroom: Connecting with Schools Worldwide",
      author: "James Wilson",
      date: "January 15, 2025",
      readTime: "6 min read",
      excerpt:
        "How our international partnership program is giving students a truly global perspective on learning and collaboration...",
      image: "./pubilc/Highlights/HighlightImg6.jpeg",
      category: "Global Education",
    },
  ];

  const videoGallery = [
    {
      title: "Student Innovation Showcase 2024",
      duration: "12:45",
      thumbnail:
        "./pubilc/Highlights/HighlightImg7.jpeg",
      description:
        "Watch our students present their groundbreaking projects at the annual innovation showcase.",
      views: "2.5K",
    },
    {
      title: "AI in the Classroom: A Day at QB365 Public School",
      duration: "8:30",
      thumbnail:
        " ./pubilc/Highlights/HighlightImg8.jpeg",
      description:
        "Experience how artificial intelligence is transforming education in our smart classrooms.",
      views: "4.2K",
    },
    {
      title: "Robotics Team World Championship Journey",
      duration: "15:20",
      thumbnail:
        "./pubilc/Highlights/HighlightImg9.jpeg",
      description:
        "Follow our robotics team as they compete on the world stage and bring home the gold.",
      views: "3.8K",
    },
    {
      title: "Sustainable Campus Initiative",
      duration: "6:15",
      thumbnail:
        "./pubilc/Highlights/HighlightImg10.jpeg",
      description:
        "Learn about our journey to becoming the first carbon-neutral school in the region.",
      views: "1.9K",
    },
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = new Date().getFullYear();
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const hasEvent = events.some((event) => event.date === day);
      const dayEvents = events.filter((event) => event.date === day);

      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center text-sm relative cursor-pointer hover:bg-gray-100 rounded-lg transition-colors ${
            hasEvent
              ? `${theme.primaryBg} text-white hover:opacity-90`
              : "text-gray-700"
          }`}
        >
          {day}
          {hasEvent && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}
            >
              Latest Updates
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Buzz &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Highlights
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Stay connected with the latest news, events, achievements, and
              stories from our vibrant QB365 Public School Academy community.
              Never miss a moment of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-8 w-8 mx-auto mb-2 text-yellow-400" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm opacity-75">Awards This Year</div>
            </div>
            <div className="text-center">
              <Newspaper className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm opacity-75">Media Features</div>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-green-400" />
              <div className="text-2xl font-bold">100+</div>
              <div className="text-sm opacity-75">Community Events</div>
            </div>
            <div className="text-center">
              <Video className="h-8 w-8 mx-auto mb-2 text-purple-400" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-75">Video Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Stay up-to-date with our exciting calendar of activities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {monthNames[currentMonth]} 2025
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setCurrentMonth((prev) => (prev - 1 + 12) % 12)
                      }
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentMonth((prev) => (prev + 1) % 12)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div
                        key={day}
                        className="h-12 flex items-center justify-center text-sm font-semibold text-gray-600"
                      >
                        {day}
                      </div>
                    )
                  )}
                  {renderCalendar()}
                </div>
              </div>
            </div>

            {/* Event List */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                This Month's Events
              </h3>
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center text-white font-bold`}
                    >
                      {event.date}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {event.title}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {event.time}
                        </div>
                        <span
                          className={`px-2 py-1 ${theme.primaryLight} ${theme.primary} rounded-full text-xs font-semibold`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In the Media
            </h2>
            <p className="text-xl text-gray-600">
              Our impact recognized by leading education publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pressHighlights.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={article.image}
                  alt={article.headline}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-600">
                      {article.outlet}
                    </span>
                    <span
                      className={`px-2 py-1 ${theme.primaryLight} ${theme.primary} rounded-full text-xs font-semibold`}
                    >
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                    {article.headline}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {article.date}
                    </span>
                    <button
                      className={`flex items-center space-x-1 ${theme.primary} hover:underline`}
                    >
                      <span className="text-sm">Read More</span>
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600">
              Insights, stories, and updates from our educational community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-2 py-1 ${theme.primaryLight} ${theme.primary} rounded-full text-xs font-semibold`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        By {post.author} • {post.date}
                      </div>
                      <button
                        className={`${theme.primary} hover:underline text-sm font-semibold`}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div
            className={`bg-gradient-to-r ${theme.gradient} text-white rounded-3xl p-8 lg:p-12 text-center`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay in the Loop
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for weekly updates on student
              achievements, upcoming events, and educational insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>

            <p className="text-sm opacity-75 mt-4">
              Join 5,000+ parents and educators already subscribed
            </p>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Experience the energy and excitement of QB365 Public School
              Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoGallery.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-gray-900 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                        {video.duration}
                      </span>
                      <span className="text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
                        {video.views} views
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Modal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        title={selectedVideo?.title}
      >
        {selectedVideo && (
          <div>
            <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="h-16 w-16 mx-auto mb-4" />
                <p>Video Player Placeholder</p>
                <p className="text-sm opacity-75">
                  {selectedVideo.duration} • {selectedVideo.views} views
                </p>
              </div>
            </div>
            <p className="text-gray-600">{selectedVideo.description}</p>
          </div>
        )}
      </Modal>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the stories that make headlines. Connect with us and
            become part of the QB365 Public School Academy legacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enrollment"
              className={`px-8 py-4 ${theme.primaryBg} text-white rounded-full font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
            >
              Apply Now
            </a>
            <a
              href="/connect"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuzzHighlights;
