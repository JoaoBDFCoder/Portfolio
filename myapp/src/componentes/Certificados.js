import React from 'react';
import NavBar from '../componentes/navBar';

import 'react-multi-carousel/lib/styles.css';

import backend from '../static/img-certificados/backend.jpg';
import frontend from '../static/img-certificados/frontend.jpg';
import conclusão from '../static/img-certificados/conclusão.jpg';
import computercience from '../static/img-certificados/computercience.jpg';
import fundamentos from '../static/img-certificados/fundamentos.jpg';

function Certificados() {
  return (
    <div className="body-certificados">
      <NavBar />

      <section id="certificados">

        <h1 class="pt-5">Certificados</h1>

        <div className="content">
          <div className="content-certificados">
            <input className="input-slide" type="radio" name="slide" id="slide1" />
            <input className="input-slide" type="radio" name="slide" id="slide2" />
            <input className="input-slide" type="radio" name="slide" id="slide3" />
            <input className="input-slide" type="radio" name="slide" id="slide4" />
            <input className="input-slide" type="radio" name="slide" id="slide5" />

            <div className="slide s1">
              <img className="img-certificados" src={conclusão} alt="Conclusão de curso"></img>
            </div>
            <div className="slide">
              <img className="img-certificados" src={fundamentos} alt="fundamentos"></img>
            </div>
            <div className="slide">
              <img className="img-certificados" src={frontend} alt="Front-end"></img>
            </div>
            <div className="slide">
              <img className="img-certificados" src={backend} alt="Back-end"></img>
            </div>
            <div className="slide">
              <img className="img-certificados" src={computercience} alt="Ciência da Computação"></img>
            </div>

          </div>
        </div>

            <div className="navigation">
              <label className="bar-navigation" for="slide1">Conclusão</label>
              <label className="bar-navigation" for="slide2">Fundamentos</label>
              <label className="bar-navigation" for="slide3">Front-End</label>
              <label className="bar-navigation" for="slide4">Back-End</label>
              <label className="bar-navigation" for="slide5">Ciência da Computação</label>
            </div>

      </section>

    </div>
  )
}

export default Certificados;