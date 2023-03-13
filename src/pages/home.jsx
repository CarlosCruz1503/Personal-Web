import React from 'react'
import Navbar from "../components/sections/navbar"
import Presentation from "../components/sections/presentation"
import About from '../components/sections/about'
import Proyects from '../components/sections/proyects'
import Knowledge from '../components/sections/knowledge'
import Contact from '../components/sections/contact'
import Footer from '../components/sections/footer'

export default function Home() {

    const URL = process.env.REACT_APP_URL

    console.log(URL)

    return (
        <div>
            <Navbar></Navbar>
            <Presentation id="home"></Presentation>
            <About id="about"></About>
            <Proyects id="proyects"></Proyects>
            <Knowledge id="skilss"></Knowledge>
            <Contact id="contact"></Contact>
            <Footer></Footer>
        </div>
    )
}
