import React from 'react';
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <motion.section
      className="about-section"
      id="sobre"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-text"
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
              Sobre Mim
            </motion.h3>
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              SÉRGIO MAGALHÃES: <br />HISTÓRIAS E LEGADO
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Sérgio Magalhães é escritor, poeta,  nasceu em Fortaleza-CE, mas suas raízes familiares são do interior, da cidade de Iracema-Ce, região jaguaribana, onde viveu a infância e adolescência, retornando à Fortaleza com 18 anos, e formando-se em Direito. É herdeiro da cultura literária de sua avó Zilda Magalhães e amigo das palavras desde menino. Um fato interessante é que o pai do Sérgio morou em Assaré, tinha um pequeno bar e clube chamado Toca da Raposa, o Patativa frequentava o lugar, ocasiões em que a pedido, fez versos para o menino que se tornaria poeta e sua mãe. Anos mais tarde soube que era o grande Patativa do Assaré.
              Sérgio desde cedo aprendeu os valores que moldam a escrita: sensibilidade, simplicidade, espiritualidade, escuta e humanidade. Tem uma forte influência regional, como ele mesmo diz: "sou nordestino, cearense, amo tudo que é do sertão."
            </motion.p>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              É um estudioso cultural, cultiva há mais de três décadas a paixão por meditação, gosta do silêncio, de observar, e tem grande amor às artes, à literatura, à música e à natureza. Com uma escrita que toca, transforma, e motiva, saiu do anonimato para compartilhar sua visão do mundo com maturidade e alma. É autor de O Silêncio Ensolarado, O Sentir dos Dias, Ecchos do Sertão, Enigma de Cereus, Empatia da Reflexão e um romance de superação que conta um pouco da sua história, o Verde, Além da Razão. Sérgio trabalha a mente para vencer a si mesmo, amar-se mais e ao próximo e, contribuir para um mundo melhor. E está sempre escrevendo à vida...
            </motion.p>
            <motion.button
              className="cta-button"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 215, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.amazon.com.br/stores/author/B08CQJKGZ1/about?ingress=0&visitId=ef6f2009-5044-4de6-9077-70e9692e4dbb', '_blank')}
            >
              Saiba Mais
            </motion.button>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img src="/assets/images/fotopaps.jpeg" alt="Sérgio Magalhães" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
