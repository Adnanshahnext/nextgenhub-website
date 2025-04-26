import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'Web Development'
    },
    {
      title: 'Building Scalable Mobile Applications: Best Practices',
      excerpt: 'Learn the essential practices for developing mobile applications that can scale effectively.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Mobile Development'
    },
    {
      title: 'Digital Transformation: A Guide for Modern Businesses',
      excerpt: 'Understanding the key components of successful digital transformation in today\'s business landscape.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
      date: '2024-03-05',
      readTime: '6 min read',
      category: 'Business'
    },
    {
      title: 'The Impact of AI on Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the software development process.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      date: '2024-03-01',
      readTime: '7 min read',
      category: 'Technology'
    },
    {
      title: 'UX Design Principles for Better User Engagement',
      excerpt: 'Essential UX design principles that can significantly improve user engagement and satisfaction.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      date: '2024-02-28',
      readTime: '4 min read',
      category: 'Design'
    },
    {
      title: 'Cybersecurity Best Practices for Business Applications',
      excerpt: 'Key security measures to protect your business applications from modern cyber threats.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      date: '2024-02-25',
      readTime: '6 min read',
      category: 'Security'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & News</h1>
          <p className="text-xl text-slate-300">
            Stay updated with the latest trends, insights, and news from the world of technology and digital innovation.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 bg-slate-800/50 rounded-2xl overflow-hidden">
            <div className="aspect-video md:aspect-auto">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
                alt="Featured post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="inline-block px-4 py-1.5 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium mb-4">
                Featured
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                The Evolution of Technology: What's Next for Digital Innovation?
              </h2>
              <p className="text-slate-300 mb-6">
                A comprehensive look at how technology continues to shape our future and what innovations we can expect in the coming years.
              </p>
              <div className="flex items-center gap-6 text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>2024-03-20</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>10 min read</span>
                </div>
              </div>
              <Link 
                to="/blog/evolution-of-technology"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <Link to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-slate-800/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-slate-300 mb-6">
            Get the latest insights and news delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Blog;