import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, author, position, company, rating, image 
}) => {
  return (
    <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700/50 h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            size={18} 
            className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"} 
          />
        ))}
      </div>
      <p className="text-slate-300 italic mb-6 flex-grow">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img 
          src={image} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-slate-400">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Clients = () => {
  const testimonials = [
    {
      quote: "Next Gen Hub transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Their team delivered our mobile app ahead of schedule and exceeded our expectations in terms of design and functionality.",
      author: "Michael Chen",
      position: "CTO",
      company: "InnovateLabs",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The business intelligence solution they developed has given us invaluable insights into our operations and helped us optimize our processes.",
      author: "Emily Rodriguez",
      position: "Operations Manager",
      company: "Global Logistics",
      rating: 4,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const clients = [
    {
      name: "TechCorp",
      logo: "https://images.pexels.com/photos/12873798/pexels-photo-12873798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "InnovateLabs",
      logo: "https://images.pexels.com/photos/2559747/pexels-photo-2559747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "FutureSystems",
      logo: "https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "GlobalTech",
      logo: "https://images.pexels.com/photos/5806549/pexels-photo-5806549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "DigitalEdge",
      logo: "https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "NexusTech",
      logo: "https://images.pexels.com/photos/5473950/pexels-photo-5473950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="clients" className="py-24 bg-slate-900 relative">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-teal-900/30 rounded-full text-teal-300 font-medium text-sm mb-4">
            Our Clients
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted By Industry Leaders</h2>
          <p className="text-slate-300 text-lg">
            We've helped businesses of all sizes transform their digital presence and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-center mb-10">Companies We've Worked With</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="flex justify-center">
                <div className="w-24 h-24 bg-slate-800/50 rounded-lg flex items-center justify-center p-4 filter grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;