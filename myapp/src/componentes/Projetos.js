import React from 'react';
import imgprojeto from '../static/img-projetos/telawow.png'
import NavBar from '../componentes/navBar';


function Projetos() {
  return (
    <div>

      <NavBar />

      <section id="projetos">

        <div h1>
          <h1 class="pt-5">Meus Projetos</h1>
        </div>
        <div className="main-projetos">
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Título do projeto</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
              <div className="buttons-projeto">
                <a href="link" class="btn btn-site">Visite o site</a>
                <a href="link" class="btn btn-site">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Título do projeto</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Título do projeto</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojeto} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Título do projeto</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Projetos;