import React, { useState } from 'react';
import { motion } from "motion/react";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Inscrição:', { name, email });
    setEmail('');
    setName('');
    alert('Obrigado por se inscrever na nossa newsletter!');
  };

  return (
    <motion.section 
      className="newsletter-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="newsletter-content">
          <motion.div 
            className="newsletter-image"
            initial={{ x: -50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/assets/images/news.jpeg" alt="Newsletter" />
          </motion.div>
          <motion.div 
            className="newsletter-text"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              INSCREVA-SE NA MINHA<br />NEWSLETTER
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Cadastre-se para receber novidades e lançamentos. Você receberá 
              conteúdos exclusivos sobre reflexões e filosofia de vida. 
              Além disso, é uma maneira fácil de se manter atualizado.
            </motion.p>
            <motion.form 
              onSubmit={handleSubmit} 
              className="newsletter-form"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <motion.input
                  type="text"
                  placeholder="Nome Completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  whileFocus={{ 
                    borderColor: "#ffd700",
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <motion.input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  whileFocus={{ 
                    borderColor: "#ffd700",
                    boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.button 
                type="submit" 
                className="cta-button"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Inscrever-se
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Newsletter;