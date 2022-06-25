import React from 'react'
import './Contacto.css'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { useForm } from 'react-hook-form';
import { MdDangerous } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contacto = () => {

    const {register, formState :{ errors } , handleSubmit} = useForm();

    const enviarEmail = (e,data)=>{
        emailjs.sendForm('service_ilmtky2','template_v8cwxf8',data.target,'_kCXCqayqcC3Xwta8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        data.target.reset()
    }

    return (
        <section className='contacto' id='Contacto'>
            <h2>Contacto</h2>
            <form className='form-login' onSubmit ={handleSubmit(enviarEmail)}>
                <div className = 'campo'>
                    <CgProfile className='input-icon' />
                    <input className='input-form radius-t' type = 'text'
                    autoComplete = 'off'
                    placeholder = 'Introduzca su nombre'
                    name='nombre'
                    {...register('nombre', {
                        required:{
                            value: true,
                            message: 'El campo nombre es requerido',
                        },
                        minLength:{
                            value: 4,
                            message: 'Introduce un nombre valido'
                        }
                    })}/>
                </div>
                <div className='message'>
                    {errors.nombre && <span className='error-message'>{errors.nombre.message}<MdDangerous className='icon-error'/></span>}
                </div>
                <div className = 'campo'>
                    <FaEnvelope className='input-icon' />
                    <input className='input-form radius-t' type = 'email'
                    autoComplete = 'off'
                    placeholder = 'Email'
                    name='email'
                    {...register('email', {
                        required:{
                            value: true,
                            message: 'El campo email es requerido',
                        },
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "El formato de email no es correcto"
                        }
                    })}
                    />
                </div>
                <div className='message'>
                    {errors.email && <span className='error-message'>{errors.email.message}<MdDangerous className='icon-error'/></span>}
                </div>
                <div className = 'campo'>
                    <textarea className='input-form textarea'
                    placeholder='Mensaje...'
                    autoComplete = 'off'
                    name='mensaje'
                    rows={'6'}
                    cols ={'60'}
                    {...register('mensaje', {
                        required:{
                            value: true,
                            message: 'El campo mensaje es requerido',
                        },
                        minLength: {
                            value: 10,
                            message: "Ingresa un mensaje mas largo"
                        },
                    })}/>
                </div>
                <div className='message'>
                    {errors.mensaje && <span className='error-message'>{errors.mensaje.message}<MdDangerous className='icon-error'/></span>}
                </div>
                <button type="submit" value="submit" className = 'button-submit' > Enviar <FaPaperPlane className='button-icon' /> </button>
            </form>
        </section>
    )
}

export default Contacto