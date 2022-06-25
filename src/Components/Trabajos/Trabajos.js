import React from 'react'
import { FaPlay, FaCode } from 'react-icons/fa'
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
                    <div className='links'>
                        <a href='https://e-commerce-telayna.vercel.app/' target="_blank" className="link"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/e-commerce-telayna' className="link" target="_blank"> <FaCode className='link-icon'/> Codigo</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1656116090/pedidos_gxnvxi.jpg'/>
                    </div>
                    <h2 className='card-title'>App pedidos</h2>
                    <div className='links'>
                        <a className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/pedidos' className="link" target="_blank"> <FaCode className='link-icon'/> Codigo</a>
                    </div>
                </div>
                <div className='card'>
                    <div className='img-container'>
                        <img src= 'https://res.cloudinary.com/telayna-i/image/upload/v1656123267/DLT_nvpk84.jpg'/>
                    </div>
                    <h2 className='card-title'>DLT Seguros</h2>
                    <div className='links'>
                        <a href='https://telayna-i.github.io/DLT/' className="link" target="_blank"> <FaPlay className='link-icon'/> Demo</a>
                        <a href='https://github.com/Telayna-I/DLT' className="link" target="_blank"> <FaCode className='link-icon'/> Codigo</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trabajos