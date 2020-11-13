import React from 'react'
import '../App.css'
import './ReferidosMain.css'

function ReferidosMain(){

    return (
        <section className="referidos">
            <div className="referidos__section">
                <h1 className="referidos__title">Recomienda a tu conocido y gana miles de pesos</h1>
                <p className="referidos__subtitle">Completa el formulario para participar</p>
            </div>
            <div className="referidos__section">
                <ul className="referidos__menu">
                    <li className="referidos__menu-item">
                        <button className="referidos__menu-button"><span>1</span></button>
                        <p className="referidos__menu-text">Información General</p>
                    </li>
                    <li className="referidos__menu-item">
                        <button className="referidos__menu-button"><span>2</span></button>
                        <p className="referidos__menu-text">Formulario</p>
                    </li>
                    <li className="referidos__menu-item">
                        <button className="referidos__menu-button"><span>3</span></button>
                        <p className="referidos__menu-text">Condiciones</p>
                    </li>
                </ul>
            </div>
            <div className="referidos__section">
                <p className="referidos__text-info">Recomienda a tu contacto que quiera comprar una propiedad y ganate la comisión que nos genere.</p>
                <p className="referidos__text-info">Gana el agradecimiento de tu recomedado ya que estará en manos de una empresa de bienes raíces. </p>
            </div>
            <div className="referidos__section">
                <form className="referidos__form">
                    <h3 className="referidos__form--title">Ingresa tus datos:</h3>
                    <p className="referidos__form--text">Como te podrás dar cuenta la única información que te pedimos de tu recomendado son tus datos generales, ya que en esta etapa solo revisaremos en nuestro sistema que algunos de nuestros asesores no lo esten ya atendiendo.</p>
                    <label className="referidos__form--label">Nombre</label>
                    <input className="referidos__form--input" type="text"/>
                    <label className="referidos__form--label">Correo</label>
                    <input className="referidos__form--input" type="email"/>
                    <label className="referidos__form--label">Teléfono</label>
                    <input className="referidos__form--input" type="number"/>
                    <label className="referidos__form--label">Colonia</label>
                    <input className="referidos__form--input" type="text"/>
                    <label className="referidos__form--label">Presupuesto</label>
                    <input className="referidos__form--input" type="number"/>
                    <p className="referidos__form--text">
                        Si el contacto recomendado no esta siendo atendido ya por nuestros asesores, te llegara un certificado donde consta que tu nos referiste a ese contacto y al cerrarse la operación se te pagara tu comisión.  
                    </p>
                </form>
            </div>
            <div className="referidos__condiciones">
                <button className="referidos__condiciones--button">
                    <a className="referidos__condiciones--link" href="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/documents%2Faviso-de-privacidad-trato-hecho.pdf?alt=media&token=60dbb63d-7a97-436e-bf3c-f46088d24063" target="__blank">Términos y condiciones</a>
                </button>
            </div>
            <div className="referidos__button-container">
                <button className="referidos__button">
                    <span>Anterior</span>
                </button>
                <button className="referidos__button">
                    <span>Siguiente</span>
                </button>
            </div>
        </section>
    )

}

export default ReferidosMain;