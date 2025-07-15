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
    <div className="min-h-screen bg-black">
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
                        { name: 'Python' },
                        { name: 'SQL' },
                        { name: 'R' },
                        { name: 'TypeScript' },
                        { name: 'JavaScript' }
                      ].map((lang, index) => (
                        <motion.div
                          key={lang.name}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex flex-col items-center gap-2"
                        >
                          <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg hover:scale-110 hover:bg-white/20 transition-all duration-300">
                            {lang.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-300">{lang.name}</span>
                        </motion.div>
                      ))}
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
