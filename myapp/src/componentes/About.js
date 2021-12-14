import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <main>
                <h2>Mais sobre mim</h2>
            </main>
            <p>Isso parece uma questão existencial, você não
           acha?</p>
            <nav>
                <Link to="/">página principal</Link>
            </nav>
        </div>
    )
}

export default About;