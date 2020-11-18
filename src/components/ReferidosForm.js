import React from 'react'
import '../App.css'
import './Referidos.css'

function ReferidosForm(){

    return (
            <div className="referidos__section">
                <form className="referidos__form">
                    <h3 className="referidos__form--title">Ingresa tus datos:</h3>
                    <p className="referidos__form--text">Como te podrás dar cuenta la única información que te pedimos de tu recomendado son tus datos generales, ya que en esta etapa solo revisaremos en nuestro sistema que algunos de nuestros asesores no lo esten ya atendiendo.</p>
                    <div className="referidos__form--container">
                        <label className="referidos__form--label">Nombre</label>
                        <input className="referidos__form--input" type="text"/>
                    </div>
                    <div className="referidos__form--container">
                        <label className="referidos__form--label">Correo</label>
                        <input className="referidos__form--input" type="email"/>
                    </div>
                    <div className="referidos__form--container">
                        <label className="referidos__form--label">Teléfono</label>
                        <input className="referidos__form--input" type="number"/>
                    </div>
                    <div className="referidos__form--container">
                        <label className="referidos__form--label">Colonia</label>
                        <input className="referidos__form--input" type="text"/>
                    </div>
                    <div className="referidos__form--container">
                        <label className="referidos__form--label">Presupuesto</label>
                        <input className="referidos__form--input" type="number"/>
                    </div>
                    <p className="referidos__form--text">
                        Si el contacto recomendado no esta siendo atendido ya por nuestros asesores, te llegara un certificado donde consta que tu nos referiste a ese contacto y al cerrarse la operación se te pagara tu comisión.  
                    </p>
                </form>
            </div>
    )

}

export default ReferidosForm;