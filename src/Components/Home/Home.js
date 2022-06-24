import { FaLinkedin, FaWhatsapp, FaGithub, FaPaperPlane } from "react-icons/fa";
import './Home.css'

const Home = () => {

    return (
        <main className="main">
            <section className="home">
                <div className="redes">
                    <FaLinkedin className='icon' />
                    <FaWhatsapp className='icon' />
                    <FaGithub className='icon' />
                </div>
                <div className="texto">
                    <h1>Hola, soy Iñaki</h1>
                    <h3>Frontend developer</h3>
                    <p>Profesional de alto nivel desarrollando webs, produciendo trabajos de calidad.</p>
                    <a href="#conacto">Contactame<FaPaperPlane className='icono'/></a>
                </div>
                <img src='https://res.cloudinary.com/telayna-i/image/upload/v1655849623/WhatsApp_Image_2022-06-21_at_7.01.48_PM_yvojfb.jpg'/>
            </section>
        </main>
    )

}

export default Home