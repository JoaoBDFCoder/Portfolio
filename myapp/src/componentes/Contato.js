import React from 'react';
import NavBar from '../componentes/navBar';
import $ from 'jquery';
import 'jquery-validation';

function Contato() {

  return (
    <div>
      <NavBar />

      <section id="contato">

        <h1>Contato</h1>

        <div className="master-contato">

          <div id="endereco" class="col-md-5">
            <div class="p-4 shadow border-0">

              <div className="email">
                <h4>
                  <i className="bi bi-envelope"></i> Email:</h4>
                <p>joaobdf@hotmail.com</p>
              </div>
              <div>
                <h4><i className="bi bi-geo-alt"></i> Localização:</h4>
                <p>Três Corações, MG</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59314.81318073286!2d-45.29388122462022!3d-21.695895623916105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cadce0fb6a859b%3A0x47c64fc358af46a5!2zVHLDqnMgQ29yYcOnw7VlcywgTUcsIDM3NDEwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1673373603568!5m2!1spt-BR!2sbr" title="endereço" width="200" height="300" class="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

          </div>

          <div id="forms-contato" class="p-4 shadow border-0">
            <div class="row">
              <div class="col">
                <label htmlFor="Nome" class="form-label">Nome</label>
                <input type="text" class="form-control" placeholder="Digite seu nome" />
              </div>
              <div class="col">
                <label htmlFor="Email" class="form-label">E-mail</label>
                <input type="text" class="form-control" placeholder="Digite seu e-mail" />
              </div>
              <div class="mb-3">
                <label htmlFor="mensagem-contato" class="form-label">Mensagem:</label>
                <textarea class="form-control" placeholder='Digite sua mensagem' id="mensagem-contato" rows="12"></textarea>
              </div>
              <div class="col-12 d-flex justify-content-center">
                <button type="submit" className="btn-contato">Enviar Mensagem</button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Contato;