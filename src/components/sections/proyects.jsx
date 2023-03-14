import React from 'react'
import "../../styles/sections/proyects.scss"
import logoReact from "../../assets/react-logo.png"
import logoDjango from "../../assets/djrest-logo.png"
import logoInstacrem from "../../assets/bd63c-logo-instagram-antiguo.png"
import CardProyect from "../pure/cardProyect"
import logoQuiz from "../../assets/quizlogo.png"
import logoNode from "../../assets/node.png"
import LogoType from "../../assets/type.png"
import logoContact from "../../assets/contact.png"
import logoTodo from "../../assets/todo.png"
import logoCalc from "../../assets/calc.png"
import logoJs from "../../assets/js-logo.png"
import logoLimes from "../../assets/logo.png"

export default function Proyects() {
    return (
        <div className='container proyects' id="proyects">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="div-proyects">
                            <h1 className='text-center'> Proyectos </h1>
                            <div className="proyects-card">
                                <div className="row" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <CardProyect logoP={logoLimes} logoOne={logoReact} logoTwo={logoNode} titleProyect={"Web para Restaurante-Bar"}
                                        gitLink={"https://github.com/CarlosCruz1503/Proyecto-LimesyLimones"} webLink={"http://limesylimones.vercel.app/home"}
                                    ></CardProyect>
                                    <CardProyect logoP={logoInstacrem} logoOne={logoReact} logoTwo={logoDjango} titleProyect={"Copia de instagram"}
                                        gitLink={"https://github.com/CarlosCruz1503/Instagram-Copy"} webLink={"https://instagremi.vercel.app/home"}
                                    ></CardProyect>
                                    <CardProyect logoP={logoQuiz} logoOne={logoReact} logoTwo={logoNode} logoThree={LogoType} titleProyect={"QuizHook"}
                                        gitLink={"https://github.com/CarlosCruz1503/Trivia"} webLink={"https://quizhook.vercel.app/"}
                                    ></CardProyect>

                                    <CardProyect logoP={logoContact} logoOne={logoDjango} titleProyect={"App de contactos y tareas"}
                                        gitLink={"https://github.com/CarlosCruz1503/CRUDAUTH-Django"} webLink={"https://carloscruz.pythonanywhere.com/"}
                                    ></CardProyect>

                                    <CardProyect logoP={logoTodo} logoOne={logoReact} titleProyect={"Todo App"}
                                        gitLink={"https://github.com/CarlosCruz1503/Todo---React"} webLink={"https://todo-react-app.onrender.com"}
                                    ></CardProyect>

                                    <CardProyect logoP={logoCalc} logoOne={logoJs} titleProyect={"Calculadora"}
                                        gitLink={"https://github.com/CarlosCruz1503/CalculadoraJS"} webLink={"https://calculadoracarloscruz.netlify.app/"}
                                    ></CardProyect>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="div-proyects">
                            <div className="proyects-card">
                                <div className="p-card-text-info">
                                    <h1 className='number-p-card'>+6</h1>
                                    <h3 className='text-p-card'>Meses de experiencia en desarrollo</h3>
                                </div>
                            </div>
                            <a className="btn whatsapp-contact" target="_blank" href='https://api.whatsapp.com/send/?phone=573012898593&text&type=phone_number&app_absent=0'>
                                <h4> Habla conmigo <i class="bi bi-whatsapp"></i></h4>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    )
}
