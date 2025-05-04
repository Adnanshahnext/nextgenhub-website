import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

type BlogPost = {
  title: string;
  excerpt: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  } | null;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const client = createClient({
      space: 'iequet4qr837', // Replace with your space ID
      accessToken: 'tag9oPeEPo31cZEVgIn8e-_zNh9QM5-OinMB2Q4hwUE', // Replace with your access token
    });

    client.getEntries({ content_type: 'blogPost' })
      .then((response) => {
        const fetchedPosts = response.items.map((item: any) => ({
          title: item.fields.title,
          excerpt: item.fields.excerpt,
          image: item.fields.image || null, // Handle null for image
          date: item.fields.date,
          readTime: item.fields.readTime,
          category: item.fields.category,
          slug: item.fields.slug,
        }));

        setPosts(fetchedPosts);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & News</h1>
          <p className="text-xl text-slate-300">
            Stay updated with the latest trends, insights, and news from the world of technology and digital innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="aspect-video">
                {/* Render image if available */}
                {post.image && post.image.fields.file.url && (
                  <img src={post.image.fields.file.url} alt={post.title} className="w-full h-full object-cover" />
                )}
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors duration-300">
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
      </div>
    </div>
  );
};

export default Blog;
