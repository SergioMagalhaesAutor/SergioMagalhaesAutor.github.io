import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.header 
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>SÉRGIO MAGALHÃES</h1>
          </motion.div>
          <motion.nav 
            className="nav"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'inicio')}>INÍCIO</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#sobre" onClick={(e) => handleSmoothScroll(e, 'sobre')}>SOBRE MIM</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#livros" onClick={(e) => handleSmoothScroll(e, 'livros')}>LIVROS</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#poesias" onClick={(e) => handleSmoothScroll(e, 'poesias')}>POESIAS</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#contato" onClick={(e) => handleSmoothScroll(e, 'contato')}>CONTATO</a>
              </motion.li>
            </ul>
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;