import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LocalCurrency } from './pages/LocalCurrency';
import { Crypto } from './pages/Crypto';
import { PreciousMetals } from './pages/PreciousMetals';
import { Blog } from './pages/Blog';
import { BlogPostPage } from './pages/BlogPost';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LocalCurrency />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/precious-metals" element={<PreciousMetals />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}