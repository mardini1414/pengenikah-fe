import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function LoadingPage() {
  return (
    <section className="min-h-screen bg-purple-50 grid place-content-center">
      <FontAwesomeIcon
        className="text-6xl text-pink-500 heart"
        icon={faHeart}
      />
    </section>
  );
}

export default LoadingPage;
