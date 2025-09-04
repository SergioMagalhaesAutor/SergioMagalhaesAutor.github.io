import React from 'react';
import { motion } from "motion/react";
import Header from './components/Header';
import Hero from './components/Hero';
import BooksSection from './components/BooksSection';
import AboutSection from './components/AboutSection';
import PoetrySection from './components/PoetrySection';
import BooksAvailable from './components/BooksAvailable';
import Footer from './components/Footer';
import './styles/fonts.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BooksSection />
      <AboutSection />
      <PoetrySection />
      <motion.div 
        className="quote-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="container">
          <motion.blockquote
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            "A vida se revela no silêncio do sertão e na profundidade do meu olhar para o mundo."
          </motion.blockquote>
          <motion.cite
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            — Sérgio Magalhães
          </motion.cite>
        </div>
      </motion.div>
      <BooksAvailable />
      <Footer />
    </div>
  );
}

export default App
