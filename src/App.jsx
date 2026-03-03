import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown, Code2, Briefcase, User, Folder, MessageSquare, Award, Sparkles, Shield, MapPin, Database } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'leadership', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
          setIsVisible(prev => ({ ...prev, [section]: isInView }));
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const skills = [
    {
      category: 'Languages',
      items: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL', 'HTML5/CSS3'],
      icon: '💻',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      category: 'Frameworks & Web',
      items: ['React.js', 'Next.js', 'Node.js', 'Flask', 'Tailwind CSS', 'Leaflet.js'],
      icon: '🌐',
      color: 'from-purple-400 to-pink-500'
    },
    {
      category: 'APIs & Libraries',
      items: ['OpenAI API', 'Twilio API', 'Spotify Web API', 'OpenCV.js', 'REST APIs'],
      icon: '🔌',
      color: 'from-orange-400 to-red-500'
    },
    {
      category: 'Databases & Tools',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Vercel', 'Railway', 'Figma'],
      icon: '🛠️',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const projects = [
    {
      title: 'FormForge',
      description: 'Built during HackKnight 2025 (48-hour hackathon) — an AI-assisted workout form analysis platform that detects posture issues by comparing user movements to ideal exercise baselines using real-time pose overlays and rep tracking.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenCV.js'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
      demo: '#',
      code: '#',
      gradient: 'from-cyan-500 to-blue-500',
      period: 'Mar 2025'
    },
    {
      title: 'MindBridge',
      description: 'Full-stack SMS communication platform automating patient outreach for a psychiatry practice. Features webhook-driven messaging workflows, per-patient state tracking, OpenAI summarization, and real-time clinician visibility.',
      tech: ['React', 'Node.js', 'MongoDB', 'Twilio', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      demo: '#',
      code: '#',
      gradient: 'from-purple-500 to-pink-500',
      period: 'Jan 2025'
    },
    {
      title: 'Playlist Health Dashboard',
      description: 'Lightweight Spotify playlist analysis dashboard that visualizes track attributes like energy, tempo, and valence. Demoed to Spotify HR and engineering mentors as part of a showcase initiative.',
      tech: ['React', 'TypeScript', 'Spotify Web API'],
      image: 'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?w=800&h=500&fit=crop',
      demo: '#',
      code: '#',
      gradient: 'from-green-500 to-emerald-500',
      period: 'Oct 2024'
    },
    {
      title: 'Campus Crisis Map',
      description: 'Full-stack web app where students anonymously report campus issues like broken elevators, unsafe lighting, and accessibility problems. Reports are plotted on a live map with heatmap visualization and real-time status tracking.',
      tech: ['Python', 'Flask', 'SQLite', 'Leaflet.js', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
      demo: '#',
      code: 'https://github.com/RefathChowdhury/campus-crisis-map',
      gradient: 'from-red-500 to-orange-500',
      period: 'Feb 2025 – May 2025'
    },
    {
      title: 'Aspire High Student Tracker',
      description: 'Full-stack student progress tracker built for Aspire High Youth Development. Staff can manage student profiles, log session notes, and generate AI-powered progress summaries using Groq\'s LLaMA 3 model.',
      tech: ['React', 'Flask', 'SQLite', 'Groq API', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop',
      demo: '#',
      code: 'https://github.com/RefathChowdhury/aspire-high-tracker',
      gradient: 'from-indigo-500 to-violet-500',
      period: 'Feb 2026 – May 2026'
    }
  ];

  const experience = [
    {
      role: 'Software Engineering Intern',
      company: 'Aspire High Youth Development, Inc.',
      location: 'New York, NY',
      period: 'Sep 2025 – Present',
      description: 'Building full-stack solutions for afterschool program management and analytics.',
      achievements: [
        'Built a full-stack Afterschool Management System using React.js, Flask, and MySQL, allowing staff to manage attendance and student records via a unified dashboard.',
        'Optimized MySQL queries and redesigned REST API endpoints, improving backend performance by 40% while ensuring stable, low-latency data access.',
        'Developed real-time analytics dashboards and automated CSV export tools, increasing data visibility for directors and reducing manual spreadsheet processing.',
        'Built the Aspire High Student Tracker — a full-stack app with React, Flask, and SQLite for managing student profiles, logging session notes, and generating AI-powered progress summaries via Groq\'s LLaMA 3.'
      ]
    },
    {
      role: 'Software Engineering Intern',
      company: 'Reach Into Cultural Heights, Inc. (RICH)',
      location: 'New York, NY',
      period: 'Jul 2025 – Aug 2025',
      description: 'Developed AI-powered educational tools to support targeted academic intervention.',
      achievements: [
        'Built a Resource Recommendation Engine that matched students with personalized tutoring materials using attendance, engagement, and assignment patterns.',
        'Developed a responsive React + Tailwind interface with intuitive filters and clear visual cues, enabling educators to quickly identify at-risk students.',
        'Designed a lightweight scoring algorithm that ranked resources by relevance, improving staff decision-making and reducing manual review time.'
      ]
    }
  ];

  const leadership = [
    {
      title: 'Co-Founder & Vice President',
      organization: 'NYIT Cybersecurity Club',
      period: 'Dec 2023 – Present',
      location: 'New York, NY',
      achievements: [
        'Co-founded the NYIT Cybersecurity Club and led workshops on ethical hacking, digital forensics, and secure coding while mentoring members through CTF challenges.',
        'Strengthened team skills and engagement through hands-on competitions and structured learning sessions.'
      ],
      icon: Shield
    },
    {
      title: 'PicoCTF Competitor',
      organization: 'Cybersecurity Hackathon',
      period: 'Mar 2024',
      location: 'New York, NY',
      achievements: [
        'Co-led a 3-person team in PicoCTF cybersecurity competitions, solving cryptography, forensics, and web exploitation challenges.',
        'Ranked top 5 out of 80+ participants.'
      ],
      icon: Award
    }
  ];

  const education = {
    school: 'New York Institute of Technology (NYIT)',
    degree: 'B.S. in Computer Science, Minor in Mathematics',
    gpa: '3.7 / 4.0 GPA',
    honors: 'Presidential Honors List',
    expected: 'Expected May 2027',
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Mouse orb */}
      <div
        className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold relative group cursor-pointer">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">RC</span>
            </div>
            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'leadership', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative group ${activeSection === section ? 'text-cyan-400' : 'text-slate-400 hover:text-slate-100'}`}
                >
                  <span className="relative z-10">{section}</span>
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${activeSection === section ? 'bg-cyan-500/10 scale-100' : 'bg-slate-800/0 group-hover:bg-slate-800/50 scale-95 group-hover:scale-100'}`} />
                </button>
              ))}
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700">
              {menuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-300" />}
            </button>
          </div>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-6 space-y-2 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
            {['home', 'about', 'skills', 'projects', 'experience', 'leadership', 'contact'].map((section, idx) => (
              <button key={section} onClick={() => scrollToSection(section)}
                className={`block w-full text-left capitalize py-3 px-4 rounded-lg transition-all duration-300 ${activeSection === section ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30' : 'hover:bg-slate-800/50 text-slate-300 hover:translate-x-2 border border-transparent'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}>
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-5xl mx-auto text-left relative z-10 w-full">
          <div className="space-y-6 transition-all duration-1000" style={{ opacity: isVisible.home ? 1 : 0, transform: isVisible.home ? 'translateY(0)' : 'translateY(30px)' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Software Engineering Intern @ Aspire High</span>
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-cyan-400">Hi, my name is</p>
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 bg-clip-text text-transparent">Refath Chowdhury</span>
              </h1>
              <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-400">I build full-stack solutions</p>
            </div>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
              Computer Science student at NYIT with a <span className="text-cyan-400 font-semibold">3.7 GPA</span> and Presidential Honors. From <span className="text-cyan-400 font-semibold">optimizing backend APIs by 40%</span> to <span className="text-cyan-400 font-semibold">building AI-powered applications</span>, I love solving real-world problems with code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">View My Work <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <a href="mailto:cRefath13@gmail.com"
                className="group px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden border-2 border-cyan-500/50 hover:border-cyan-500">
                <span className="relative z-10 text-cyan-400">Get In Touch</span>
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
            <div className="flex gap-4 pt-8">
              {[
                { icon: Github, href: 'https://github.com/RefathChowdhury', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/cRefath', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:cRefath13@gmail.com', label: 'Email' }
              ].map((social, idx) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="group p-4 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-slate-700 hover:border-cyan-500/50 relative overflow-hidden"
                  style={{ transitionDelay: `${idx * 100}ms` }}>
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 relative z-10 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.about ? 1 : 0, transform: isVisible.about ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">01.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>Hello! I'm Refath, a Computer Science student at NYIT with a <span className="text-cyan-400 font-semibold">3.7 GPA</span> on the Presidential Honors List. I'm passionate about building software that solves real problems — from full-stack web apps to AI-powered tools.</p>
              <p>I've interned at two NYC organizations, shipping production-grade features including a <span className="text-cyan-400 font-semibold">Resource Recommendation Engine</span>, an <span className="text-cyan-400 font-semibold">Afterschool Management System</span>, and an <span className="text-cyan-400 font-semibold">AI-powered Student Tracker</span>. I love working across the stack and picking up new technologies quickly.</p>
              <p>Outside of work, I co-founded the NYIT Cybersecurity Club, competed in PicoCTF placing top 5 out of 80+, and built projects ranging from a hackathon fitness app to a Spotify playlist dashboard demoed to Spotify engineers.</p>
              <div className="pt-6">
                <p className="font-semibold text-slate-100 mb-4">Technologies I work with:</p>
                <div className="grid grid-cols-2 gap-3">
                  {['Java & Python', 'JavaScript / TypeScript', 'React.js & Next.js', 'Flask & Node.js', 'MySQL / PostgreSQL / MongoDB', 'OpenAI & Groq APIs'].map((tech, idx) => (
                    <div key={tech} className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2">
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">▹</span>
                      <span className="text-slate-400 group-hover:text-slate-300 transition-colors">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 flex items-start justify-center">
              <div className="relative group w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700 group-hover:border-cyan-500/50 transition-all duration-500">
                  <div className="space-y-6">
                    {[
                      { color: 'bg-cyan-500', label: 'School', value: 'NYIT' },
                      { color: 'bg-purple-500', label: 'GPA', value: '3.7 / 4.0' },
                      { color: 'bg-blue-500', label: 'Graduation', value: 'May 2027' },
                      { color: 'bg-yellow-500', label: 'Honors', value: 'Presidential Honors List' },
                      { color: 'bg-green-500 animate-pulse', label: 'Status', value: 'Open to Opportunities', green: true },
                    ].map(item => (
                      <div key={item.label} className="flex items-center gap-4 group/item transition-all duration-300 hover:translate-x-2">
                        <div className={`w-3 h-3 rounded-full ${item.color} group-hover/item:scale-125 transition-transform`} />
                        <div>
                          <span className="text-sm text-slate-500 block">{item.label}</span>
                          <span className={`font-medium ${item.green ? 'text-green-400' : 'text-slate-200'}`}>{item.value}</span>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-slate-700">
                      <a href="/resume.pdf"
                        className="group/btn block w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-center font-medium transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 relative overflow-hidden">
                        <span className="relative z-10">Download Resume</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.skills ? 1 : 0, transform: isVisible.skills ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">02.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={skillGroup.category} className="group relative transition-all duration-700 hover:scale-105"
                style={{ opacity: isVisible.skills ? 1 : 0, transform: isVisible.skills ? 'translateY(0)' : 'translateY(50px)', transitionDelay: `${idx * 150}ms` }}>
                <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all duration-500 h-full">
                  <div className="text-5xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">{skillGroup.icon}</div>
                  <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>{skillGroup.category}</h3>
                  <ul className="space-y-3">
                    {skillGroup.items.map((skill, skillIdx) => (
                      <li key={skill} className="flex items-center gap-3 group/item transition-all duration-300 hover:translate-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color} group-hover/item:scale-150 transition-transform`} />
                        <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.projects ? 1 : 0, transform: isVisible.projects ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">03.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={project.title} className="group relative transition-all duration-700 hover:scale-105"
                style={{ opacity: isVisible.projects ? 1 : 0, transform: isVisible.projects ? 'translateY(0)' : 'translateY(50px)', transitionDelay: `${idx * 150}ms` }}>
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500`} />
                <div className="relative bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden group-hover:border-slate-700 transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-medium`}>{project.period}</div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-1 leading-relaxed text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs bg-slate-800 text-cyan-400 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.demo} className="flex-1 py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-center text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden group/btn">
                        <ExternalLink className="w-4 h-4 relative z-10" /><span className="relative z-10">Demo</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                      <a href={project.code} className="flex-1 py-3 px-4 border-2 border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 rounded-xl text-center text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden group/btn">
                        <Github className="w-4 h-4 relative z-10" /><span className="relative z-10">Code</span>
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.experience ? 1 : 0, transform: isVisible.experience ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">04.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Work Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div key={exp.role + exp.company} className="group relative transition-all duration-700 hover:scale-[1.02]"
                style={{ opacity: isVisible.experience ? 1 : 0, transform: isVisible.experience ? 'translateX(0)' : 'translateX(-50px)', transitionDelay: `${idx * 200}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">{exp.role}</h3>
                      <p className="text-xl text-slate-300 font-medium mb-1">{exp.company}</p>
                      <p className="text-slate-500 text-sm flex items-center gap-2"><MapPin className="w-4 h-4" />{exp.location}</p>
                    </div>
                    <span className="text-slate-400 mt-2 md:mt-0 font-mono text-sm">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-6">{exp.description}</p>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span className="text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-32 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.leadership ? 1 : 0, transform: isVisible.leadership ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">05.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Leadership & Competitions</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((item, idx) => (
              <div key={item.title} className="group relative transition-all duration-700 hover:scale-105"
                style={{ opacity: isVisible.leadership ? 1 : 0, transform: isVisible.leadership ? 'translateY(0)' : 'translateY(50px)', transitionDelay: `${idx * 200}ms` }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-800 group-hover:border-slate-700 transition-all duration-500 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                      <item.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                      <p className="text-lg text-slate-300 font-medium mb-1">{item.organization}</p>
                      <p className="text-slate-500 text-sm flex items-center gap-2"><MapPin className="w-3 h-3" />{item.location} • {item.period}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {item.achievements.map((a, i) => (
                      <div key={i} className="flex items-start gap-3 text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                        <span className="text-cyan-400 mt-1">▹</span>
                        <span className="text-sm">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-16 transition-all duration-700" style={{ opacity: isVisible.contact ? 1 : 0, transform: isVisible.contact ? 'translateY(0)' : 'translateY(30px)' }}>
            <span className="text-3xl font-mono text-cyan-400 font-bold">06.</span>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Get In Touch</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <div className="relative group transition-all duration-700" style={{ opacity: isVisible.contact ? 1 : 0, transform: isVisible.contact ? 'translateY(0)' : 'translateY(50px)', transitionDelay: '200ms' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-50 transition-all duration-500" />
            <div className="relative bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-800 group-hover:border-slate-700 transition-all duration-500">
              <p className="text-xl text-slate-300 mb-10 text-center leading-relaxed">
                I'm actively looking for new opportunities. Whether you have a project in mind or just want to connect — reach out!
              </p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Name</label>
                    <input type="text" className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-all text-slate-100 placeholder-slate-500 hover:border-slate-600" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-slate-300">Email</label>
                    <input type="email" className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-all text-slate-100 placeholder-slate-500 hover:border-slate-600" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-3 text-slate-300">Message</label>
                  <textarea rows={6} className="w-full px-5 py-4 bg-slate-800 border-2 border-slate-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-all resize-none text-slate-100 placeholder-slate-500 hover:border-slate-600" placeholder="Let's build something amazing together..." />
                </div>
                <button type="submit" className="group/btn w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 relative overflow-hidden text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-2">Send Message <Mail className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
              <div className="flex justify-center gap-6 mt-12 pt-10 border-t border-slate-800">
                {[
                  { icon: Github, href: 'https://github.com/RefathChowdhury', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/cRefath', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:cRefath13@gmail.com', label: 'Email' }
                ].map((social, idx) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                    className="group/social p-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-slate-700 hover:border-cyan-500/50 relative overflow-hidden"
                    style={{ transitionDelay: `${idx * 100}ms` }}>
                    <social.icon className="w-6 h-6 text-slate-400 hover:text-cyan-400 relative z-10 transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-slate-800 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Refath Chowdhury</div>
          <p className="text-slate-400 mb-2">Built with React, Tailwind CSS, and passion for great UX</p>
          <p className="text-slate-500 text-sm mb-4">Computer Science @ NYIT • 3.7 GPA • Presidential Honors List</p>
          <p className="text-slate-600 text-sm">© 2026 Refath Chowdhury. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes scroll {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(10px); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-scroll { animation: scroll 2s infinite; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 12px; }
        ::-webkit-scrollbar-track { background: #0f172a; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #06b6d4, #3b82f6); border-radius: 6px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(to bottom, #22d3ee, #60a5fa); }
      `}</style>
    </div>
  );
}