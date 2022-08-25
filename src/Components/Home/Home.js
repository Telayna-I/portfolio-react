import { FaLinkedin, FaWhatsapp, FaGithub, FaPaperPlane } from "react-icons/fa";
import './Home.css'

const Home = () => {

    return (
        <main className="main">
            <section id='Home' className="home">
                <div className="redes">
                    <a href="https://www.linkedin.com/in/telayna-frontend/" target="_blank"><FaLinkedin className='icon' /></a>
                    <a href="https://wa.me/542932534436" target="_blank"><FaWhatsapp className='icon' /></a>
                    <a href="https://github.com/Telayna-I" target="_blank"><FaGithub className='icon' /></a>
                </div>
                <div className="texto">
                    <h1>Hola, soy Iñaki</h1>
                    <h3>Frontend developer</h3>
                    <p>Profesional de alto nivel desarrollando webs, produciendo trabajos de calidad.</p>
                    <a href="#Contacto">Contactame<FaPaperPlane className='icono'/></a>
                </div>
                <img src='https://res.cloudinary.com/telayna-i/image/upload/v1655849623/WhatsApp_Image_2022-06-21_at_7.01.48_PM_yvojfb.jpg'/>
            </section>
        </main>
    )

}

export default Home