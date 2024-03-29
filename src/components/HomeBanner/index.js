import React from 'react';
import { Carousel } from 'react-bootstrap';
import { CarouselWrapper } from './styles';
import { StyledLink } from '../StyledLink';
import slide1 from '../../images/home/banner1.png';
import slide2 from '../../images/home/banner2.png';
import slide3 from '../../images/home/banner3.png';

export function HomeBanner() {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item>
          <img src={slide1} alt="this is the first silde" />
          <Carousel.Caption>
            <div className="title">
              <h1>Vívelo con</h1>
              <h6>Flores</h6>
            </div>
            <div className="description">
              <StyledLink>¡Conoce Más!</StyledLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide2} alt="this is the second silde" />
          <Carousel.Caption>
            <div className="title">
              <h1>Celebremos a nuestras madres con un detalle</h1>
              <h6>especial</h6>
            </div>
            <div className="description">
              <p>
                Éste 10 de mayo haz que esa mujertan especial reciba un arreglo
                único para festejar
              </p>
              <StyledLink>¡Conoce Más!</StyledLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={slide3} alt="this is the thrid silde" />
          <Carousel.Caption>
            <div className="title">
              <h1>Una flor florece para si misma.</h1>
              <p>especial</p>
            </div>
            <div className="description">
              <p>
                Éste 10 de mayo haz que esa mujer tan especial reciba un arreglo
                único para festejar
              </p>
              <StyledLink>¡Conoce Más!</StyledLink>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
}
