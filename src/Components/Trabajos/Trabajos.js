import React from 'react'
import { FaPlay, FaCode } from 'react-icons/fa'
import { BsFillBookmarkCheckFill } from 'react-icons/bs'

import './Trabajos.css'


const Trabajos = () => {
    return (
        <section id='Portfolio' className='trabajos'>
            <h2 className='works-title'>Trabajos</h2>
            <div className='works-container'>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1656116090/e-comerce_es2pzd.jpg' alt ='product-img'/>
                    </div>
                    <h2 className='card-title'>E commerce</h2>
                    <div className='info'>
                        <p><BsFillBookmarkCheckFill className='check'/>Desarrollado en ReactJs en conjunto con Firebase.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Inicio de sesión tradicional y con cuenta de Google, registro de usuarios.</p>
                    </div>
                    <div className='links'>
                        <a href='https://e-commerce-telayna.vercel.app/' target="_blank" className="link"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/e-commerce-telayna' className="link" target="_blank"> <FaCode className='link-icon'/> Código</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1656123267/DLT_nvpk84.jpg'/>
                    </div>
                    <h2 className='card-title'>DLT Seguros</h2>
                    <div className='info'>
                        <p><BsFillBookmarkCheckFill className='check'/>Desarrollado HTML CSS BOOTSTRAP y una pizca de JavaScript.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Trabajo en conjunto con un diseñador y otro desarrollador.</p>
                    </div>
                    <div className='links'>
                        <a href='https://telayna-i.github.io/DLT/' className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/DLT' className="link" target="_blank"> <FaCode className='link-icon'/> Código</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1656116090/pedidos_gxnvxi.jpg'/>
                    </div>
                    <h2 className='card-title'>App pedidos</h2>
                    <div className='info'>
                        <p><BsFillBookmarkCheckFill className='check'/>Desarrollado en ReactJs en conjunto con Firebase.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Permite tomar pedidos y visualizarlos en un tablero.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Dichos pedidos se pueden editar, eliminar o marcar como completados.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Cuenta con una funcionalidad para ver el estado del pedido (cliente).</p>
                    </div>
                    <div className='links'>
                        <a href='https://demo-pedidos.vercel.app/' className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/demo-pedidos' className="link" target="_blank"> <FaCode className='link-icon'/> Código</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1658782245/smartmockups_l6184476_ri4ylb.jpg'/>
                    </div>
                    <h2 className='card-title'>Rick and Morty API</h2>
                    <div className='info'>
                        <p><BsFillBookmarkCheckFill className='check'/>Desarrollado en ReactJs.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Consumiendo la API de Rick y Morty.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Permite ver un listado de 20 personajes por pagina.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Clic en el nombre del personaje para más información.</p>
                    </div>
                    <div className='links'>
                        <a href='https://rickandmorty-snowy.vercel.app/' className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/rickandmorty' className="link" target="_blank"> <FaCode className='link-icon'/> Código</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1658782341/smartmockups_l61863vy_huxfm1.jpg'/>
                    </div>
                    <h2 className='card-title'>Portfolio para Diseñadora grafica</h2>
                    <div className='info'>
                        <p><BsFillBookmarkCheckFill className='check'/>Desarrollado en ReactJs.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Trabajo en conjunto con un diseñador y otro desarrollador.</p>
                        <p><BsFillBookmarkCheckFill className='check'/>Cuenta con un formulario de contacto funcional.</p>
                    </div>
                    <div className='links'>
                        <a href='https://alicemichan.vercel.app/' className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/SashaShadow/alice' className="link" target="_blank"> <FaCode className='link-icon'/> Código</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trabajos