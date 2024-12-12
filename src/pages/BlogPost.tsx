import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPost as BlogPostComponent } from '../components/blog/BlogPost';
import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-[#1B263B] mb-4">Post Not Found</h2>
        <button
          onClick={() => navigate('/blog')}
          className="text-[#1B263B] hover:text-[#FFD700] transition-colors"
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/blog')}
        className="text-[#1B263B] hover:text-[#FFD700] transition-colors mb-6"
      >
        ← Back to Blog
      </button>
      <BlogPostComponent post={post} preview={false} />
    </div>
  );
}