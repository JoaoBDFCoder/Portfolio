import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <main className="HomePag">
                <div className="Title">
                    <h1>Desenvolvedor Web</h1>
                    <h2>Full Stack</h2>
                </div>
                <div>
                    <p className="p">“Programadores e artistas são os únicos profissionais que tem como hobby a própria profissão.” – Rafael Lain</p>
                </div>
            </main>
            <img src="myphoto.png" />
            <nav>
                <Link className="link" to="/About">Sobre mim</Link>
            </nav>

        </div>
    )
}

export default Home;