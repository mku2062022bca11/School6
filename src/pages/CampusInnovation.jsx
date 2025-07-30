import React, { useState } from 'react';
import { Monitor, Brain, Zap, Globe, Shield, Car, Utensils, BookOpen, Home, Trophy, Wifi, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CampusInnovation = () => {
  const { theme } = useTheme();
  const [hoveredFacility, setHoveredFacility] = useState(null);

  const smartFeatures = [
    {
      title: '3D Learning Labs',
      icon: Monitor,
      description: 'Immersive virtual reality environments for experiential learning across all subjects',
      color: 'from-blue-500 to-cyan-600',
      features: ['VR Historical Tours', '3D Molecular Modeling', 'Virtual Field Trips', 'Immersive Language Learning']
    },
    {
      title: 'AI-Powered Classrooms',
      icon: Brain,
      description: 'Intelligent learning environments that adapt to individual student needs in real-time',
      color: 'from-purple-500 to-pink-600',
      features: ['Personalized Content', 'Real-time Analytics', 'Adaptive Assessments', 'Smart Scheduling']
    },
    {
      title: 'Innovation Studios',
      icon: Zap,
      description: 'Maker spaces equipped with 3D printers, robotics kits, and cutting-edge technology',
      color: 'from-orange-500 to-red-600',
      features: ['3D Printing Lab', 'Robotics Workshop', 'Electronics Lab', 'Prototype Development']
    },
    {
      title: 'Global Connection Hub',
      icon: Globe,
      description: 'Advanced video conferencing and collaboration spaces for international partnerships',
      color: 'from-green-500 to-teal-600',
      features: ['Live Global Classes', 'Cultural Exchanges', 'Expert Guest Lectures', 'International Projects']
    }
  ];

  const facilities = [
    { name: 'Sports Complex', icon: Trophy, position: { x: 15, y: 20 }, description: 'Olympic-standard facilities' },
    { name: 'Central Library', icon: BookOpen, position: { x: 45, y: 35 }, description: 'Digital & physical resources' },
    { name: 'Residential Halls', icon: Home, position: { x: 75, y: 25 }, description: 'Modern student housing' },
    { name: 'Innovation Labs', icon: Zap, position: { x: 30, y: 60 }, description: '3D printing & robotics' },
    { name: 'Dining Hall', icon: Utensils, position: { x: 60, y: 50 }, description: 'Nutritious meal programs' },
    { name: 'AI Classrooms', icon: Brain, position: { x: 20, y: 75 }, description: 'Smart learning spaces' },
    { name: 'Security Center', icon: Shield, position: { x: 80, y: 70 }, description: '24/7 campus monitoring' },
    { name: 'Transport Hub', icon: Car, position: { x: 10, y: 90 }, description: 'Eco-friendly transportation' }
  ];

  const safetyFeatures = [
    {
      title: 'Smart Security System',
      description: 'AI-powered surveillance with facial recognition and automated threat detection',
      icon: Shield,
      stats: '100% Campus Coverage'
    },
    {
      title: 'Emergency Response',
      description: 'Instant alert system with GPS tracking for immediate emergency response',
      icon: Zap,
      stats: '<30 Second Response'
    },
    {
      title: 'Health Monitoring',
      description: 'Contactless health screening and air quality monitoring throughout campus',
      icon: Monitor,
      stats: 'Real-time Monitoring'
    },
    {
      title: 'Digital Access Control',
      description: 'Secure keyless entry system with personalized access permissions',
      icon: Wifi,
      stats: 'Biometric Security'
    }
  ];

  const transportOptions = [
    {
      title: 'Electric School buses',
      description: 'Zero-emission transportation with GPS tracking and real-time updates for parents',
      routes: '15 Routes',
      capacity: '45 Students Each'
    },
    {
      title: 'Bike Sharing Program',
      description: 'Smart bike rental system for eco-friendly campus transportation',
      routes: 'Campus Wide',
      capacity: '200+ Bikes'
    },
    {
      title: 'Ride Coordination',
      description: 'Safe carpooling system with verified family networks and route optimization',
      routes: 'City Wide',
      capacity: 'Unlimited'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}>
              Smart Campus
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Campus &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Innovation Hub
              </span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Step into the future of education with our state-of-the-art campus designed to inspire, 
              innovate, and empower the next generation of leaders and thinkers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">50,000</div>
              <div className="text-sm opacity-75">Sq Ft Campus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm opacity-75">Smart Classrooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm opacity-75">Renewable Energy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm opacity-75">AI Security</div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Campus Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Smart Campus Features</h2>
            <p className="text-xl text-gray-600">Where technology meets education to create extraordinary learning experiences</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {smartFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-48 bg-gradient-to-r ${feature.color} relative`}>
                  <div className="absolute inset-0 bg-pattern opacity-20"></div>
                  <div className="absolute bottom-6 left-6 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">{feature.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Campus Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interactive Campus Map</h2>
            <p className="text-xl text-gray-600">Explore our facilities with our interactive campus guide</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-96 lg:h-[500px] overflow-hidden">
              {/* Campus Background */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
              
              {/* Facility Markers */}
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: `${facility.position.x}%`, top: `${facility.position.y}%` }}
                  onMouseEnter={() => setHoveredFacility(index)}
                  onMouseLeave={() => setHoveredFacility(null)}
                >
                  <div className={`w-12 h-12 ${theme.primaryBg} rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 ${
                    hoveredFacility === index ? 'ring-4 ring-blue-300' : ''
                  }`}>
                    <facility.icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {hoveredFacility === index && (
                    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-lg shadow-lg border min-w-48">
                      <h4 className="font-semibold text-gray-900 mb-1">{facility.name}</h4>
                      <p className="text-sm text-gray-600">{facility.description}</p>
                    </div>
                  )}
                </div>
              ))}
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Campus Facilities</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <Trophy className="h-3 w-3 text-gray-600" />
                    <span>Sports</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-3 w-3 text-gray-600" />
                    <span>Library</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Home className="h-3 w-3 text-gray-600" />
                    <span>Housing</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3 text-gray-600" />
                    <span>Innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-xl text-gray-600">Every space designed to inspire learning and growth</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./pubilc/Campus/CampusImg1.jpeg"
                alt="Innovation Labs"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Zap className={`h-5 w-5 ${theme.primary}`} />
                  <h3 className="text-lg font-bold text-gray-900">Innovation Labs</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  State-of-the-art maker spaces with 3D printers, laser cutters, and robotics equipment.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>5 Labs Available</span>
                  <span>50+ Projects/Month</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./pubilc/Campus/CampusImg2.jpeg"
                alt="Smart Classrooms"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Brain className={`h-5 w-5 ${theme.primary}`} />
                  <h3 className="text-lg font-bold text-gray-900">AI Classrooms</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Interactive whiteboards, VR headsets, and AI-powered learning analytics.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>25 Smart Rooms</span>
                  <span>99% Uptime</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./pubilc/Campus/CampusImg3.jpeg"
                alt="Collaboration Spaces"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Globe className={`h-5 w-5 ${theme.primary}`} />
                  <h3 className="text-lg font-bold text-gray-900">Global Hub</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Advanced video conferencing for international collaborations and guest lectures.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>24/7 Access</span>
                  <span>Global Connections</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Security */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety & Security</h2>
            <p className="text-xl text-gray-600">Advanced systems ensuring a secure learning environment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <div className={`text-xs font-semibold ${theme.primary} px-3 py-1 ${theme.primaryLight} rounded-full`}>
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Transportation & Accessibility</h2>
            <p className="text-xl text-gray-600">Safe, eco-friendly, and convenient transportation options</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {transportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{option.title}</h3>
                  <Car className={`h-6 w-6 ${theme.primary}`} />
                </div>
                
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${theme.primary}`}>{option.routes}</div>
                    <div className="text-xs text-gray-600">Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${theme.primary}`}>{option.capacity}</div>
                    <div className="text-xs text-gray-600">Capacity</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Additional Transportation Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Live Tracking</h4>
                <p className="text-sm text-gray-600">Parents can track bus location and estimated arrival times in real-time</p>
              </div>
              
              <div className="text-center">
                <div className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Safety Protocol</h4>
                <p className="text-sm text-gray-600">Trained staff, emergency procedures, and safety equipment on all vehicles</p>
              </div>
              
              <div className="text-center">
                <div className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center mb-3 mx-auto`}>
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Eco-Friendly</h4>
                <p className="text-sm text-gray-600">Electric and hybrid vehicles reducing our carbon footprint by 80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Our Campus</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Take a virtual tour of our innovative facilities or schedule an in-person visit to see the future of education firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Take Virtual Tour
            </button>
            <a
              href="/connect"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Schedule Visit
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold">360°</div>
              <div className="text-sm opacity-75">Virtual Views</div>
            </div>
            <div>
              <div className="text-2xl font-bold">HD</div>
              <div className="text-sm opacity-75">Quality Tours</div>
            </div>
            <div>
              <div className="text-2xl font-bold">Live</div>
              <div className="text-sm opacity-75">Campus Demos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-75">Access Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusInnovation;