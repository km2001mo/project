import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface BlogPostProps {
  post: BlogPostType;
  preview?: boolean;
}

export function BlogPost({ post, preview = true }: BlogPostProps) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/blog/${post.id}`);
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <span className="absolute top-4 right-4 bg-[#FFD700] text-[#1B263B] px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <h2 className="text-xl font-bold text-[#1B263B] mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {preview ? post.excerpt : post.content}
        </p>
        {preview && (
          <button 
            onClick={handleReadMore}
            className="inline-flex items-center text-[#1B263B] font-semibold hover:text-[#FFD700] transition-colors"
          >
            Read More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </article>
  );
}