import React from 'react'

export default function CardProytect({ logoP, logoOne, logoTwo,logoThree, titleProyect,gitLink, webLink }) {
    return (
        <div className="col-5 pcard ">
            <div className="pcard-image">
                <img src={logoP} className='img-fluid pcard-img' alt="" />
            </div>
            <div className="pcard-image-hidden">
                <h4>{titleProyect}</h4>
                <div>
                    Hecho con:
                    <img src={logoOne} className='img-fluid pcard-img m-1' alt="" />
                    {
                        logoTwo 
                        ?
                        <img src={logoTwo} className='img-fluid pcard-img' alt="" />
                        :
                        <></>
                    }
                    {
                        logoThree 
                        ?
                        <img src={logoThree} className='img-fluid pcard-img' alt="" />
                        :
                        <></>
                    }
                </div>
                <div>
                    <a className='btn btn-dark m-1 mt-1' href={gitLink} target="_blank">
                        <i class="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
                    </a>
                    <a className='btn btn-dark m-1 mt-1' href={webLink} target="_blank">
                        <i class="bi bi-link-45deg" style={{ fontSize: "1.5rem" }}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
