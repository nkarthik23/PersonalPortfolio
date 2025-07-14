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
  ChevronDown
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg">
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
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Nikhil Karthikeyan
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                      Hey, I'm Nikhil Karthikeyan! I am a UC Davis student interested in the world of data engineering, software development, and product management. I have internship and project experience in these fields.
                    </p>
                  </div>
                  
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={() => scrollToSection('experience')}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    Explore My Work
                    <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="min-h-screen flex items-center px-6 py-12">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-6xl mx-auto space-y-8"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Technical Experience</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">Data Engineering</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• ETL Pipeline Development</li>
                        <li>• Data Warehousing & Analytics</li>
                        <li>• Big Data Processing (Spark, Hadoop)</li>
                        <li>• Database Design & Optimization</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-purple-600">Product Management</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Product Strategy & Roadmapping</li>
                        <li>• User Research & Analytics</li>
                        <li>• Agile Development & Scrum</li>
                        <li>• Cross-functional Team Leadership</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-green-600">Programming</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Python, Java, JavaScript</li>
                        <li>• SQL & NoSQL Databases</li>
                        <li>• Cloud Platforms (AWS, GCP)</li>
                        <li>• Machine Learning & AI</li>
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-orange-600">Tools & Technologies</h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Apache Spark, Kafka</li>
                        <li>• Docker, Kubernetes</li>
                        <li>• Git, CI/CD Pipelines</li>
                        <li>• Tableau, Power BI</li>
                      </ul>
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
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Projects</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-blue-600">Data Pipeline Project</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Built an end-to-end ETL pipeline processing millions of records daily using Apache Spark and Kafka.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Spark</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Kafka</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-purple-600">Product Analytics Dashboard</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Developed a real-time analytics dashboard for product metrics using React and D3.js.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">D3.js</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Node.js</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-green-600">Machine Learning Model</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Implemented a predictive model for customer churn analysis using scikit-learn and TensorFlow.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Python</span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">TensorFlow</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Scikit-learn</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-orange-600">Cloud Infrastructure</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Deployed scalable microservices architecture on AWS using Docker and Kubernetes.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">AWS</span>
                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Docker</span>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">K8s</span>
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
                      className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
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
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Resume</h2>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-4xl mx-auto"
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2">Nikhil Karthikeyan</h3>
                      <p className="text-gray-600 dark:text-gray-300">UC Davis Student</p>
                      <p className="text-gray-600 dark:text-gray-300">Data Engineering & Product Management</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-blue-600">Education</h4>
                        <div className="border-l-4 border-blue-500 pl-4">
                          <p className="font-semibold">University of California, Davis</p>
                          <p className="text-gray-600 dark:text-gray-300">Bachelor's Degree in Data Science</p>
                          <p className="text-gray-600 dark:text-gray-300">Expected Graduation: 2027</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-purple-600">Skills</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-semibold mb-2">Programming Languages:</p>
                            <p className="text-gray-600 dark:text-gray-300">Python, Java, JavaScript, SQL, R</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Technologies:</p>
                            <p className="text-gray-600 dark:text-gray-300">Next.js,Apache Spark, Kafka, Docker, AWS</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Tools:</p>
                            <p className="text-gray-600 dark:text-gray-300">Git, Tableau, Power BI, Jira</p>
                          </div>
                          <div>
                            <p className="font-semibold mb-2">Methodologies:</p>
                            <p className="text-gray-600 dark:text-gray-300">Agile, Scrum, Data Modeling</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-green-600">Interests</h4>
                        <p className="text-gray-600 dark:text-gray-300">
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
                      <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
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
