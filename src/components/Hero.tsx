import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Smartphone, LineChart } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const text = headingRef.current.innerText;
    headingRef.current.innerHTML = '';

    [...text].forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
      span.style.transition = `opacity 0.5s ease ${index * 0.03}s, transform 0.5s ease ${index * 0.03}s`;
      headingRef.current?.appendChild(span);

      setTimeout(() => {
        span.style.opacity = '1';
        span.style.transform = 'translateY(0)';
      }, 100);
    });
  }, []);

  return (
    <section id="home" className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block px-4 py-1.5 bg-blue-900/30 rounded-full text-blue-300 font-medium text-sm mb-2">
              Think Next, Go Digital
            </div>
            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Transforming Ideas Into Digital Excellence
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              We build cutting-edge websites, powerful applications, and innovative business
              solutions that help companies thrive in the digital age.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="#portfolio"
                className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right content - responsive grid */}
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl overflow-hidden p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-slate-800 rounded-xl p-5 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Code className="text-blue-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-center">Web Development</h3>
                </div>

                {/* Card 2 */}
                <div className="bg-slate-800 rounded-xl p-5 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Smartphone className="text-orange-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-center">App Development</h3>
                </div>

                {/* Card 3 */}
                <div className="bg-slate-800 rounded-xl p-5 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <LineChart className="text-teal-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-center">Business Solutions</h3>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-br from-blue-600/80 to-orange-600/80 rounded-xl p-5 hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center">
                  <h3 className="font-semibold">Ready to transform your business?</h3>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
