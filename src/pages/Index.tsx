
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MapPin, Phone, Code2, Palette, Database, Globe, ExternalLink } from "lucide-react";

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

  const skills = [
    { name: "React", level: 85, icon: Code2 },
    { name: "JavaScript", level: 90, icon: Code2 },
    { name: "TypeScript", level: 75, icon: Code2 },
    { name: "CSS/Tailwind", level: 88, icon: Palette },
    { name: "Node.js", level: 70, icon: Database },
    { name: "Git/GitHub", level: 80, icon: Github }
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Weather App",
      description: "A responsive weather application with real-time data",
      tech: ["React", "API Integration", "CSS"],
      link: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Task Manager",
      description: "A productivity app for managing daily tasks and projects",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      link: "#",
      image: "/placeholder.svg"
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
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Front-End Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              B.Tech CSE Student passionate about creating beautiful, functional web experiences
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="mailto:rishabh@example.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={28} />
              </a>
            </div>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-8 py-3">
              View My Work
            </Button>
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
                      I'm a passionate B.Tech Computer Science Engineering student with a strong foundation in 
                      front-end development. I love creating responsive, user-friendly web applications that 
                      solve real-world problems.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="mr-3 text-blue-400" size={20} />
                        <span>India</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Phone className="mr-3 text-blue-400" size={20} />
                        <span>+91 XXX-XXX-XXXX</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Mail className="mr-3 text-blue-400" size={20} />
                        <span>rishabh@example.com</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="Rishabh Gupta" 
                      className="w-64 h-64 rounded-full mx-auto border-4 border-gray-600 shadow-xl"
                    />
                  </div>
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/80 border-gray-700 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gray-700 rounded-t-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-100">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-gray-700 text-gray-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-gray-600 text-gray-200 hover:bg-gray-700">
                    <ExternalLink className="mr-2" size={16} />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-100">Get In Touch</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gray-900/80 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-100">Let's work together</CardTitle>
                <CardDescription className="text-gray-300">
                  I'm always open to discussing new opportunities and exciting projects.
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
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-700">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Rishabh Gupta. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
