import React from 'react';
import Collage from '../../images/2.png';
import { About, Description, Image, Hide } from './styles';

export function AboutSection() {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <h2>
              En nuestro equipo nos apasiona lo que hacemos y nuestros diseños
              lo reflejan con
            </h2>
          </Hide>
          <Hide>
            <h6>dedicación, pasión y profesionalismo</h6>
          </Hide>
        </div>
        <p>
          <br />
          <br />
          Somos un equipo comprometido con el buen diseño que colabora con otras
          empresas que enriquecen nuestros servicios
        </p>
      </Description>
      <Image>
        <img src={Collage} alt="" />
      </Image>
    </About>
  );
}
