import React, { useState } from 'react'
import "../../styles/sections/navbar.scss"

export default function Navbar() {

    const [toggleNav, setToggleNav] = useState(false)

    return (
        <nav>
            <div className="container nav-large">
                <div className='nav-div' >
                    <h1 className='nav-title'>Carlos Cruz</h1>
                    <ul className='nav-list'>
                        <a className='nav-item' href='#home'> <b>HOME</b> </a>
                        <a className='nav-item' href='#about' data-offset="500"> <b>SOBRE MI</b> </a>
                        <a className='nav-item' href='#proyects'> <b>PORTFOLIO</b></a>
                        <a className='nav-item' href='#skills'> <b>SKILLS</b></a>
                        <a className='nav-item' href='#contact'> <b>CONTACTO</b></a>
                    </ul>
                </div>
            </div>
            <div className="nav-small">
                <div className='nav-div container'>
                    {
                        !toggleNav
                            ?
                            <h1 className='nav-title'>Carlos Cruz</h1>
                            :
                            <></>
                    }
                    {
                        !toggleNav
                            ?
                            <div>
                                <ul className='nav-list'>
                                    <i class="bi bi-list" style={{ color: "white", fontSize: "3rem", }} onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}></i>
                                </ul>

                            </div>
                            :
                            <div className='toogle-nav-div'>
                                <ul className='nav-list-toogle'>
                                    <a className='nav-item-toogle' href='#home' onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}> <b>HOME</b> </a>
                                    <div className="line"></div>
                                    <a className='nav-item-toogle' href='#about' onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}> <b>SOBRE MI</b> </a>
                                    <div className="line"></div>
                                    <a className='nav-item-toogle' href='#proyects' onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}> <b>PORTFOLIO</b></a>
                                    <div className="line"></div>
                                    <a className='nav-item-toogle' href='#skills' onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}> <b>SKILLS</b></a>
                                    <div className="line"></div>
                                    <a className='nav-item-toogle' href='#contact' onClick={() => {
                                        setToggleNav(!toggleNav)
                                    }}> <b>CONTACTO</b></a>
                                    <div className="line"></div>
                                </ul>
                                <i class="bi bi-list" style={{ color: "white", fontSize: "3rem", marginTop: "0.5rem" }} onClick={() => {
                                    setToggleNav(!toggleNav)
                                }}></i>
                            </div>
                    }
                </div>
            </div>
        </nav>
    )
}
