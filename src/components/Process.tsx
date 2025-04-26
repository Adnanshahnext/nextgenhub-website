import React, { useState } from 'react';
import { ClipboardCheck, LightbulbIcon, Code, PresentationIcon, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  number: number;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, number, title, description, isActive, onClick 
}) => {
  return (
    <div 
      className={`
        relative flex gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300
        ${isActive ? 'bg-slate-800 border-l-4 border-purple-500' : 'bg-slate-800/50 hover:bg-slate-800/80'}
      `}
      onClick={onClick}
    >
      <div className={`
        min-w-12 h-12 rounded-full flex items-center justify-center text-white
        ${isActive ? 'bg-purple-600' : 'bg-slate-700'}
        transition-colors duration-300
      `}>
        {icon}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`
            text-sm font-medium px-2 py-0.5 rounded-full
            ${isActive ? 'bg-purple-600/20 text-purple-400' : 'bg-slate-700 text-slate-400'}
          `}>
            Step {number}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      {isActive && (
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 transform rotate-45"></div>
      )}
    </div>
  );
};

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      icon: <ClipboardCheck size={20} />,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to develop a comprehensive strategy."
    },
    {
      icon: <LightbulbIcon size={20} />,
      title: "Concept & Design",
      description: "Our designers create wireframes and visual designs that align with your brand identity and provide optimal user experience."
    },
    {
      icon: <Code size={20} />,
      title: "Development & Testing",
      description: "Our development team builds your solution using the latest technologies, with rigorous testing at every stage."
    },
    {
      icon: <PresentationIcon size={20} />,
      title: "Review & Refinement",
      description: "We present the solution for your feedback and make refinements to ensure it meets all your requirements."
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "Deployment & Training",
      description: "Once approved, we deploy your solution and provide training and documentation to ensure a smooth transition."
    },
    {
      icon: <CheckCircle2 size={20} />,
      title: "Ongoing Support",
      description: "We offer ongoing support and maintenance to keep your solution running smoothly and updated with the latest features."
    }
  ];

  const stepDetails = [
    {
      title: "Discovery & Planning",
      points: [
        "Initial consultation to understand business objectives",
        "Market and competitor analysis",
        "User research and persona development",
        "Project scope definition and timeline planning",
        "Technology stack selection"
      ],
      image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Concept & Design",
      points: [
        "Information architecture and user flow mapping",
        "Wireframing and prototyping",
        "Visual design and branding integration",
        "UI/UX design with accessibility considerations",
        "Design system creation for consistency"
      ],
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Development & Testing",
      points: [
        "Front-end and back-end development",
        "Database design and implementation",
        "API development and integration",
        "Automated and manual testing",
        "Performance optimization"
      ],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Review & Refinement",
      points: [
        "Client review sessions",
        "User acceptance testing",
        "Iteration based on feedback",
        "Content integration and refinement",
        "Final quality assurance"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Deployment & Training",
      points: [
        "Production environment setup",
        "Deployment and launch management",
        "Staff training sessions",
        "Documentation and knowledge transfer",
        "Launch support and monitoring"
      ],
      image: "https://images.pexels.com/photos/7439141/pexels-photo-7439141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Ongoing Support",
      points: [
        "Regular maintenance and updates",
        "Performance monitoring and optimization",
        "Security updates and patches",
        "Feature enhancements",
        "Long-term partnership and growth support"
      ],
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      <div className="absolute top-40 left-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-indigo-900/30 rounded-full text-indigo-300 font-medium text-sm mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
          <p className="text-slate-300 text-lg">
            Our streamlined process ensures efficient delivery of high-quality solutions that meet your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  icon={step.icon}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  isActive={activeStep === index + 1}
                  onClick={() => setActiveStep(index + 1)}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <div className="bg-slate-800 rounded-2xl overflow-hidden h-full">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={stepDetails[activeStep - 1].image} 
                  alt={stepDetails[activeStep - 1].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {stepDetails[activeStep - 1].title}
                </h3>
                <ul className="space-y-3">
                  {stepDetails[activeStep - 1].points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="min-w-5 mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      </div>
                      <p className="text-slate-300">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;