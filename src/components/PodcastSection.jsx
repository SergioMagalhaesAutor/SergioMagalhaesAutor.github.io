import React from 'react';

const PodcastSection = () => {
  return (
    <section className="podcast-section" id="podcast">
      <div className="container">
        <div className="podcast-header">
          <h3>Podcasts</h3>
          <h2>CONVERSAS COM AMOR</h2>
        </div>
        <div className="podcast-content">
          <div className="podcast-main">
            <div className="podcast-image">
              <img src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sérgio Magalhães no Podcast" />
              <div className="play-button">▶</div>
            </div>
            <div className="podcast-info">
              <h4>SÉRGIO MAGALHÃES COM<br />CONVERSAS COM AMOR</h4>
              <p>
                Venha descobrir um outro perspectiva sobre a vida através 
                de nossas conversas sobre reflexões e amor.
              </p>
              <button className="cta-button">Assistir Agora</button>
            </div>
          </div>
          <div className="podcast-episodes">
            <div className="episode">
              <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Episódio 1" />
              <div className="episode-info">
                <h5>REFLEXÕES DO SERTÃO<br />CONVERSAS COM AMOR</h5>
                <p>Conversas sobre um outro perspectiva sobre a vida através de suas experiências.</p>
              </div>
            </div>
            <div className="episode">
              <img src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" alt="Episódio 2" />
              <div className="episode-info">
                <h5>FILOSOFIA E ESPIRITUALIDADE<br />CONVERSAS COM AMOR</h5>
                <p>Explorando os caminhos da espiritualidade e filosofia no dia a dia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;