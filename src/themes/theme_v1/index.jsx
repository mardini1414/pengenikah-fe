import React from 'react';
import HeroSection from './components/HeroSection';
import ProfileSection from './components/ProfileSection';

function ThemeV1({ data }) {
  return (
    <div className="bg-blackV1">
      <HeroSection />
      <ProfileSection />
    </div>
  );
}

export default ThemeV1;
