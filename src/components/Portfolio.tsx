import React, { useState } from 'react';
import { ArrowRight, ExternalLink, X, Code, Smartphone, LineChart, ShoppingCart, Server, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string;
  description: string;
  client: string;
  clientLogo: string;
  technologies: string[];
  features: string[];
  link?: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors duration-300 z-10"
        >
          <X size={24} />
        </button>

        {/* Video or Image Section */}
        <div className="aspect-video relative">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={project.clientLogo} 
              alt={project.client}
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
              <p className="text-slate-400">{project.client}</p>
            </div>
          </div>
          
          <p className="text-slate-300 mb-8">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Key Features</h4>
              <ul className="space-y-2 text-slate-300">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="mt-1.5">•</div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {project.testimonial && (
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
              <p className="text-slate-300 italic mb-4">"{project.testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-slate-400 text-sm">{project.testimonial.position}</p>
              </div>
            </div>
          )}
          
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
            >
              Visit Project <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const categories = ['All', 'Web Development', 'Mobile Apps', 'Business Solutions', 'E-Commerce'];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "TechFlow Analytics Dashboard",
      category: "Web Development",
      client: "TechCorp Solutions",
      clientLogo: "https://images.pexels.com/photos/12873798/pexels-photo-12873798.jpeg",
      image: "https://cdn.dribbble.com/userupload/17784836/file/original-4149ee40a8b88c08dda2e050889657b6.jpg?format=webp&resize=400x300&vertical=center",
      video: "https://cdn.dribbble.com/userupload/17351661/file/original-15f093aeaaa8db2dba3fc53bf15e0c67.mp4",
      description: "A comprehensive analytics dashboard providing real-time insights and data visualization for enterprise clients.",
      technologies: ["React", "TypeScript", "Node.js", "D3.js", "WebSocket", "MongoDB"],
      features: [
        "Real-time data visualization",
        "Custom report generation",
        "User role management",
        "Advanced filtering and search",
        "Export functionality"
      ],
      testimonial: {
        quote: "The dashboard has transformed how we analyze and act on our data. It's intuitive, powerful, and exactly what we needed.",
        author: "Sarah Chen",
        position: "CTO, TechCorp Solutions"
      }
    },
    {
      id: 2,
      title: "HealthTrack Mobile App",
      category: "Mobile Apps",
      client: "HealthTech Innovations",
      clientLogo: "https://images.pexels.com/photos/2559747/pexels-photo-2559747.jpeg",
      image: "https://cdn.dribbble.com/userupload/17017322/file/original-733ac4e2a0e22818efd4e77d723de475.png?resize=1504x1128&vertical=center",
      video: "https://cdn.dribbble.com/userupload/7996989/file/original-3998638ef9bb72562f3195c28dc57314.mp4",
      description: "A comprehensive health and fitness tracking application with personalized workout plans and nutrition guidance.",
      technologies: ["React Native", "Redux", "Node.js", "MongoDB", "Firebase"],
      features: [
        "Personalized workout plans",
        "Nutrition tracking",
        "Progress analytics",
        "Social features",
        "Integration with health devices"
      ]
    },
    {
      id: 3,
      title: "LuxeMarket E-Commerce Platform",
      category: "E-Commerce",
      client: "LuxeRetail Group",
      clientLogo: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg",
      image: "https://static.wixstatic.com/media/a77aa0_1de27145b1a4428eb11ceae6e31b54ab~mv2.jpg/v1/fill/w_980,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a77aa0_1de27145b1a4428eb11ceae6e31b54ab~mv2.jpg", 
      description: "A premium e-commerce platform with advanced product management and secure payment processing.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
      features: [
        "Advanced product filtering",
        "Secure payments",
        "Inventory management",
        "Customer analytics",
        "Mobile-first design"
      ]
    },
    {
      id: 4,
      title: "Enterprise Resource Planning System",
      category: "Business Solutions",
      client: "Global Logistics Co.",
      clientLogo: "https://images.pexels.com/photos/5806549/pexels-photo-5806549.jpeg",
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/2a8b77205111609.Y3JvcCwyMzAxLDE4MDAsNTEsMA.jpg",
      description: "A comprehensive ERP system streamlining operations and improving efficiency across departments.",
      technologies: ["Angular", "Java Spring", "Oracle", "Docker", "Kubernetes"],
      features: [
        "Resource planning",
        "Inventory tracking",
        "Financial management",
        "HR management",
        "Analytics dashboard"
      ]
    }
  ];
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Development':
        return <Globe size={20} />;
      case 'Mobile Apps':
        return <Smartphone size={20} />;
      case 'Business Solutions':
        return <LineChart size={20} />;
      case 'E-Commerce':
        return <ShoppingCart size={20} />;
      default:
        return <Code size={20} />;
    }
  };
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="py-24 bg-slate-900 relative">
      <div className="absolute inset-0 bg-blue-900/5 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-900/30 rounded-full text-blue-300 font-medium text-sm mb-4">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-slate-300 text-lg">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}
              `}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-800/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={project.clientLogo} 
                    alt={project.client}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-slate-400">{project.client}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;