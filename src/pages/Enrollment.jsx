import React, { useState } from 'react';
import { CheckCircle, FileText, CreditCard, Calendar, Users, GraduationCap, ChevronDown, ChevronUp, Send, User, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Enrollment = () => {
  const { theme } = useTheme();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    phone: '',
    grade: '',
    previousSchool: '',
    address: '',
    guardianName: '',
    guardianPhone: '',
    interests: '',
    message: ''
  });

  const steps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Complete and submit your online application with required documents',
      icon: FileText,
      details: ['Online application form', 'Academic transcripts', 'Recommendation letters', 'Personal statement']
    },
    {
      step: 2,
      title: 'Assessment & Interview',
      description: 'Participate in our comprehensive assessment and family interview',
      icon: Users,
      details: ['Academic assessment', 'Creative portfolio review', 'Student interview', 'Parent meeting']
    },
    {
      step: 3,
      title: 'Admission Decision',
      description: 'Receive your admission decision and welcome package',
      icon: GraduationCap,
      details: ['Admission notification', 'Welcome package', 'Course selection guidance', 'Orientation scheduling']
    },
    {
      step: 4,
      title: 'Enrollment Completion',
      description: 'Complete enrollment with fee payment and final documentation',
      icon: CheckCircle,
      details: ['Fee payment', 'Medical records', 'Transportation arrangements', 'Supply list distribution']
    }
  ];

  const eligibilityCriteria = [
    {
      title: 'Age Requirements',
      content: 'Students must meet specific age requirements for each grade level. Kindergarten: 5 years by September 1st, Grade 1: 6 years by September 1st, and so on. We also accept students who demonstrate academic readiness regardless of age through our assessment process.'
    },
    {
      title: 'Academic Prerequisites',
      content: 'Students should have completed the previous grade level successfully or demonstrate equivalent knowledge through our placement assessment. We welcome students from all educational backgrounds and provide support for transitions between different curricula.'
    },
    {
      title: 'Language Proficiency',
      content: 'While English is our primary language of instruction, we welcome students from diverse linguistic backgrounds. We offer English Language Learning (ELL) support for students who need additional language development.'
    },
    {
      title: 'Special Needs Support',
      content: 'We are committed to inclusive education and welcome students with diverse learning needs. Our special education team works with families to develop individualized education plans that ensure every student can succeed.'
    },
    {
      title: 'International Students',
      content: 'We welcome international students and provide comprehensive support including visa documentation assistance, cultural orientation programs, and additional language support as needed.'
    }
  ];

  const feeStructure = [
    {
      category: 'Kindergarten - Grade 2',
      tuition: '$18,500',
      registration: '$500',
      technology: '$800',
      activities: '$600',
      total: '$20,400'
    },
    {
      category: 'Grades 3 - 5',
      tuition: '$21,000',
      registration: '$500',
      technology: '$1,000',
      activities: '$800',
      total: '$23,300'
    },
    {
      category: 'Grades 6 - 8',
      tuition: '$24,500',
      registration: '$500',
      technology: '$1,200',
      activities: '$1,000',
      total: '$27,200'
    },
    {
      category: 'Grades 9 - 12',
      tuition: '$28,000',
      registration: '$500',
      technology: '$1,500',
      activities: '$1,200',
      total: '$31,200'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}>
            Join Our Community
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Journey
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Starts Here
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 leading-relaxed">
            Take the first step towards an exceptional education that will prepare you for success in an ever-evolving world. 
            Our admissions process is designed to understand your unique potential and match you with the perfect learning environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#application"
              className={`px-8 py-4 ${theme.primaryBg} rounded-full font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg`}
            >
              Start Application
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transform hover:scale-105 transition-all duration-200"
            >
              Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Enrollment Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Enroll</h2>
            <p className="text-xl text-gray-600">A simple, straightforward process designed with families in mind</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                )}
                
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative z-10">
                  <div className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className={`text-sm font-bold ${theme.primary} mb-2`}>STEP {step.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
            <p className="text-xl text-gray-600">Understanding our admission requirements</p>
          </div>
          
          <div className="space-y-4">
            {eligibilityCriteria.map((criteria, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{criteria.title}</h3>
                  {activeAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {activeAccordion === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-gray-600 leading-relaxed">{criteria.content}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Online Application Form</h2>
            <p className="text-xl text-gray-600">Begin your journey with us by completing this application</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Student Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter student's full name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Grade Applying For *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="grade-1">Grade 1</option>
                    <option value="grade-2">Grade 2</option>
                    <option value="grade-3">Grade 3</option>
                    <option value="grade-4">Grade 4</option>
                    <option value="grade-5">Grade 5</option>
                    <option value="grade-6">Grade 6</option>
                    <option value="grade-7">Grade 7</option>
                    <option value="grade-8">Grade 8</option>
                    <option value="grade-9">Grade 9</option>
                    <option value="grade-10">Grade 10</option>
                    <option value="grade-11">Grade 11</option>
                    <option value="grade-12">Grade 12</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Previous School</label>
                <input
                  type="text"
                  name="previousSchool"
                  value={formData.previousSchool}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter previous school name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Enter full address"
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Guardian Name *</label>
                  <input
                    type="text"
                    name="guardianName"
                    value={formData.guardianName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter guardian's name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Guardian Phone *</label>
                  <input
                    type="tel"
                    name="guardianPhone"
                    value={formData.guardianPhone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter guardian's phone"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Student's Interests & Hobbies</label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about the student's interests, hobbies, and extracurricular activities"
                ></textarea>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any additional information or questions you'd like to share with us"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className={`flex items-center space-x-2 px-8 py-4 ${theme.primaryBg} text-white rounded-full font-semibold ${theme.primaryHover} transform hover:scale-105 transition-all duration-200 shadow-lg mx-auto`}
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Application</span>
                </button>
                <p className="text-sm text-gray-600 mt-4">
                  By submitting this form, you agree to our terms and conditions and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600">Transparent pricing for exceptional educational value</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={`${theme.primaryBg} text-white`}>
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Grade Level</th>
                    <th className="px-6 py-4 text-center font-semibold">Tuition</th>
                    <th className="px-6 py-4 text-center font-semibold">Registration</th>
                    <th className="px-6 py-4 text-center font-semibold">Technology</th>
                    <th className="px-6 py-4 text-center font-semibold">Activities</th>
                    <th className="px-6 py-4 text-center font-semibold">Total Annual</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-6 py-4 font-semibold text-gray-900">{fee.category}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{fee.tuition}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{fee.registration}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{fee.technology}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{fee.activities}</td>
                      <td className="px-6 py-4 text-center font-bold text-blue-600">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="text-sm text-gray-600 space-y-2">
                <p><strong>Payment Options:</strong> Annual payment (5% discount), Semi-annual, or Monthly installments</p>
                <p><strong>Sibling Discount:</strong> 10% discount on tuition for second child, 15% for third and subsequent children</p>
                <p><strong>Financial Aid:</strong> Need-based scholarships available covering up to 75% of tuition</p>
                <p><strong>Includes:</strong> All textbooks, digital resources, lunch program, and transportation within city limits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-20 bg-gradient-to-r ${theme.gradient} text-white`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Don't wait to secure your child's future. Our admissions team is here to guide you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="#application"
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Complete Application
            </a>
            <a
              href="/connect"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
            >
              Schedule Campus Tour
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Calendar className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Application Deadline</div>
              <div className="text-sm opacity-75">March 31, 2025</div>
            </div>
            <div>
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Class Size</div>
              <div className="text-sm opacity-75">Maximum 20 students</div>
            </div>
            <div>
              <GraduationCap className="h-8 w-8 mx-auto mb-2" />
              <div className="font-semibold">Start Date</div>
              <div className="text-sm opacity-75">September 2025</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enrollment;