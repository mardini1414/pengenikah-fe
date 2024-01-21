import React from 'react';
import male from '../../../common/assets/img/male.webp';
import female from '../../../common/assets/img/female.webp';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProfileSection() {
  return (
    <section className="min-h-screen">
      <div className="min-h-dvh grid place-content-center">
        <div className="flex items-center justify-center flex-col md:flex-row mt-6">
          <div className="text-center">
            <img
              className="w-28 md:w-32 rounded-full"
              src={female}
              alt="female"
            />
            <h5 className="text-gold font-pinyon text-2xl tracking-wider mt-3">
              Novita Putri
            </h5>
            <div className="flex justify-center items-center">
              <div className="mr-2 mt-1">
                <FontAwesomeIcon className="text-white" icon={faInstagram} />
              </div>
              <span className="text-white">novi0202</span>
            </div>
          </div>
          <div className="grid place-content-center h-24 w-24">
            <FontAwesomeIcon
              className="text-gold text-6xl heart"
              icon={faHeart}
            />
          </div>
          <div className="text-center">
            <img className="w-28 md:w-32 rounded-full" src={male} alt="male" />
            <h5 className="text-gold font-pinyon text-2xl tracking-wider mt-3">
              Munawir
            </h5>
            <div className="flex justify-center items-center">
              <div className="mr-2 mt-1">
                <FontAwesomeIcon className="text-white" icon={faInstagram} />
              </div>
              <span className="text-white">munawier0202</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
