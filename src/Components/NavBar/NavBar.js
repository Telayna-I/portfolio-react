import { a } from 'react-router-dom'
import './NavBar.css'
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useRef } from 'react';

const NavBar = () => {

    
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav')
    }

    

    return(
        <header>
            <a  className = "logo">Iñaki Telayna</a>
            <nav ref={navRef}>
                
                <a href='#Home' className = {"nav-link"} onClick={showNavBar}
                >Home
                </a>
                
                
                <a href='#SobreMi' className = {"nav-link"} onClick={showNavBar}
                >Sobre mi
                </a>
                
                
                <a href='#Skills' className = {"nav-link"}
                onClick={showNavBar}
                >Skills
                </a>
                

                
                <a href='#Portfolio' className = {"nav-link"}
                onClick={showNavBar}
                >Portfolio
                </a>


                <a href='#Contacto' className = {"nav-link"}
                onClick={showNavBar}
                >Contacto
                </a>
                
                
                
                <button className='nav-btn nav-close-btn' onClick={showNavBar} > <MdOutlineClose/> </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar} > <FaBars/> </button>
        </header>
    );
}

export default NavBar
