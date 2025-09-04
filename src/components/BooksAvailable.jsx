import React from 'react';
import { motion } from "motion/react";

const BooksAvailable = () => {
  return (
    <motion.section 
      className="books-available-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="container">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          LIVROS DISPONÍVEIS EM
        </motion.h2>
        <div className="platforms">
          <motion.div 
            className="platform"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/assets/images/amazon.png" alt="Amazon" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default BooksAvailable;