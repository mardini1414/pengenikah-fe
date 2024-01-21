import React from 'react';
import male from '../../../common/assets/img/male.webp';
import female from '../../../common/assets/img/female.webp';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ornament7 from '../assets/svg/ornamen7.svg';
import { Zoom, Fade } from 'react-reveal';

function ProfileSection() {
  return (
    <section>
      <div className="grid place-content-center">
        <Zoom>
          <div className="flex flex-col items-center justify-center my-20 max-w-[400px]">
            <img
              className="w-[40%] md:w-[20%] rotate-180"
              src={ornament7}
              alt="ornament7"
            />
            <p className="text-white text-base text-center p-4">
              <q>
                Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir.
                <br />
                (QS Ar-Rum: 21)
              </q>
            </p>
            <img
              className="w-[40%] md:w-[20%]"
              src={ornament7}
              alt="ornament7"
            />
          </div>
        </Zoom>
        <div className="flex items-center justify-center flex-col md:flex-row">
          <Fade left>
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
          </Fade>
          <div className="grid place-content-center h-24 w-24">
            <FontAwesomeIcon
              className="text-gold text-6xl heart"
              icon={faHeart}
            />
          </div>
          <Fade right>
            <div className="text-center">
              <img
                className="w-28 md:w-32 rounded-full"
                src={male}
                alt="male"
              />
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
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
