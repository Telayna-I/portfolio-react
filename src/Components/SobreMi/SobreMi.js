import { FaCloudDownloadAlt } from "react-icons/fa";
import './SobreMi.css'
const SobreMi = () => {
    return (
        <section id='SobreMi' className="sobreMi">
            <h2 className="title-sobreMi">Sobre Mi</h2>
            <p className="subtitle-sobreMi" >Mi introduccion</p>

            <p className="text-sobreMi">Estoy buscando una primera experiencia como desarrollador frontend y así poder demostrar todo lo que se y con el tiempo ir mejorando y completando el Full-Stack.
            <br/>
            <br/>
            En cuanto a mi formación, en CoderHouse invertí unas 100 horas de clase y mas de el doble practicando y perfeccionándome por mi cuenta.</p>
            <a href="https://drive.google.com/file/d/1wlHSEGbeNYDsSP2ruerMxhEziPzVXwXc/view?usp=sharing" target="_blank">Descargar CV <FaCloudDownloadAlt className="download-icon"/></a>
        </section>
    )
}

export default SobreMi