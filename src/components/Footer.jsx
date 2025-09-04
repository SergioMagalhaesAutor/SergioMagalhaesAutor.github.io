import React from 'react';
import { motion } from "motion/react";

const Footer = () => {
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
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      id="contato"
    >
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              SÉRGIO MAGALHÃES
            </motion.h3>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Sérgio Magalhães é escritor e poeta, nascido em Fortaleza-CE, com raízes na cidade de Iracema, onde viveu sua infância e adolescência. Herdou a paixão pela literatura da avó Zilda Magalhães e foi inspirado pelo grande Patativa do Assaré desde menino. Sua escrita reflete sensibilidade, espiritualidade, humanidade e profundo amor pelo sertão e pela cultura nordestina. Autor de obras como O Silêncio Ensolarado, Ecchos do Sertão e O Verde, Além da Razão, busca tocar, transformar e motivar leitores. Dedica-se à meditação, às artes e ao desenvolvimento pessoal, compartilhando sua visão de mundo com maturidade e alma.
            </motion.p>
            <motion.div
              className="social-links"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="https://www.instagram.com/autor.sergiomagalhaes/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{
                  scale: 1.3,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-instagram" style={{ fontSize: '24px', color: '#E4405F' }}></i>
              </motion.a>
              <motion.a
                href="mailto:autor.sergiomagalhaes@gmail.com"
                aria-label="Email"
                whileHover={{
                  scale: 1.3,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-envelope" style={{ fontSize: '24px', color: '#EA4335' }}></i>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="footer-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              LINKS ÚTEIS
            </motion.h4>
            <motion.ul
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { text: 'Início', id: 'inicio' },
                { text: 'Sobre Mim', id: 'sobre' },
                { text: 'Livros', id: 'livros' },
                { text: 'Contato', id: 'contato' }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    whileHover={{
                      x: 5,
                      color: '#ffd700',
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.text}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>

        <motion.div
          className="footer-bottom"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Sérgio Magalhães - Todos os direitos reservados</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
