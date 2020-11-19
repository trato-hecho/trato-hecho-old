import React from 'react'
import '../App.css'
import './SesionForm.css'

function LoginForm(){

    return (
        <form className="sesion__form">
            <h1 className="sesion__form--title">Inicia Sesión</h1>
            <p className="sesion__form--text">Con tus redes</p>
            <div className="session__form--button-container">
                <button className="session__form--buttonFB">
                    <img className="session__form--buttonFB-img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Ffacebook-icon-sesion.png.png?alt=media&token=53e30e20-f7d4-40f0-bc3a-42fc54f7ecfb" />
                    <p className="session__form--buttonFB-text">Facebook</p>
                </button>
                <button className="session__form--buttonGL">
                    <img className="session__form--buttonGL-img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Fgoogle-login.png?alt=media&token=cb53275a-8f32-4eff-ba18-0668d9ffc36e" />
                    <p className="session__form--buttonGL-text">Google</p>
                </button>
            </div>
            <div className="sesion__form--inputs">
                <div className="sesion__form--input-container">
                    <label className="sesion__form--label">Correo</label>
                    <input className="sesion__form--input" type="email"/>
                </div>
                <div className="sesion__form--input-container">
                    <label className="sesion__form--label">Contraseña</label>
                    <input className="sesion__form--input" type="password"/>
                </div>
                <div className="sesion__form--input-container-checkbox">
                    <input className="sesion__form--checkbox" type="checkbox"/>
                    <label className="sesion__form--checkbox-label"> Recordarme</label>
                </div>
                <div className="sesion__form--input-container-button">
                    <input className="sesion__form--input-button" value="Iniciar Sesión" type="submit"/>
                </div>
                <div className="sesion__form--container-password">
                    <a className="sesion__form--password" href="./Password">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="sesion__form--container-login">
                    <p className="sesion__form--login-text">¿No tienes cuenta en Trato Hecho?</p>
                    <a className="sesion__form--login-link" href="./Signin">Crea una cuenta</a>
                </div>
            </div>
        </form>
    )

}

export default LoginForm;