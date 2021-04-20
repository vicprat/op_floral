import React from 'react';
import Image1 from '../../images/colaboradores/1.png';
import Image2 from '../../images/colaboradores/2.png';
import Image3 from '../../images/colaboradores/3.png';
import Image4 from '../../images/colaboradores/4.png';
import { Link } from 'gatsby';
import { Grid } from './styles';

export function CollabsGrid() {
  return (
    <Grid>
      <article style={{ backgroundImage: `url(${Image1})` }}>
        <Link
          aria-label="Link to Landing Page"
          to="/landing"
          className="link primary"
        >
          <header className="major">
            <h4>Xolotl</h4>
            <p>
              Repostería mexicana que ofrece productos de calidad con un toque
              tradicional y casero. Un apapacho para cerrar nuestros días o
              iniciar nuestras mañanas.
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image2})` }}>
        <Link
          aria-label="Link to Landing Page"
          to="/landing"
          className="link primary"
        >
          <header className="major">
            <h4>Chomi Chomi</h4>
            <p></p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image3})` }}>
        <Link
          aria-label="Link to Landing Page"
          to="/landing"
          className="link primary"
        >
          <header className="major">
            <h4>OC Suculentas</h4>
            <p>
              Joven empresa mexicana enfocada y motivados por enriquecer y
              armonizar espacios con elementos vivos.
            </p>
          </header>
        </Link>
      </article>
      <article style={{ backgroundImage: `url(${Image4})` }}>
        <Link
          aria-label="Link to Landing Page"
          to="/landing"
          className="link primary"
        >
          <header className="major">
            <h4>Florista Invitado del Mes</h4>
          </header>
        </Link>
      </article>
    </Grid>
  );
}
