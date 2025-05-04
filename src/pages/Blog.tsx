import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // For SEO enhancements

// 1. Type for Blog Post
type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
};

// 2. Main Blog Component
const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [page, setPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  // 3. Contentful Setup
  useEffect(() => {
    const client = createClient({
      space: 'iequet4qr837', // Replace this with your space ID
      accessToken: 'tag9oPeEPo31cZEVgIn8e-_zNh9QM5-OinMB2Q4hwUE', // Replace this with your access token
    });

    client
      .getEntries({
        content_type: 'blogPost', // Ensure 'blogPost' matches your Contentful model ID
        skip: (page - 1) * postsPerPage, // Skip posts based on page number
        limit: postsPerPage, // Fetch posts for the current page
      })
      .then((response) => {
        const fetchedPosts = response.items.map((item: any) => ({
          title: item.fields.title || 'No Title', // Fallback if title is missing
          excerpt: item.fields.excerpt || 'No Excerpt', // Fallback if excerpt is missing
          image: item.fields.image?.fields?.file?.url || 'default-image-url', // Ensure that the image URL exists
          date: item.fields.date || 'No Date', // Fallback if date is missing
          readTime: item.fields.readTime || '0 min', // Fallback if read time is missing
          category: item.fields.category || 'Uncategorized', // Fallback if category is missing
          slug: item.fields.slug || '', // Fallback if slug is missing
        }));

        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setError('There was an error fetching the blog posts.');
        setLoading(false);
      });
  }, [page]);

  // SEO enhancements using react-helmet
  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="w-16 h-16 border-4 border-blue-500 border-solid rounded-full border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Blog - Latest Insights & News</title>
        <meta name="description" content="Stay updated with the latest trends, insights, and news from the world of technology and digital innovation." />
      </Helmet>

      <div className="pt-32 pb-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest Insights & News</h1>
            <p className="text-xl text-slate-300">
              Stay updated with the latest trends, insights, and news from the world of technology and digital innovation.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Pagination */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="px-6 py-2 bg-blue-600 text-white"
              disabled={page === 1} // Disable "Previous" on the first page
            >
              Previous
            </button>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="px-6 py-2 bg-blue-600 text-white"
            >
              Next
            </button>
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
    </>
  );
};

export default Blog;
