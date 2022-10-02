import React from 'react'
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact, FaGithub } from 'react-icons/fa'
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io'
import { SiJquery, SiStyledcomponents, SiRedux, SiFirebase, SiBootstrap, SiMysql } from 'react-icons/si'
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
                <div className="skilli css">
                    <IoLogoSass className='fab'/>
                    <p>Sass</p>
                </div>
                <div className="skilli css">
                    <SiBootstrap className='fab'/>
                    <p>Bootstrap</p>
                </div>
                <div className="skilli git">
                    <FaGitAlt className='fab'/>
                    <p>Git</p>
                </div>
                <div className="skilli git">
                    <FaGithub className='fab'/>
                    <p>Git-Hub</p>
                </div>
                <div className="skilli javascript">
                    <IoLogoJavascript className='fab'/>
                    <p>JavaScript</p>
                </div>
                <div className="skilli">
                    <SiJquery className='fab'/>
                    <p>Jquery</p>
                </div>
                <div className="skilli">
                    <SiFirebase className='fab'/>
                    <p>Firebase</p>
                </div>
                <div className="skilli">
                    <SiMysql className='fab sql'/>
                    <p>MySQL</p>
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