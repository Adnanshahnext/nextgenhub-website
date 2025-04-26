import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ServicesSection from '../components/Services';
import PortfolioSection from '../components/Portfolio';
import Process from '../components/Process';
import Clients from '../components/Clients';
import ContactSection from '../components/Contact';

const SectionPreview = ({ title, description, link, children }: {
  title: string;
  description: string;
  link: string;
  children: React.ReactNode;
}) => (
  <section className="py-16 border-b border-slate-800">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-slate-300 mb-6">{description}</p>
          <Link 
            to={link}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
        <div className="lg:w-2/3">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  // Latest blog posts preview
  const latestPosts = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2024",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    },
    {
      title: "Building Scalable Applications",
      date: "March 10, 2024",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
    }
  ];

  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <Process />
      <Clients />

      {/* About Preview */}
      <SectionPreview
        title="About Next Gen Hub"
        description="Learn about our journey, values, and the team behind our success in delivering cutting-edge digital solutions."
        link="/about"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-slate-300">
              Founded in 2014, Next Gen Hub has grown from a small team of passionate developers into a full-service digital solutions provider, helping hundreds of businesses achieve their digital transformation goals.
            </p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Innovation First</li>
              <li>• Client-Centric Approach</li>
              <li>• Quality Assured</li>
              <li>• Continuous Growth</li>
            </ul>
          </div>
        </div>
      </SectionPreview>

      {/* Blog Preview */}
      <SectionPreview
        title="Latest Insights"
        description="Stay updated with our latest thoughts on technology, digital transformation, and industry trends."
        link="/blog"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {latestPosts.map((post, index) => (
            <div key={index} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-slate-400">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionPreview>

      <ContactSection />
    </>
  );
};

export default Home;