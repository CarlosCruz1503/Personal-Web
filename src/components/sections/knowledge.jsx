import React from 'react'
import "../../styles/sections/knowledge.scss"
import logoReact from "../../assets/react-logo.png"
import logoDjango from "../../assets/djrest-logo.png"
import logoNode from "../../assets/node.png"
import LogoType from "../../assets/type.png"
import logoJs from "../../assets/js-logo.png"
import logoOpen from "../../assets/qJQdMrat_400x400.jpg"
import logoHack from "../../assets/hackerRank-logo.png"
import logoPython from "../../assets/python.png"
import logoRest from "../../assets/drf-logo2.png"
import logoSass from "../../assets/sass.png"
import logoCss from "../../assets/css.png"
import logoHtml from "../../assets/html.png"
import logoGit from "../../assets/git.png"
import Skills from '../pure/skills'

export default function Knowledge() {
    return (
        <div className='container mt-5' id="skills">
            <h1 className='text-center knowledge-title'>Skills</h1>
            <div className="row " >
                <Skills titleSkill={"Typescript"} logoTec={LogoType} logoCert={logoOpen}
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/51bce249-994f-4a78-a58c-2458dd39ff8c"}
                >
                </Skills>
                <Skills titleSkill={"React"} logoTec={logoReact} logoCert={logoOpen} logoCert2={logoHack} certLink2={"https://www.hackerrank.com/certificates/c2bfd4de1b53"}
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/68a9b695-04cb-4de1-ab52-5711c956afd1"}
                >
                </Skills>
                <Skills titleSkill={"Node JS"} logoTec={logoNode} >
                </Skills>
                <Skills titleSkill={"JavaScript"} logoTec={logoJs} logoCert={logoOpen} logoCert2={logoHack} certLink2={"https://www.hackerrank.com/certificates/b77932f21e40"}
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/f3dffea7-b70d-43e3-b7de-eb0c5ffef4b3"}
                >
                </Skills>
                <Skills titleSkill={"Django"} logoTec={logoDjango} logoTec2={logoRest} logoCert={logoOpen}
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/53dc1d88-31cf-4a20-8369-584b21551df0"}
                >
                </Skills>
                <Skills titleSkill={"Python"} logoTec={logoPython} logoCert={logoOpen}
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/2770fcc7-8395-4003-80f7-a17a03ba971b"}
                >
                </Skills>
                <Skills titleSkill={"GitHub"} logoTec={logoGit} 
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/2770fcc7-8395-4003-80f7-a17a03ba971b"}
                ></Skills>
                <Skills titleSkill={"Sass"} logoTec={logoSass} 
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/2770fcc7-8395-4003-80f7-a17a03ba971b"}
                >
                </Skills>
                <Skills titleSkill={"CSS"} logoTec={logoCss} 
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/2770fcc7-8395-4003-80f7-a17a03ba971b"}
                >
                </Skills>
                <Skills titleSkill={"HTML"} logoTec={logoHtml} 
                    certLink={"https://community.open-bootcamp.com/user/carloscruz15y/certificaciones/2770fcc7-8395-4003-80f7-a17a03ba971b"}
                >
                </Skills>
            </div>
        </div>
    )
}
