import React from 'react';
import minhaFoto from '../static/img/perfil.jpg';

const menuLateral = document.querySelector('.menu-lateral');
const body = document.querySelector('body');
const fecharMenu = document.querySelector('.fecharMenu');

menuLateral.addEventListener('click', () => {
  menuLateral.classList.contains('bi-list')
  ? menuLateral.classList.replace('bi-list', 'bi-x')
  : menuLateral.classList.replace('bi-x', 'bi-list');
  body.classList.toggle('menu-nav-active');
  fecharMenu.classList.toggle('fecharMenu-active');
});


fecharMenu.addEventListener('click', () => {
  body.classList.remove('menu-nav-active')
  fecharMenu.classList.remove('fecharMenu-active')
  menuLateral.classList.replace('bi-x', 'bi-list')
});


function NavBar() {
  return (
    <aside id="header">
      <section class="profile">
        <img src={minhaFoto} alt="Foto do João" />
        <h1>João Batista</h1>
        <div class="social-links mt-3 mb-3 text-center">
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
      </section>

      <nav id="navbar" class="nav-menu">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/"> 
              <i class="bi bi-house"></i> Inicio</a>
          </li>
          <li class="nav-item">            
            <a class="nav-link" href="/Sobre">
              <i class="bi bi-person-lines-fill"></i> Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Habilidades">
              <i class="bi bi-graph-up-arrow"></i> Habilidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Projetos">
              <i class="bi bi-cpu"></i> Projetos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Certificados">
              <i class="bi bi-check-all"></i> Certificados</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contato">
              <i class="bi bi-envelope-check"></i> Contato</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default NavBar;