import React from "react";
import {
  Users,
  Target,
  Heart,
  Lightbulb,
  Award,
  Globe,
  BookOpen,
  Rocket,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const WhoWeAre = () => {
  const { theme } = useTheme();

  const beliefs = [
    {
      icon: Heart,
      title: "Empathy First",
      description:
        "Every interaction is rooted in understanding and compassion",
    },
    {
      icon: Rocket,
      title: "Innovation Mindset",
      description: "We embrace change and foster creative problem-solving",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Preparing students for an interconnected world",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description: "Education is a continuous journey of discovery",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Together we achieve more than individually possible",
    },
    {
      icon: Award,
      title: "Excellence Standards",
      description: "We set high expectations and provide support to reach them",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "QB365 Public School Academy was established with a vision to revolutionize education",
    },
    {
      year: "2017",
      title: "First Innovation Lab",
      description: "Opened our first AI-powered learning laboratory",
    },
    {
      year: "2019",
      title: "Global Recognition",
      description: "Received international awards for educational innovation",
    },
    {
      year: "2021",
      title: "Digital Transformation",
      description: "Launched comprehensive digital learning platform",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description:
        "Became the first carbon-neutral educational institution in the region",
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding our impact to serve 10,000+ students globally",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span
                  className={`inline-block px-4 py-2 ${theme.primaryBg} rounded-full text-sm font-semibold mb-4`}
                >
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Pioneering the Future of Education
                </h1>
                <p className="text-xl opacity-90 leading-relaxed">
                  At QB365 Public School Academy, we believe that education
                  should be transformative, innovative, and deeply personal.
                  We're not just teaching subjects – we're nurturing the
                  leaders, creators, and changemakers of tomorrow.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-sm opacity-75">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">98%</div>
                  <div className="text-sm opacity-75">Student Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="./pubilc/Whoweare/WhoweareImg1.jpeg"
                alt="Our Academy"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Target className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div
                  className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower every student with the knowledge, skills, and
                  mindset needed to thrive in an ever-evolving world. We create
                  learning experiences that are engaging, relevant, and
                  transformative, preparing students not just for tests, but for
                  life.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div
                  className={`w-16 h-16 ${theme.primaryBg} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                >
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in innovative education, where every
                  student discovers their potential and develops the confidence
                  to pursue their dreams. We envision a world where learning is
                  joyful, meaningful, and accessible to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Beliefs That Guide Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our educational philosophy is built on fundamental beliefs that
              shape every aspect of the student experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-transparent hover:border-blue-500"
              >
                <div
                  className={`w-12 h-12 ${theme.primaryBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <belief.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {belief.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="./pubilc/Home/HomeImg2.jpeg"
                alt="Principal Dr. Sarah Chen"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900">
                    Dr. Sarah Chen
                  </div>
                  <div className="text-xs text-gray-600">
                    Principal & Founder
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  A Message from Our Principal
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    "When I founded QB365 Public School Academy ten years ago, I
                    had a simple yet ambitious vision: to create an educational
                    environment where every child could discover their unique
                    potential and develop the skills necessary to shape our
                    collective future."
                  </p>
                  <p>
                    "Today, as I walk through our halls filled with innovative
                    laboratories, collaborative spaces, and engaged learners,
                    I'm reminded that education is not about filling vessels,
                    but igniting flames. Our students don't just learn facts –
                    they learn to question, to create, and to lead."
                  </p>
                  <p>
                    "We believe that in this rapidly changing world, the ability
                    to adapt, empathize, and innovate are just as important as
                    academic achievement. That's why our curriculum balances
                    rigorous academics with character development, creativity,
                    and critical thinking."
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <p className="text-lg font-medium text-gray-800 italic">
                  "Every student who walks through our doors leaves not just
                  with knowledge, but with the confidence to make a meaningful
                  difference in the world."
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  - Dr. Sarah Chen, Principal & Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey So Far
            </h2>
            <p className="text-xl text-gray-600">
              A decade of innovation, growth, and impact
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div
                        className={`text-2xl font-bold ${theme.primary} mb-2`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 ${theme.primaryBg} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values in Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values in Action
            </h2>
            <p className="text-xl text-gray-600">
              See how our principles translate into real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./pubilc/Home/HomeImg3.jpeg"
                alt="Community Service"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Community Impact
                </h3>
                <p className="text-gray-600 mb-4">
                  Our students regularly engage in community service projects,
                  from environmental conservation to tutoring younger students,
                  embodying our commitment to social responsibility.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <Award className="h-4 w-4 mr-2" />
                  500+ Hours of Service This Year
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src=" ./pubilc/Whoweare/WhoweareImg4.jpeg"
                alt="Innovation Projects"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Innovation Culture
                </h3>
                <p className="text-gray-600 mb-4">
                  From robotics competitions to startup incubators, we foster an
                  environment where creative thinking and entrepreneurship
                  flourish at every level.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <Rocket className="h-4 w-4 mr-2" />
                  25+ Student-Led Innovations
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src="./pubilc/Whoweare/WhoweareImg5.jpeg"
                alt="Global Connections"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Perspective
                </h3>
                <p className="text-gray-600 mb-4">
                  Through international exchange programs and virtual
                  collaborations, our students develop a truly global mindset
                  and cultural competency.
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  <Globe className="h-4 w-4 mr-2" />
                  30+ International Partnerships
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`bg-gradient-to-r ${theme.gradient} text-white rounded-3xl p-12`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of Our Story
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join a community that values growth, innovation, and making a
              positive impact on the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/enrollment"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Start Your Journey
              </a>
              <a
                href="/connect"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
