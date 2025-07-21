'use client';

import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Home as HomeIcon, 
  Briefcase, 
  FolderOpen, 
  FileText, 
  Github,
  Download,
  ChevronRight,
  ChevronDown,
  Code,
  Database,
  Cloud,
  BarChart3
} from 'lucide-react';

// Technology Icons Components
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v8h2V6h-2zm0 10v2h2v-2h-2z"/>
  </svg>
);

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
    <path d="M2 4h20v16H2V4zm2 2v12h16V6H4z"/>
  </svg>
);

const RIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-3-3 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const TypeScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.414-.511-.06-.854-.234-1.21-.855-.3-.45-.345-.84-.3-1.26l-1.755.225c-.135 1.56.795 2.76 2.478 2.76 1.365 0 2.25-.705 2.25-1.65 0-.975-.75-1.35-1.65-1.35-1.125 0-1.65.975-1.65 1.65 0 .975.525 1.65 1.65 1.65z"/>
  </svg>
);

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Show content after typing animation
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'projects', 'resume'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: HomeIcon, label: 'Home' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'resume', icon: FileText, label: 'Resume' },
  ];

  return (
    <div className="min-h-screen bg-black grid-background">
      {/* Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-full p-2 shadow-2xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-white text-black shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={item.label}
                >
                  <Icon size={20} />
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {!showContent ? (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center min-h-screen"
            >
              <div className="text-center">
                <TypeAnimation
                  sequence={[
                    'Welcome to my portfolio...',
                    1000,
                    'Welcome to my portfolio',
                    1000,
                  ]}
                  wrapper="h1"
                  cursor={true}
                  repeat={0}
                  className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                />
              </div>
            </motion.div>
          ) : (
            <div>
              {/* Home Section */}
              <section id="home" className="min-h-screen flex items-center justify-center px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center space-y-8 max-w-4xl mx-auto"
                >
                  <div className="space-y-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg"
                    >
                      <Image
                        src="/headshot.jpg"
                        alt="Nikhil Karthikeyan"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                      Nikhil Karthikeyan
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
                      Hey, I'm Nikhil Karthikeyan! I am a UC Davis student interested in the world of data engineering, software development, and product management. I have internship and project experience in these fields.
                    </p>
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={() => scrollToSection('experience')}
                    className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    Explore My Work
                    <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </section>

              {/* Technical Skills Section */}
              <section id="experience" className="min-h-screen flex items-center px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-6xl mx-auto space-y-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Technical Skills</h2>
                  
                  {/* Programming Languages */}
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-6 text-gray-300">Programming Languages</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                      {[
                        { name: 'Python', icon: PythonIcon },
                        { name: 'SQL', icon: SQLIcon },
                        { name: 'R', icon: RIcon },
                        { name: 'TypeScript', icon: TypeScriptIcon },
                        { name: 'JavaScript', icon: JavaScriptIcon }
                      ].map((lang, index) => {
                        const IconComponent = lang.icon;
                        return (
                          <motion.div
                            key={lang.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 hover:bg-white/20 transition-all duration-300">
                              <IconComponent />
                            </div>
                            <span className="text-sm font-medium text-gray-300">{lang.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technology Categories */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Code className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Frontend Development</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• React & Next.js</li>
                          <li>• HTML/CSS/JavaScript</li>
                          <li>• TypeScript</li>
                          <li>• Tailwind CSS</li>
                          <li>• Responsive Design</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Database className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Backend Development</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Node.js & Express</li>
                          <li>• Python (Django/Flask)</li>
                          <li>• RESTful APIs</li>
                          <li>• Database Design</li>
                          <li>• Authentication</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <Cloud className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Cloud & DevOps</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• AWS & GCP</li>
                          <li>• Docker & Kubernetes</li>
                          <li>• CI/CD Pipelines</li>
                          <li>• Git & GitHub</li>
                          <li>• Serverless Architecture</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                          <BarChart3 className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Data Analysis & Engineering</h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>• Apache Spark & Kafka</li>
                          <li>• Pandas & NumPy</li>
                          <li>• Machine Learning</li>
                          <li>• Data Visualization</li>
                          <li>• ETL Pipelines</li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="min-h-screen flex items-center px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-6xl mx-auto space-y-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Projects</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-white">Data Pipeline Project</h3>
                      <p className="text-gray-300 mb-4">
                        Built an end-to-end ETL pipeline processing millions of records daily using Apache Spark and Kafka.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Spark</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Kafka</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-white">Product Analytics Dashboard</h3>
                      <p className="text-gray-300 mb-4">
                        Developed a real-time analytics dashboard for product metrics using React and D3.js.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">D3.js</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Node.js</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-white">Machine Learning Model</h3>
                      <p className="text-gray-300 mb-4">
                        Implemented a predictive model for customer churn analysis using scikit-learn and TensorFlow.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">TensorFlow</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Scikit-learn</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-2xl hover:shadow-white/5 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-white">Cloud Infrastructure</h3>
                      <p className="text-gray-300 mb-4">
                        Deployed scalable microservices architecture on AWS using Docker and Kubernetes.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">AWS</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">Docker</span>
                        <span className="px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full text-sm">K8s</span>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="text-center pt-8"
                  >
                    <a
                      href="https://github.com/nkarthik23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      <Github size={20} />
                      View All Projects on GitHub
                    </a>
                  </motion.div>
                </motion.div>
              </section>

              {/* Resume Section */}
              <section id="resume" className="min-h-screen flex items-center px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-6xl mx-auto space-y-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Resume</h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 p-8 rounded-xl shadow-2xl max-w-4xl mx-auto backdrop-blur-sm"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-white">Nikhil Karthikeyan</h3>
                      <p className="text-gray-300">UC Davis Student</p>
                      <p className="text-gray-300">Data Engineering & Product Management</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-white">Education</h4>
                        <div className="border-l-4 border-white/30 pl-4">
                          <p className="font-semibold text-white">University of California, Davis</p>
                          <p className="text-gray-300">Bachelor's Degree in Data Science</p>
                          <p className="text-gray-300">Expected Graduation: 2027</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-white">Skills</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold mb-2 text-white">Programming Languages:</p>
                            <p className="text-gray-300">Python, Java, JavaScript, SQL, R</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2 text-white">Technologies:</p>
                            <p className="text-gray-300">Next.js, Apache Spark, Kafka, Docker, AWS</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2 text-white">Tools:</p>
                            <p className="text-gray-300">Git, Tableau, Power BI, Jira</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2 text-white">Methodologies:</p>
                            <p className="text-gray-300">Agile, Scrum, Data Modeling</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-white">Interests</h4>
                        <p className="text-gray-300">
                          Passionate about leveraging data to drive business decisions and create impactful products. 
                          Interested in the intersection of technology and business strategy.
                        </p>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="text-center pt-8"
                    >
                      <button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        <Download size={20} />
                        Download Resume (PDF)
                      </button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </section>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
