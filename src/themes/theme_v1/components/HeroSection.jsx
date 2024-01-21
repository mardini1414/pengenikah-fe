import React from 'react';
import bgHero from '../assets/img/bg-hero.webp';

function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="bg-black/75 min-h-screen grid place-content-center">
        <div className="text-gold font-pinyon text-center">
          <h2 className="text-5xl md:text-6xl tracking-wider">Novita putri</h2>
          <span className="text-2xl md:text-3xl tracking-wider my-2 block">
            dan
          </span>
          <h2 className="text-5xl md:text-6xl tracking-wider">Munawir</h2>
        </div>
        <div className="text-white text-center mt-6">
          <span className="block text-base">Kpd. Bpk/Ibu/Saudara/i</span>
          <div className="bg-white rounded mt-4 py-3">
            <span className="block text-black text-lg font-semibold">
              M. Zainudin
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
