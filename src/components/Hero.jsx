import React from 'react';
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-header"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h2 
              className="hero-title"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              LANÇAMENTO
            </motion.h2>
            <motion.div 
              className="bestseller-badge"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <span>NEW</span>
              <span className="selling">ESTABLISHED</span>
              <span>AUTHOR</span>
            </motion.div>
          </motion.div>
          <div className="hero-main">
            <motion.div 
              className="hero-book-center"
              initial={{ x: -100, opacity: 0, rotateY: -15 }}
              animate={{ x: 0, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <img src="/assets/images/sertao.jpg" alt="Sertão que Habita em Mim" className="hero-book-image" />
            </motion.div>
            <motion.div 
              className="book-description"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.p 
                className="book-quote"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: -3, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                whileHover={{ rotate: -5, scale: 1.05 }}
              >
                Sérgio Magalhães
              </motion.p>
              <motion.p 
                className="book-text"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Uma jornada poética pelas raízes do sertão 
                cearense, explorando a conexão profunda entre 
                o homem e sua terra natal, mesclando memórias, 
                reflexões e a essência da vida sertaneja.
              </motion.p>
              <motion.button 
                className="cta-button"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://www.instagram.com/autor.sergiomagalhaes/', '_blank')}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;