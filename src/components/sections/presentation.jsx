import React from 'react'
import "../../styles/sections/presentation.scss"
import spidermanImage from "../../assets/spiderman.jpg"
import Typewriter from "typewriter-effect";
import pdf from "../../assets/CARLOSJOSECRUZLUENGAS.pdf"
export default function Presentation() {
    return (
        <div className="container presentation" id="home">
            <div className="presentation-title">
                <div className="saludo">
                    <h1>Carlos Cruz</h1>
                    <div className="line"></div>
                    <h2>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                            }}
                            style={{
                                fontSize: "2rem"
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("Full Stack Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("BackEnd Developer")
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString("FrontEnd Developer")
                                    .start();
                            }}
                        />
                    </h2>
                    <div className="buttons-presentation">
                        <button className='btn btn-presentation'>
                            <a href="#contact" style={{ color: "white" }} >
                                Contactame
                            </a>
                        </button>
                        <button className='btn btn-presentation-two'>
                            <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ color: "black" }}>
                                Ver mi CV
                            </a>
                        </button>
                    </div>
                    <div className="buttons-presentation">

                        <a href="https://www.linkedin.com/in/carlos-jose-cruz-luengas/" target='_blank' style={{ color: "white" }} rel="noreferrer">
                            <button className='btn btn-presentation-four'>
                                <i class="bi bi-linkedin m-1"></i>
                            </button>
                        </a>


                        <a href="https://github.com/CarlosCruz1503" target='_blank' style={{ color: "black" }}>
                            <button className='btn btn-presentation-three'>
                                <i class="bi bi-github m-1"></i>
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            <div className="presentation-image" >
                <img className="img-spiderman img-fluid" src={spidermanImage} alt="" srcset="" />
            </div>
        </div >
    )
}
