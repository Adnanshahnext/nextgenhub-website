import React from 'react';
import { 
  Globe, 
  Smartphone, 
  BarChart3, 
  ShoppingCart, 
  Server, 
  Layers, 
  FileSearch, 
  Code 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, accentColor }) => {
  return (
    <div className="group bg-slate-800/50 hover:bg-slate-800 rounded-2xl p-6 transition-all duration-300 border border-slate-700/50 hover:border-slate-700 h-full">
      <div className={`w-14 h-14 ${accentColor} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-slate-300 leading-relaxed">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe size={28} className="text-white" />,
      title: "Website Development",
      description: "Custom, responsive websites built with the latest technologies to provide exceptional user experiences.",
      accentColor: "bg-purple-600/80"
    },
    {
      icon: <Smartphone size={28} className="text-white" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android that engage users and deliver results.",
      accentColor: "bg-blue-600/80"
    },
    {
      icon: <ShoppingCart size={28} className="text-white" />,
      title: "E-Commerce Solutions",
      description: "Scalable online stores with secure payment processing, inventory management, and customer analytics.",
      accentColor: "bg-teal-600/80"
    },
    {
      icon: <BarChart3 size={28} className="text-white" />,
      title: "Business Intelligence",
      description: "Data visualization and analytics solutions that help you make informed business decisions.",
      accentColor: "bg-orange-600/80"
    },
    {
      icon: <Server size={28} className="text-white" />,
      title: "Custom Software",
      description: "Bespoke software solutions tailored to your unique business needs and workflows.",
      accentColor: "bg-indigo-600/80"
    },
    {
      icon: <Code size={28} className="text-white" />,
      title: "API Development",
      description: "Robust and secure APIs that integrate with your existing systems and third-party services.",
      accentColor: "bg-pink-600/80"
    },
    {
      icon: <FileSearch size={28} className="text-white" />,
      title: "SEO Optimization",
      description: "Search engine optimization strategies that improve your online visibility and drive organic traffic.",
      accentColor: "bg-amber-600/80"
    },
    {
      icon: <Layers size={28} className="text-white" />,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
      accentColor: "bg-cyan-600/80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="absolute inset-0 bg-purple-900/5 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-purple-900/30 rounded-full text-purple-300 font-medium text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Digital Solutions</h2>
          <p className="text-slate-300 text-lg">
            We deliver cutting-edge technology solutions tailored to your business needs,
            helping you stay ahead in today's competitive digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              accentColor={service.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;