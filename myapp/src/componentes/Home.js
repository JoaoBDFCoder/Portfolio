import React from 'react';
import NavBar from '../componentes/navBar';

function Home() {
  return (
    <div>
      <NavBar />
      <section id="main">
        <div class="titleHome">
          <h1>João Batista</h1>
          <h2>Desenvolvedor Full Stack</h2>
        </div>
        <div>
          <p class="p">"Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.” – Rafael Lain</p>
        </div>
      </section>

    </div>
  )
}

export default Home;