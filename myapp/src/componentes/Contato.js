import React, { Component } from 'react';
import NavBar from '../componentes/navBar';
import axios from 'axios';

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: '',
      email: '',
      mensagem: '',
      loading: false,
    };
  }

  clearForm = () => {
    this.setState({
      nome: '',
      email: '',
      mensagem: ''
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(this.state.email)) {
      alert("Por favor, insira um endereço de e-mail válido");
      return;
    }

    const { nome, email, mensagem } = this.state
    const message = {
      from: email,
      to: "joaobdfcoder@gmail.com",
      subject: "Mensagem de contato",
      text: `Mensagem enviada por: ${nome}\nConteúdo da mensagem: ${mensagem}`,
      html: `<p>${mensagem} </p>`
    };

    this.setState({ loading: true })
    axios.post('/api/send-email', message)
      .then(response => {
        this.setState({ loading: false });
        alert("Mensagem enviada com sucesso:");
        this.clearForm();
      })
      .catch(error => {
        this.setState({ error: true, loading: false });
        alert("Error:", error);
      });
  }

  render() {
    const { nome, email, mensagem, loading } = this.state;
    return (
      <div>
        <NavBar />

        <section id="contato">

          <h1 class="pt-5">Contato</h1>

          <div className="master-contato">

            <div id="endereco" class="col-md-5">
              <div class="p-4 shadow border-0">

                <div className="info-contato">
                  <div className="email">
                    <h5>
                      <i className="bi bi-envelope"></i> Email:</h5>
                    <p>joaobdf@hotmail.com</p>
                  </div>
                  <div className="social-links-contato">
                    <h5>Redes sociais:</h5>
                    <a target="_blank" href="https://www.linkedin.com/in/jo%C3%A3o-batista-6509511ab/" rel="noreferrer">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a target="_blank" href="https://github.com/JoaoBDFCoder" rel="noreferrer">
                      <i class="bi bi-github"></i>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/joaobdf/" rel="noreferrer">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a target="_blank" href="https://web.whatsapp.com/send?phone=5535991667103&text=Ol%C3%A1%20Jo%C3%A3o!" rel="noreferrer">
                      <i class="bi bi-whatsapp"></i>
                    </a>
                  </div>
                </div>
                
                <div className='localizacao'>
                  <h5><i className="bi bi-geo-alt"></i> Localização:</h5>
                  <p>Três Corações, MG</p>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59314.81318073286!2d-45.29388122462022!3d-21.695895623916105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cadce0fb6a859b%3A0x47c64fc358af46a5!2zVHLDqnMgQ29yYcOnw7VlcywgTUcsIDM3NDEwLTAwMA!5e0!3m2!1spt-BR!2sbr!4v1673373603568!5m2!1spt-BR!2sbr" title="endereço" width="200" height="300" class="w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>

            </div>

            <div id="forms-contato" class="p-4 shadow border-0">
              <form id="forms-contato" class="row">
                <div class="col">
                  <label htmlFor="nome" class="form-label">Nome</label>
                  <input type="text" class="form-control" name='nome' onChange={this.handleChange} value={nome} placeholder="Digite seu nome" id="nome" />
                </div>
                <div class="col">
                  <label htmlFor="email" class="form-label">E-mail</label>
                  <input type="text" class="form-control" name='email' onChange={this.handleChange} value={email} placeholder="Digite seu e-mail" id="email" />
                </div>
                <div class="mb-3">
                  <label htmlFor="mensagem" class="form-label">Mensagem:</label>
                  <textarea class="form-control" name='mensagem' onChange={this.handleChange} value={mensagem} placeholder='Digite sua mensagem' id="mensagem" rows="12"></textarea>
                </div>
                <div class="col-12 d-flex justify-content-center">
                  <button type="submit" onClick={this.handleSubmit} className="btn-contato" disabled={loading} >{loading ? 'Enviando...' : 'Enviar Mensagem'}</button>
                </div>
              </form>
            </div>

          </div>
        </section>

      </div>
    )
  }

}

export default Contato;