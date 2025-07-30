import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { theme, changeTheme, currentTheme } = useTheme();

  const themeColors = [
    { name: "blue", color: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { name: "green", color: "bg-green-600", hoverColor: "hover:bg-green-700" },
    {
      name: "purple",
      color: "bg-purple-600",
      hoverColor: "hover:bg-purple-700",
    },
    { name: "red", color: "bg-red-600", hoverColor: "hover:bg-red-700" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className={`p-2 rounded-lg ${theme.primaryBg}`}>
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  QB365 Public School Academy
                </h3>
                <p className="text-sm text-gray-400">
                  Shaping Tomorrow's Leaders
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with cutting-edge education, innovative
              thinking, and the skills needed for the future.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className={`p-2 rounded-full ${theme.primaryBg} ${theme.primaryHover} transition-colors`}
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${theme.primaryBg} ${theme.primaryHover} transition-colors`}
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${theme.primaryBg} ${theme.primaryHover} transition-colors`}
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className={`p-2 rounded-full ${theme.primaryBg} ${theme.primaryHover} transition-colors`}
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/who-we-are"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/learning-experience"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/student-life"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Student Life
                </Link>
              </li>
              <li>
                <Link
                  to="/enrollment"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/campus-innovation"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Campus
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  STEM Education
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Creative Arts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital Literacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Global Languages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">
                  123 Innovation Drive, Future City, FC 12345
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">
                  info@QB365 Public Schoolacademy.edu
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Theme Switcher */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-400">Choose your theme:</p>
              <div className="flex space-x-2 mt-2">
                {themeColors.map((themeColor) => (
                  <button
                    key={themeColor.name}
                    onClick={() => changeTheme(themeColor.name)}
                    className={`w-8 h-8 rounded-full ${themeColor.color} ${
                      themeColor.hoverColor
                    } transition-all duration-300 transform hover:scale-110 ${
                      currentTheme === themeColor.name
                        ? "ring-2 ring-white ring-offset-2 ring-offset-gray-900"
                        : ""
                    }`}
                    title={`Switch to ${themeColor.name} theme`}
                  />
                ))}
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-gray-400">
                © 2025 QB365 Public School Academy. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Designed with ❤️ for the future of education
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
