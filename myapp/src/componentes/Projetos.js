import React, { useEffect } from 'react';
import imgprojetoloading from '../static/img-projetos/loading.png'
import NavBar from '../componentes/navBar';

function Projetos() {
  useEffect(() => {
    const links = document.querySelectorAll('.buttons-projeto');
    links.forEach(link => {
      link.addEventListener('click', function(event){
        if(this.getAttribute('data-disabled') === 'true') {
          alert('Este projeto ainda está em desenvolvimento, tente novamente mais tarde!');
          event.preventDefault();
        }
      });
    });
  }, []);

  return (
    <div>

      <NavBar />
      <section id="projetos">

        <div>
          <h1 class="pt-5">Meus Projetos</h1>
        </div>
        <div className="main-projetos">
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Tela de Login</h3>
              <p>O projeto é uma tela de login e cadastro inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Controle de finanças</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Weather App</h3>
              <p>Weather App é um projeto desenvolvido com ReactJS, HTML e CSS, que permite ao usuário ver as condições climáticas de qualquer cidade do mundo. Ele consome dados de outras APIs para trazer informações precisas sobre temperatura, umidade, pressão atmosférica, velocidade do vento, entre outras informações relacionadas ao clima.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>App de mobilidade urbana</h3>
              <p>Um app de transporte de passageiros, onde pessoas poderão chamar carros, obter o preço, distância e outras informações, motoristas poderão aceitar corridas. Usando as melhores tecnologias do mercado como React, Node, MongoDB, Redux, APIs do Google Maps, Socket.io para tempo real e o Gateway de Pagamento do Pagar.me.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Marketplace</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
          <div className="content-projetos">
            <img class="img-fluid" src={imgprojetoloading} alt="imagem projeto" className="img-projetos" />
            <div className="text-projeto">
              <h3>Clone NetFlix</h3>
              <p>Em resumo, o projeto é uma tela de login inspirada na tela de login do World of Warcraft: Shadowlands, desenvolvida com ReactJS, HTML, CSS, e segue boas práticas de desenvolvimento web e segurança.</p>
              <div id="div-link" className="div-btn-projeto">
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Visite o site</a>
                <a href="#" data-disabled="true" rel="noreferrer" target="_blank" className="buttons-projeto">Veja o código no GitHub</a>
              </div>
            </div>
          </div>
        </div>

      </section>


    </div>
  )
}

export default Projetos;