import React from 'react';
import { ArrowRight, Users, Target, Rocket, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Client Satisfaction', value: '98%' }
  ];

  const values = [
    {
      icon: <Target className="text-blue-400" size={24} />,
      title: 'Innovation First',
      description: 'We stay ahead of technological trends to deliver cutting-edge solutions.'
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to exceed expectations.'
    },
    {
      icon: <Rocket className="text-purple-400" size={24} />,
      title: 'Agile Development',
      description: 'Rapid, iterative development ensures quick delivery and adaptation.'
    },
    {
      icon: <Award className="text-orange-400" size={24} />,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control in every project we deliver.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Ideas Into Digital Excellence</h1>
          <p className="text-xl text-slate-300 mb-8">
            Next Gen Hub is a leading technology solutions provider, dedicated to helping businesses thrive in the digital age through innovative solutions and exceptional service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-slate-300 mb-4">
              Founded in 2014, Next Gen Hub emerged from a vision to bridge the gap between complex technology and business success. What started as a small team of passionate developers has grown into a full-service digital solutions provider.
            </p>
            <p className="text-slate-300 mb-6">
              Today, we're proud to have helped hundreds of businesses across various industries achieve their digital transformation goals. Our commitment to innovation and excellence continues to drive our growth and success.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300"
            >
              Work With Us <ArrowRight size={20} />
            </Link>
          </div>
          <div className="aspect-video bg-slate-800 rounded-lg overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO & Founder',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
              },
              {
                name: 'Michael Chen',
                role: 'CTO',
                image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Head of Design',
                image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-slate-300">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;