import React from 'react'

export default function Skills({ titleSkill, logoTec, logoTec2, logoCert, certLink, logoCert2, certLink2 }) {
    return (
        <div className="knowlegde col-5 col-md-3">
            <div className="card-knowledge" style={{ marginBottom: "2rem" }}>
                <h3 className='text-center' style={{ marginTop: "2rem" }}>{titleSkill}</h3>
                <div>
                    <img src={logoTec} className='img-knowledge' alt="" />
                    {
                        logoTec2
                            ?
                            <img src={logoTec2} className='img-knowledge' alt="" />
                            :
                            <></>
                    }
                </div>
                <div className='certification'>
                    {
                        logoCert
                            ?
                            <h6>Certificados :
                                <a href={certLink} style={{ margin: "0.1rem" }} target='_blank'>
                                    <img src={logoCert} className='img-certification' alt="" />
                                </a>
                                {
                                    logoCert2
                                        ?
                                        <a href={certLink2} style={{ margin: "0.1rem" }} target='_blank'>
                                            <img src={logoCert2} className='img-certification' alt="" />
                                        </a>
                                        :
                                        <></>
                                }
                            </h6>
                            :
                            <></>
                    }

                </div>
            </div>
        </div>
    )
}
