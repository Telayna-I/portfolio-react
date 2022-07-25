import { FaCloudDownloadAlt } from "react-icons/fa";
import './SobreMi.css'
const SobreMi = () => {
    return (
        <section id='SobreMi' className="sobreMi">
            <h2 className="title-sobreMi">Sobre Mi</h2>
            <p className="subtitle-sobreMi" >Mi introduccion</p>

            <p className="text-sobreMi">Analista de sistemas, Frontend React Developer Jr. Soy una persona con un perfil fuertemente orientado a la tecnología. Me destaco por mis ganas de aprender, mi buena comunicación y buen trabajo en equipo.</p>
            <a href="https://drive.google.com/file/d/1wlHSEGbeNYDsSP2ruerMxhEziPzVXwXc/view?usp=sharing" target="_blank">Descargar CV <FaCloudDownloadAlt className="download-icon"/></a>
        </section>
    )
}

export default SobreMi