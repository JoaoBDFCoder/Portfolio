import React from 'react';
import foto from '../static/img/sem-fundo.png';
import NavBar from '../componentes/navBar';

function About() {
  return (
    <div>
      <NavBar />
      <section class="Section" id="sobre">

        <div className="texto-sobre">
          <h1 class="pt-3">Sobre</h1>
          <p>
            Sou um programador web do sul de Minas Gerais com grandes ambições e sonhos. Possuo habilidades e experiência no desenvolvimento de sistemas e sites, sendo uma paixão cultivada durante minha formação na escola de programação Trybe. Acredito que essa profissão molda o futuro do mundo através da magia dos códigos. Além disso, sou um comunicador eficaz, sendo capaz de construir relacionamentos fortes com as pessoas para entregar os melhores resultados. Estou sempre buscando novos desafios e oportunidades para crescer e evoluir como profissional.
          </p>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid width={100px}" src={foto} alt="Foto do João" />
          </div>
          <div class="col-md-8">
            <h3>Desenvolvedor de Software</h3>
            <p>Como programador web, tenho aproveitado minhas habilidades e conhecimentos através da execução de projetos pessoais e trabalhos freelancer. Isso tem me permitido adquirir experiência valiosa, preparando-me para lidar com projetos de maior escala e demanda em empresas. Estou sempre buscando desafios que possam me desafiar e aprimorar meus conhecimentos, visando o crescimento profissional contínuo.</p>

            <div class="row mt-3 mb-4 listMaster">
              <div class="list">
                <ul class="list-Group">
                  <li class="list-item">Data de nascimento: <span class="fw-lighter">
                    17 de Fevereiro de 1995
                  </span></li>
                  <li class="list-item">Idade: <span class="fw-lighter">
                    27 anos
                  </span></li>
                  <li class="list-item">Cidade: <span class="fw-lighter">
                    Três Corações
                  </span></li>
                  <li class="list-item">Estado: <span class="fw-lighter">
                    Minas Gerais
                  </span></li>
                  <li class="list-item">Hobby: <span class="fw-lighter">
                    Músico
                  </span></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About;