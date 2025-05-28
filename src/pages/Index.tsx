import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ProfileImage } from "@/components/ProfileImage";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Code2, 
  Palette, 
  Database, 
  Globe, 
  ExternalLink,
  Download,
  Award,
  GraduationCap,
  BookOpen,
  Brain,
  Terminal,
  Cpu,
  Network,
  FileText,
  Star
} from "lucide-react";

const Index = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setContactForm({ name: "", email: "", message: "" });
  };

  const frontEndSkills = [
    { name: "HTML", level: 95, icon: Code2 },
    { name: "CSS", level: 90, icon: Palette },
    { name: "JavaScript", level: 85, icon: Code2 },
    { name: "React", level: 80, icon: Code2 }
  ];

  const programmingSkills = [
    { name: "C++", level: 90, icon: Terminal },
    { name: "Java", level: 85, icon: Code2 },
    { name: "Python", level: 80, icon: Code2 },
    { name: "DSA", level: 88, icon: Brain }
  ];

  const technicalSubjects = [
    { name: "Operating Systems", level: 92, icon: Cpu },
    { name: "DBMS", level: 90, icon: Database },
    { name: "OOPs", level: 88, icon: Code2 },
    { name: "Computer Networks", level: 85, icon: Network }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "CGPA of 9.35 in B.Tech CSE",
      icon: Star,
      category: "Academic"
    },
    {
      title: "Research Publication",
      description: "Published Research Paper on 'Smart Irrigation System' (IEEE, Springer)",
      icon: FileText,
      category: "Research"
    },
    {
      title: "Programming Certifications",
      description: "Certified in C++, Java, Python",
      icon: Award,
      category: "Certification"
    },
    {
      title: "Cybersecurity Certified",
      description: "Completed Cybersecurity Certification",
      icon: Award,
      category: "Certification"
    }
  ];

  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "Medi-Caps University",
      year: "3rd Year (Ongoing)",
      grade: "CGPA: 9.35",
      icon: GraduationCap
    },
    {
      degree: "Class 12 (PCM)",
      institution: "Higher Secondary Education",
      year: "Completed",
      grade: "87%",
      icon: BookOpen
    },
    {
      degree: "Class 10",
      institution: "Secondary Education",
      year: "Completed",
      grade: "85%",
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rishabh Gupta
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Rishabh Gupta
            </h2>
            <h3 className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold">
              B.Tech CSE Student | Front-End Developer
            </h3>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Aspiring Front-End Developer | Passionate Learner | DSA & Aptitude Enthusiast
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1007796" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={32} />
              </a>
              <a href="mailto:03rishabh04gupta@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={32} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={32} />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3">
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-200 hover:bg-gray-700 px-8 py-3">
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">About Me</h3>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      I am a B.Tech Computer Science student at Medi-Caps University with a strong CGPA of 9.35, 
                      showing my dedication toward academics. I have a keen interest in web development and front-end 
                      technologies like HTML, CSS, JavaScript, and React.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      I am also skilled in data structures and algorithms, technical subjects like OS, DBMS, OOPs, 
                      and Computer Networks, and have solved many aptitude questions. I'm constantly learning and 
                      looking forward to stepping into the tech industry after graduation.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-300">
                        <GraduationCap className="mr-3 text-blue-400" size={20} />
                        <span>B.Tech CSE, Medi-Caps University</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Star className="mr-3 text-blue-400" size={20} />
                        <span>CGPA: 9.35</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="mr-3 text-blue-400" size={20} />
                        <span>+91 6266454844</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="mr-3 text-blue-400" size={20} />
                        <span>03rishabh04gupta@gmail.com</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-semibold text-gray-100 mb-3">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-gray-700 text-gray-200">AI</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-200">Machine Learning</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-200">Web Development</Badge>
                        <Badge variant="secondary" className="bg-gray-700 text-gray-200">Front-End</Badge>
                      </div>
                    </div>
                  </div>
                  <ProfileImage
                    src="/lovable-uploads/863223ea-2b1b-485d-959e-ab49dc97ae87.png"
                    alt="Rishabh Gupta"
                    className="w-64 h-64 rounded-full mx-auto border-4 border-gray-600 shadow-xl object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Skills & Technologies</h3>
          <div className="max-w-6xl mx-auto">
            {/* Front-End Skills */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Front-End Development</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {frontEndSkills.map((skill, index) => (
                  <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <skill.icon className="mr-3 text-blue-400" size={24} />
                        <span className="text-xl font-semibold text-gray-100">{skill.name}</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                      <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Programming Skills */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Programming Languages</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {programmingSkills.map((skill, index) => (
                  <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <skill.icon className="mr-3 text-purple-400" size={24} />
                        <span className="text-xl font-semibold text-gray-100">{skill.name}</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                      <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Technical Subjects */}
            <div className="mb-12">
              <h4 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Technical Subjects</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSubjects.map((skill, index) => (
                  <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:bg-gray-800/80 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <skill.icon className="mr-3 text-green-400" size={24} />
                        <span className="text-xl font-semibold text-gray-100">{skill.name}</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                      <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Tools & Other Skills */}
            <div>
              <h4 className="text-2xl font-semibold text-gray-100 mb-6 text-center">Tools & Other Skills</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-base py-2 px-4">GitHub</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-base py-2 px-4">MS Office</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-base py-2 px-4">Aptitude Skills</Badge>
                <Badge variant="secondary" className="bg-gray-700 text-gray-200 text-base py-2 px-4">Problem Solving</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <achievement.icon className="mr-3 text-yellow-400" size={28} />
                    <Badge variant="secondary" className="bg-gray-700 text-gray-200">
                      {achievement.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-100">{achievement.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base">{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Education</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <edu.icon className="text-blue-400 mt-1" size={28} />
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-100 mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">{edu.year}</span>
                        <Badge variant="secondary" className="bg-green-600 text-white">
                          {edu.grade}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Get In Touch</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-100">Let's connect and work together</CardTitle>
                <CardDescription className="text-gray-300">
                  I'm always open to discussing new opportunities, internships, and exciting projects in tech.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-200">Name</Label>
                    <Input
                      id="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-200">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="bg-gray-800 border-gray-600 text-gray-100 focus:border-blue-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-200">Message</Label>
                    <textarea
                      id="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full h-32 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold">
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-100 mb-4">Direct Contact</h4>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <Phone className="mr-3 text-blue-400" size={20} />
                      <a href="tel:+916266454844" className="hover:text-blue-400">
                        +91 6266454844
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="mr-3 text-blue-400" size={20} />
                      <a href="mailto:03rishabh04gupta@gmail.com" className="hover:text-blue-400">
                        03rishabh04gupta@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Linkedin className="mr-3 text-blue-400" size={20} />
                      <a href="https://www.linkedin.com/feed/?trk=sem-ga_campid.14650114788_asid.151761418307_crid.657403558721_kw.linkedin%20login_d.c_tid.kwd-12704335873_n.g_mt.e_geo.1007796" className="hover:text-blue-400">
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Rishabh Gupta. All rights reserved. | B.Tech CSE Student | Front-End Developer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
