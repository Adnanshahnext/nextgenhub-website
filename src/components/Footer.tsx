import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 border-t border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link to="/" className="block mb-6">
              <img src="/logo.png" alt="Next Gen Hub" className="h-40" />
            </Link>
            <p className="text-slate-400 mb-6">
              We build cutting-edge websites, powerful applications, and innovative business solutions that help companies thrive in the digital age.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/next.generation.hub/?__pwa=1" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:next.gen.hub9@gmail.com" className="text-slate-400 hover:text-white transition-colors duration-300">
                  next.gen.hub9@gmail.com
                </a>
              </li>
              <li className="text-slate-400">
                Paithan Gate
                <br />
                Aurangabad, Maharashtra
                <br />
                India
              </li>
              <li>
                <a href="mob: 91+ 8530938774" className="text-slate-400 hover:text-white transition-colors duration-300">
                  +91 8530938774
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to our newsletter to get updates on our latest projects and tech insights.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg flex items-center justify-center transition-colors duration-300"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
            <p className="text-slate-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-slate-800/50">
          <p className="text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Next Gen Hub. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;