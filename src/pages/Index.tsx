
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'achievements', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    programming: ['C++', 'Java', 'Python'],
    tools: ['GitHub', 'MS Office'],
    subjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOPs', 'Computer Networks'],
    aptitude: ['Problem Solving', 'Logical Reasoning', 'Quantitative Aptitude']
  };

  const achievements = [
    {
      title: "Academic Excellence",
      description: "CGPA of 9.35 in B.Tech CSE",
      icon: "🎓"
    },
    {
      title: "Research Publication",
      description: "Published Research Paper on 'Smart Irrigation System' (IEEE, Springer)",
      icon: "📚"
    },
    {
      title: "Programming Certifications",
      description: "Certified in C++, Java, Python, and Cybersecurity",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              RG
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Achievements', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rishabh Gupta
            </h1>
            <h2 className="text-2xl md:text-3xl mb-4 text-gray-300">
              B.Tech CSE Student | Front-End Developer
            </h2>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
              Aspiring Front-End Developer | Passionate Learner | DSA & Aptitude Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="animate-bounce text-blue-400" size={32} />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  I am a B.Tech Computer Science student at Medi-Caps University with a strong CGPA of 9.35, 
                  showing my dedication toward academics. I have a keen interest in web development and front-end 
                  technologies like HTML, CSS, JavaScript, and React. I am also skilled in data structures and 
                  algorithms, technical subjects like OS, DBMS, OOPs, and Computer Networks, and have solved many 
                  aptitude questions. I'm constantly learning and looking forward to stepping into the tech industry 
                  after graduation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge variant="secondary" className="bg-blue-600/20 text-blue-400 border-blue-400/20">
                    AI & Machine Learning
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-600/20 text-purple-400 border-purple-400/20">
                    Web Development
                  </Badge>
                  <Badge variant="secondary" className="bg-pink-600/20 text-pink-400 border-pink-400/20">
                    Problem Solving
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 capitalize text-blue-400">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <div className="space-y-2">
                        {skillList.map((skill, skillIndex) => (
                          <div key={skill} className="flex items-center justify-between">
                            <span className="text-gray-300">{skill}</span>
                            <div className="w-20 bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${85 + skillIndex * 2}%` }}
                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{achievement.icon}</div>
                      <h3 className="text-xl font-bold mb-3 text-blue-400">{achievement.title}</h3>
                      <p className="text-gray-300">{achievement.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">B.Tech Computer Science Engineering</h3>
                      <p className="text-gray-300">Medi-Caps University | 3rd Year</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold">
                        CGPA: 9.35
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Class 12 (PCM)</h3>
                      <p className="text-gray-300">Higher Secondary Education</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full font-bold">
                        87%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">Class 10</h3>
                      <p className="text-gray-300">Secondary Education</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full font-bold">
                        85%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-blue-400">Let's Connect</h3>
                      <p className="text-gray-300 mb-6">
                        I'm always excited to discuss new opportunities, collaborate on projects, 
                        or simply connect with fellow developers and tech enthusiasts.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Mail className="text-blue-400" size={20} />
                          <span className="text-gray-300">03rishabh04gupta@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="text-blue-400" size={20} />
                          <span className="text-gray-300">Indore, Madhya Pradesh, India</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold mb-6 text-blue-400">Connect Online</h3>
                      <div className="flex flex-col space-y-4">
                        <a
                          href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1007796"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 transition-colors"
                        >
                          <Linkedin className="text-blue-400" size={20} />
                          <span className="text-white">LinkedIn Profile</span>
                          <ExternalLink className="text-gray-400 ml-auto" size={16} />
                        </a>
                        <a
                          href="mailto:03rishabh04gupta@gmail.com"
                          className="flex items-center space-x-3 p-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 transition-colors"
                        >
                          <Mail className="text-purple-400" size={20} />
                          <span className="text-white">Send Email</span>
                          <ExternalLink className="text-gray-400 ml-auto" size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Rishabh Gupta. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
