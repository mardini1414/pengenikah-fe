import React from 'react';
import HeroSection from './components/HeroSection';
import ornamen1 from './assets/svg/ornamen1.svg';
import ornamen2 from './assets/svg/ornamen2.svg';
import ornamen3 from './assets/svg/ornamen3.svg';
import ornamen4 from './assets/svg/ornamen4.svg';
import ornamen5 from './assets/svg/ornamen5.svg';
import ProfileSection from './components/ProfileSection';

function ThemeV1({ data }) {
  return (
    <div className="bg-black relative min-h-dvh">
      <img
        className="w-[30%] md:w-[10%] absolute top-4 right-1/2 translate-x-1/2"
        src={ornamen1}
        alt="ornamen 1"
      />
      <img
        className="w-[30%] md:w-[10%] absolute bottom-4 right-1/2 translate-x-1/2 rotate-180"
        src={ornamen1}
        alt="ornamen 1"
      />
      <img
        className="fixed top-0 right-0 w-[15%] md:w-[8%]"
        src={ornamen2}
        alt="ornamen2"
      />
      <img
        className="fixed top-0 left-0 w-[15%] md:w-[8%]"
        src={ornamen3}
        alt="ornamen3"
      />
      <img
        className="fixed bottom-0 left-0 w-[15%] md:w-[8%]"
        src={ornamen4}
        alt="ornamen4"
      />
      <img
        className="fixed bottom-0 right-0 w-[15%] md:w-[8%]"
        src={ornamen5}
        alt="ornamen5"
      />
      <HeroSection />
      <ProfileSection />
    </div>
  );
}

export default ThemeV1;
