import React, { useState } from "react";
import { motion } from "motion/react";

const POEMS = [
  {
    id: 1,
    title: "Somos o Hoje",
    text: "Somos o hoje.\nIluminados pela intenção\nDe ser mais tempo.\nE prazer, e amor, e... o que quiser.\nCuidando para não apagar\nUm outro amanhecer.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte1.jpg"
  },
  {
    id: 2,
    title: "Descobertas no Olhar",
    text: "Há tantas descobertas no olhar natural de quem quer se encontrar.\nUm silêncio de aventura, a paz de realizar, a risada mais pura, o lago, a folha, a escolha... a pintura.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte2.jpg"
  },
  {
    id: 3,
    title: "Era Só um Sopro - Parte 1",
    text: "Era só um sopro\nMas estava lá\nVagando pela estrada\nQuerendo se encontrar\nEra noite na emoção\nCandelabros de fogo\nMuita escuridão\nE um grito de socorro",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte3.jpg"
  },
  {
    id: 13,
    title: "Era Só um Sopro - Parte 2",
    text: "Não posso mais\nRio de mim\nPersigo a paz\nSeu nome\nUm sim\nEstrela brilhando distante.\nUm pensamento absurdo.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte3.jpg"
  },
  {
    id: 4,
    title: "Buscando Silêncio",
    text: "Talvez só buscasse silêncio\nUma voz a contar emoções\nAbstratas moradas\nMas lá estava a vida\nA gritar paisagem d'alma.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte4.jpg"
  },
  {
    id: 5,
    title: "Espírito a Instigar",
    text: "Capaz de ser, espírito a instigar, como triunfo do rio, e rio, sem medo, saboreando vida ao andar, isso perfaz a imensidão do possível ir aonde se quer chegar.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte5.jpg"
  },
  {
    id: 6,
    title: "Nostálgico Sertão - Parte 1",
    text: "Ó nostálgico, legado sertão paixão, Ficus, dileto companheiro, cupido e confidente, simples e forte, com raízes profundas e aéreas, no todo buscando e ensinando-nos a sobreviver.\nPodia-se dizer ornamental, caule cinza, com elípticas folhas, verdes ou variegada de branco ou amarelo.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte6.png"
  },
  {
    id: 14,
    title: "Nostálgico Sertão - Parte 2",
    text: "Belíssimo, flexível e diante do espírito compartilhado de ideias, em dias de sol ou de nimbostratos a fumarar e gotejar, oferta sua sombra e abriga dialetos, fatos, lindo olhar de afago, carícia no âmago, sábia voz e perfume cítrico e campestre matriarcal, festa de pardais, rolinhas e outros galhos. Habitual beleza e sábias lições.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte6.png"
  },
  {
    id: 7,
    title: "Nunca o Degredo",
    text: "Nunca o degredo, insólito, incauto, mas o olhar fagueiro e a chance do enredo favorável ao futuro, como as vagas indo e vindo, cante e tente o novo, força de corpo, mente e de súbito o/um d'ouro presente.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte7.jpg"
  },
  {
    id: 8,
    title: "Matemática Futurista",
    text: "Que refute o reverso, tesouro guiado, matemática futurista, partícula de Deus a equacionar o som da presença solidária.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte8.png"
  },
  {
    id: 9,
    title: "O Livro se Abre",
    text: "O livro se abre, alguém tece versos, inspira caminhos, e assim perde o medo, expulsa a fome e ileso aquece a magia do êxtase.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte9.JPG"
  },
  {
    id: 10,
    title: "Encaixes e Destinos",
    text: "Ah, estes encaixes, destinos sendo compostos agarrados n'alma, cantiga fátua, veleiro na contramão das lembranças, fora da pele, compreende saudade, descoberta. Aos poucos a teia liga-se mansa a água, que mata a sede dos ecos, e então o olhar sobre o melhor do outro floresce em nós.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte10.jpg"
  },
  {
    id: 11,
    title: "A Vida Flui",
    text: "E a vida flui, partículas quânticas evoluem de certezas incertas, do inconcebível para o tangível. É o mistério invisível da existência, do nada ao denso, do sopro ao nós, da semente à beleza...",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte11.jpg"
  },
  {
    id: 12,
    title: "Vontade Inaudita",
    text: "Vontade inaudita, o eu e outras viagens, sibilino, possível, colheita de exuberante imaginação a deitar sentimentos sobre o pó da senda e do grito inerente a poderosa mente que cria dias ao seu bel prazer.",
    titleColor: "#FFFFFF",
    textColor: "#8B4513",
    bgImage: "/ref/arte12.png"
  }
];

const CARD_OFFSET = 8;
const SCALE_FACTOR = 0.02;

const PoetrySection = () => {
  const [cards, setCards] = useState(POEMS);
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToEnd = (from) => {
    const newCards = [...cards];
    const [movedCard] = newCards.splice(from, 1);
    newCards.push(movedCard);
    setCards(newCards);
    setCurrentIndex((prev) => (prev + 1) % POEMS.length);
  };

  const currentPoem = cards[0];

  return (
    <section 
      id="poesias" 
      className="poetry-section"
    >
      <motion.div 
        key={currentPoem.id}
        className="poetry-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${currentPoem.bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="container poetry-container">
        <motion.div 
          className="poetry-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="poetry-title-section"
            key={currentPoem.id}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h1 
              className="poetry-main-title"
              style={{ color: currentPoem.titleColor }}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {currentPoem.title}
            </motion.h1>
            <motion.div 
              className="poetry-subtitle"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>Poesias de Sérgio Magalhães</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="poetry-cards-section"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-stack-container">
              <div className="card-wrapper">
                {cards.map((poem, index) => {
                  const canDrag = index === 0;
                  
                  return (
                    <motion.div
                      key={poem.id}
                      className="poetry-card"
                      style={{
                        cursor: canDrag ? "grab" : "auto",
                        zIndex: POEMS.length - index
                      }}
                      animate={{
                        y: index * -CARD_OFFSET,
                        scale: 1 - index * SCALE_FACTOR,
                        zIndex: POEMS.length - index
                      }}
                      drag={canDrag ? "y" : false}
                      dragConstraints={{
                        top: 0,
                        bottom: 0
                      }}
                      onDragEnd={() => moveToEnd(index)}
                      whileDrag={{
                        cursor: "grabbing"
                      }}
                    >
                      <div className="card-content">
                        <div className="card-header">
                          <h3 style={{ color: poem.textColor }}>{poem.title}</h3>
                        </div>
                        <div className="card-body">
                          <p style={{ color: poem.textColor }}>{poem.text}</p>
                        </div>
                        <div className="card-footer">
                          <span>— Sérgio Magalhães</span>
                        </div>
                        <div className="card-texture"></div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div 
                className="swipe-instruction"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p>↑ Deslize para cima para o próximo poema ↑</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoetrySection;