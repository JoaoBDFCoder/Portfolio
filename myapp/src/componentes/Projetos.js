import React from 'react';

import imgprojeto from '../static/img-projetos/fogueira.png'

import NavBar from '../componentes/navBar';


function Projetos() {
  return (
    <div>

      <NavBar />

      <section id="projetos">

        <div>
          <h1>Meus Projetos</h1>
        </div>
        <div className="main-projetos">
          <div className="content-projetos">
            <img src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <p>Em Breve..</p>
          </div>
          <div className="content-projetos">
            <img src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <p>Em Breve..</p>
          </div>
          <div className="content-projetos">
            <img src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <p>Em Breve..</p>
          </div>
          <div className="content-projetos">
            <img src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <p>Em Breve..</p>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Projetos;