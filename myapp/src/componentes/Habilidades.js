import React from 'react';
import NavBar from '../componentes/navBar';
import imgdeveloper from '../static/img/developer-brainstorm.png';
import Comunication from '../static/img/Comunication.png';
import Criativity from '../static/img/Criativity.png';
import Empathy from '../static/img/Empathy.png';
import Colaboration from '../static/img/Colaboration.png';
import Negotiation from '../static/img/Negotiation.png';
import Resilience from '../static/img/Resilience.png';
import Adaptation from '../static/img/Adaptation.png';
import Organization from '../static/img/Organization.png';

function Habilidades() {
  return (
    <div>
      <NavBar />
      <section class="Section" id="habilidades">
        <div>
          <div class="col-md-12">
            <h2 class="pt-5">Habilidades</h2>
            <p style={{ fontSize: '20px' }}>Mesmo tendo pouco tempo de estrada, consegui adquirir habilidades com essas ferramentas, desenvolvendo desde projetos de porte pequeno a grande.</p>
          </div>

          <div id="card-master">
            <div>
              <div>
                <div class="title-skills">
                  <h3>Hard-Skills</h3>
                </div>
                <div class="skills">
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">HTML</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">CSS</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">JavaScript</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">TypeScript</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">React</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">Git</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/github/github-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">GitHub</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mysql/mysql-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">MySql</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/nodejs/nodejs-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">NodeJS</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/mongodb/mongodb-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">MongoDB</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/docker/docker-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">Docker</h6>
                  </div>
                  <div id="card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/python/python-original.svg" class="card-img-top" alt="imagem icon HTML5" />
                    <h6 class="card-title">Python</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="soft-Skills">
              <div class="title-skills">
                <h3>Soft-Skills</h3>
              </div>

              <div class="container">

                <div class="card-comunicacao">
                  <img src={Comunication} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Comunicação</h6>
                </div>

                <div class="card-criatividade">
                  <img src={Criativity} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Criatividade</h6>
                </div>

                <div class="card-empatia">
                  <img src={Empathy} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Empatia</h6>
                </div>

                <div class="card-colaboracao">
                  <img src={Colaboration} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Colaboração</h6>
                </div>

                <figure class="developer-img">
                  <img src={imgdeveloper} style={{ width: '100px' }} class="card-soft" alt="imagem icon HTML5" />
                </figure>

                <div class="card-negociacao">
                  <img src={Negotiation} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Negociação</h6>
                </div>

                <div class="card-resiliencia">
                  <img src={Resilience} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Resiliência</h6>
                </div>

                <div class="card-adaptacao">
                  <img src={Adaptation} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Adaptação</h6>
                </div>

                <div class="card-organizacao">
                  <img src={Organization} style={{ width: '100px' }} alt="imagem icon HTML5" />
                  <h6>Organização</h6>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Habilidades;