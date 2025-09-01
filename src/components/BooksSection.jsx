import React from 'react';
import { motion } from "motion/react";

const BooksSection = () => {
  const books = [
    {
      id: 1,
      title: "O Silêncio Ensolarado",
      image: "/assets/images/ensolarado.jpg",
      description: "O silêncio ensolarado é o sentir do ser, divagando numa natural simplicidade, mesclando reflexões e a arte das palavras que gritam à emoção.",
      url: "https://www.amazon.com.br/dp/B0BJ1H2ZZS"
    },
    {
      id: 2,
      title: "Empatia da Reflexão",
      image: "/assets/images/empatia.jpg",
      description: "Pensamentos e Poesias que incorporam toda a sensibilidade com o fim de produzir frutos combinados de fé, sabedoria, crítica, amor e felicidade.",
      url: "https://www.amazon.com.br/dp/B08DCFLYHF"
    },
    {
      id: 3,
      title: "O Enigma De Cereus",
      image: "/assets/images/enigma.jpg",
      description: "Uma coletânea de poesias dentro da visão de um sertão revisitado, com um sentir crítico social que reforça a persistência.",
      url: "https://www.amazon.com.br/dp/B08LTVQPV4"
    },
    {
      id: 4,
      title: "Verde: Além da Razão",
      image: "/assets/images/verde.jpg",
      description: "Este livro respeita a liberdade de ser e parte do princípio que a vida ensina a não sermos subjugados pelo equívoco do fracasso.",
      url: "https://www.amazon.com.br/dp/B08CS72PKG"
    },
    {
      id: 5,
      title: "Echos do Sertão",
      image: "/assets/images/echos.jpg",
      description: "Poesia crítica que faz ecoar a autocrítica, olhando a inerente força sertaneja e sua riqueza de diversidade cultural.",
      url: "https://www.amazon.com.br/dp/B09J39HVXR"
    },
    {
      id: 6,
      title: "O Sentir dos Dias",
      image: "/assets/images/silencio.jpg",
      description: "O quotidiano complexo, cheio de nuances. A cada dia um novo tudo de estímulos e sensações, com sua magia e ensinamentos.",
      url: "https://www.amazon.com.br/dp/B09NL9RV8Y"
    }
  ];

  return (
    <motion.section 
      className="books-section" 
      id="livros"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <motion.div 
          className="books-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            DESCUBRA TODOS OS MEUS LIVROS<br />QUE VOCÊ ESTAVA PROCURANDO
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore reflexões, filosofia & aprendizado através clássicos atemporais
          </motion.p>
          <motion.button 
            className="cta-button"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.amazon.com.br/stores/author/B08CQJKGZ1/allbooks?ingress=0&visitId=68af29b8-33a2-414d-b10a-1a33cbbcd018&ref_=ap_rdr', '_blank')}
          >
            Quero Conhecer
          </motion.button>
        </motion.div>
        <div className="books-grid">
          {books.map((book, index) => (
            <motion.div 
              key={book.id} 
              className="book-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => window.open(book.url, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <motion.div 
                className="book-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={book.image} alt={book.title} />
              </motion.div>
              <motion.div 
                className="book-info"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <h3>{book.title}</h3>
                <p>{book.description.length > 80 ? book.description.substring(0, 80) + '...' : book.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BooksSection;