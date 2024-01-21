import React from 'react';
import bgHero from '../assets/img/bg-hero.webp';
import ornamen1 from '../assets/svg/ornamen1.svg';
import ornamen2 from '../assets/svg/ornamen2.svg';
import ornamen3 from '../assets/svg/ornamen3.svg';
import ornamen4 from '../assets/svg/ornamen4.svg';
import ornamen5 from '../assets/svg/ornamen5.svg';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Zoom } from 'react-reveal';

function HeroSection() {
  return (
    <section
      className="min-h-dvh bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <img
        className="w-[30%] md:w-[10%] absolute top-4 right-1/2 translate-x-1/2 rotate-180"
        src={ornamen1}
        alt="ornamen 1"
      />
      <img
        className="w-[30%] md:w-[10%] absolute bottom-4 right-1/2 translate-x-1/2"
        src={ornamen1}
        alt="ornamen 1"
      />
      <img
        className="absolute top-0 right-0 w-[15%] md:w-[8%]"
        src={ornamen2}
        alt="ornamen2"
      />
      <img
        className="absolute top-0 left-0 w-[15%] md:w-[8%]"
        src={ornamen3}
        alt="ornamen3"
      />
      <img
        className="absolute bottom-0 left-0 w-[15%] md:w-[8%]"
        src={ornamen4}
        alt="ornamen4"
      />
      <img
        className="absolute bottom-0 right-0 w-[15%] md:w-[8%]"
        src={ornamen5}
        alt="ornamen5"
      />
      <div className="bg-black/75 min-h-screen grid place-content-center">
        <Zoom>
          <span className="block text-center text-white text-base mb-6">
            UNDANGAN
          </span>
          <div className="text-gold font-pinyon md:flex md:items-center text-center">
            <h2 className="text-5xl md:text-6xl tracking-wider">
              Novita putri
            </h2>
            <span className="text-2xl md:text-3xl tracking-wider my-1 md:mx-3 block">
              dan
            </span>
            <h2 className="text-5xl md:text-6xl tracking-wider">Munawir</h2>
          </div>
          <div className="text-white text-center mt-6">
            <span className="block text-xs">Kpd. Bpk/Ibu/Saudara/i</span>
            <div className="bg-blackV1 border-2 border-gold rounded-lg mx-auto mt-4 py-2 px-6 max-w-max">
              <span className="block text-white text-lg font-semibold">
                M. Zainudin
              </span>
            </div>
            <FontAwesomeIcon
              className="text-white animate-bounce mt-3"
              icon={faAnglesDown}
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
}

export default HeroSection;
