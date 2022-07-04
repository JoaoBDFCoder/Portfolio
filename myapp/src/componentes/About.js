import React from 'react';
import foto from '../static/img/sem-fundo.png';
import NavBar from '../componentes/navBar';

function About() {
  return (
    <div>
      <NavBar />
      <section class="Section" id="sobre">
        <div class="row">
          <div class="col-md-12">
            <h2 class="pt-3">Sobre</h2>
            <p>Me chamo João Batista, sou programador web do sul de Minas Gerais, e trabalho com desenvolvimento de sistemas e sites. Formado na escola de programação Trybe, pude aprender e me apaixonar por essa profissão que molda o futuro do mundo usando a magia dos códigos.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <img class="img-fluid shadow" src={foto} alt="Foto do João" />
          </div>
          <div class="col-md-8">
            <h3>Desenvolvedor de Software</h3>
            <p>Trabalhando em projetos pessoais e freelances, obtendo experiência para agregar em projetos de empresas com demandas maiores, desafiando meus conhecimentos.</p>

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