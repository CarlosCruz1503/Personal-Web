import React from 'react'

export default function Skills({ titleSkill, logoTec, logoCert, certLink }) {
    return (
        <div className="knowlegde col-5 col-md-3">
            <div className="card-knowledge" style={{marginBottom:"2rem"}}>
                <h2 className='' style={{marginTop:"2rem"}}>{titleSkill}</h2>
                <img src={logoTec} className='img-knowledge' alt="" />
                <div className='certification'>
                    {
                        logoCert
                            ?
                            <h5>Certificado:
                                <a href={certLink} style={{ margin: "0.1rem" }} target='_blank'>
                                    <img src={logoCert} className='img-certification' alt="" />
                                </a>
                            </h5>
                            :
                            <></>
                    }
                </div>
            </div>
        </div>
    )
}
