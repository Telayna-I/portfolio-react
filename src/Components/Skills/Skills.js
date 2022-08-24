import React from 'react'
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiJquery, SiStyledcomponents, SiRedux } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
    return (
        <section id='Skills' className="skills">
            <h2>Skills</h2>
            <div className="skills-grid-container">
                <div className="skilli html">
                    <FaHtml5 className='fab'/>
                    <p>HTML5</p>
                </div>
                <div className="skilli css">
                    <FaCss3Alt className='fab'/>
                    <p>CSS3</p>
                </div>
                <div className="skilli git">
                    <FaGitAlt className='fab'/>
                    <p>Git</p>
                </div>
                <div className="skilli javascript">
                    <IoLogoJavascript className='fab'/>
                    <p>javaScript</p>
                </div>
                <div className="skilli">
                    <SiJquery className='fab'/>
                    <p>Jquery</p>
                </div>
                <div className="skilli gitHub">
                    <FaReact className='fab'/>
                    <p>React Js</p>
                </div>
                <div className="skilli gitHub">
                    <SiRedux className='fab'/>
                    <p>Redux</p>
                </div>
                <div className="skilli">
                    <SiStyledcomponents className='fab styled'/>
                    <p>Styled Components</p>
                </div>
            </div>
        </section>
    )
}

export default Skills