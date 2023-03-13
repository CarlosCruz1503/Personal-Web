import React from 'react'
import aboutImage from "../../assets/about.png"
import "../../styles/sections/about.scss"

export default function About() {
    return (
        <div>
            <div className='container about' id="about">
                <div className="about-image">
                    <img src={aboutImage} className='img-fluid' alt="" />
                </div>
                <div className="about-text " >
                    <h1>SOBRE MI</h1>
                    <p>
                        ¡Hola! Soy Carlos, un programador junior apasionado por la tecnología y el desarrollo de software. Me encanta aprender y estoy dispuesto a enfrentar cualquier desafío para mejorar mis habilidades y conocimientos.
                    </p>
                    <p>
                        Dessarollo en lenguajes como Python y JavaScript y estoy comprometido en seguir aprendiendo nuevas tecnologías para poder desarrollar soluciones innovadoras y creativas.
                    </p>
                </div>
            </div>
        </div>

    )
}
