import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    visitDate: "",
    visitTime: "",
  });

  const [showNewsletter, setShowNewsletter] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive\nFuture City, FC 12345\nUnited States",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      content:
        "Main Office: +1 (555) 123-4567\nAdmissions: +1 (555) 123-4568\nEmergency: +1 (555) 123-4569",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      content:
        "info@QB365 Public Schoolacademy.edu\nadmissions@QB365 Public Schoolacademy.edu\nsupport@QB365 Public Schoolacademy.edu",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content:
        "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed",
      color: "from-orange-500 to-red-600",
    },
  ];

  const departments = [
    {
      name: "Admissions",
      email: "admissions@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4568",
    },
    {
      name: "Academic Affairs",
      email: "academics@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4570",
    },
    {
      name: "Student Services",
      email: "studentservices@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4571",
    },
    {
      name: "Finance Office",
      email: "finance@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4572",
    },
    {
      name: "IT Support",
      email: "support@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4573",
    },
    {
      name: "Campus Tours",
      email: "tours@QB365 Public Schoolacademy.edu",
      phone: "+1 (555) 123-4574",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}
            >
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connect
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                With Us
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Ready to join the QB365 Public School Academy family? We're here
              to answer your questions, schedule campus visits, and help you
              take the next step in your educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 mx-auto`}
                >
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="text-sm opacity-75 whitespace-pre-line">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about admissions, academics, or campus life?
                  We'd love to hear from you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="academics">Academic Programs</option>
                        <option value="campus-tour">Campus Tour Request</option>
                        <option value="financial-aid">Financial Aid</option>
                        <option value="student-life">Student Life</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 ${theme.primaryBg} text-white rounded-lg font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Google Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Interactive Google Map</p>
                    <p className="text-sm text-gray-500">
                      123 Innovation Drive, Future City
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Visit Our Campus
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Located in the heart of Future City, our campus is easily
                    accessible by public transportation and offers ample
                    parking.
                  </p>
                  <button
                    className={`${theme.primary} hover:underline text-sm font-semibold`}
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Quick Campus Tour Booking */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Schedule a Campus Tour
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience our innovative facilities firsthand with a
                  personalized campus tour.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      value={formData.visitDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">
                      Preferred Time
                    </label>
                    <select
                      name="visitTime"
                      value={formData.visitTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      <option value="9am">9:00 AM</option>
                      <option value="11am">11:00 AM</option>
                      <option value="1pm">1:00 PM</option>
                      <option value="3pm">3:00 PM</option>
                    </select>
                  </div>
                </div>

                <button
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 ${theme.primaryBg} text-white rounded-lg font-semibold ${theme.primaryHover} transition-colors`}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Tour</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Connect directly with the right department for faster assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {dept.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <a
                      href={`mailto:${dept.email}`}
                      className={`text-sm ${theme.primary} hover:underline`}
                    >
                      {dept.email}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <a
                      href={`tel:${dept.phone}`}
                      className={`text-sm ${theme.primary} hover:underline`}
                    >
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Follow Our Journey
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Stay connected with daily updates, student achievements, and
                behind-the-scenes content from QB365 Public School Academy.
              </p>

              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <a
                  href="#"
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center text-white ${theme.primaryHover} transform hover:scale-110 transition-all duration-200`}
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center text-white ${theme.primaryHover} transform hover:scale-110 transition-all duration-200`}
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center text-white ${theme.primaryHover} transform hover:scale-110 transition-all duration-200`}
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center text-white ${theme.primaryHover} transform hover:scale-110 transition-all duration-200`}
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Social Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Posts This Month</div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Informed
              </h3>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest updates on
                admissions, events, and educational insights.
              </p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    I'm interested in:
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Admissions Updates</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Academic Programs</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Student Achievements</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Events & Activities</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full px-6 py-3 ${theme.primaryBg} text-white rounded-lg font-semibold ${theme.primaryHover} transition-colors`}
                >
                  Subscribe to Newsletter
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What are your admission requirements?
              </h3>
              <p className="text-gray-600">
                We welcome students from diverse backgrounds. Requirements vary
                by grade level, but generally include academic transcripts,
                recommendations, and a personal interview. Visit our Enrollment
                page for detailed information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you offer financial aid?
              </h3>
              <p className="text-gray-600">
                Yes! We offer need-based scholarships covering up to 75% of
                tuition, plus various merit-based awards. Our financial aid team
                works with families to make quality education accessible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What makes QB365 Public School Academy different?
              </h3>
              <p className="text-gray-600">
                Our unique approach combines personalized AI-powered learning,
                hands-on innovation labs, global partnerships, and a focus on
                developing both academic excellence and character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're ready to apply or just want to learn more, we're here
            to help you take the next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enrollment"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Start Application
            </a>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
              Call Admissions: (555) 123-4568
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
