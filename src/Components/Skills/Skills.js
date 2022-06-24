import React from 'react'
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import { SiJquery } from 'react-icons/si'
import './Skills.css'

const Skills = () => {
    return (
        <section class="skills">
            <h2>Skills</h2>
            <div class="skills-grid-container">
                <div class="skilli html">
                    <FaHtml5 className='fab'/>
                    <p>HTML5</p>
                </div>
                <div class="skilli css">
                    <FaCss3Alt className='fab'/>
                    <p>CSS3</p>
                </div>
                <div class="skilli git">
                    <FaGitAlt className='fab'/>
                    <p>Git</p>
                </div>
                <div class="skilli javascript">
                    <IoLogoJavascript className='fab'/>
                    <p>javaScript</p>
                </div>
                <div class="skilli">
                    <SiJquery className='fab'/>
                    <p>Jquery</p>
                </div>
                <div class="skilli gitHub">
                    <FaReact className='fab'/>
                    <p>React Js</p>
                </div>
            </div>
        </section>
    )
}

export default Skills