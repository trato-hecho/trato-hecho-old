import React from 'react';
import '../App.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReferidosMain from '../components/ReferidosMain'
import ReferidosForm from '../components/ReferidosForm'
import ReferidosTerminos from '../components/ReferidosTerminos'
import '../components/Referidos.css'
import { useState } from "react";

function Referidos() {
    
    const [show,setShow] = useState(true)


    return (
        <>
            <Header />

            <section className="referidos">
                    <div className="referidos__section">
                        <h1 className="referidos__title">Recomienda a tu conocido y gana miles de pesos</h1>
                        <p className="referidos__subtitle">Completa el formulario para participar</p>
                    </div>

                {
                    show ?  <>
                            <div className="referidos__section">
                                <ul className="referidos__menu">
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button"><span>1</span></button>
                                        <p className="referidos__menu-text">Información General</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>2</span></button>
                                        <p className="referidos__menu-text">Formulario</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>3</span></button>
                                        <p className="referidos__menu-text">Condiciones</p>
                                    </li>
                                </ul>
                            </div>
                            <ReferidosMain/>
                            <div className="referidos__button-container">
                                <button className="referidos__button">
                                    <span>Anterior</span>
                                </button>
                                <button onClick={()=>setShow(!show)} className="referidos__button" >
                                    <span>Siguiente</span>
                                </button>
                            </div>
                            </>

                            
                    : null
                }

                {
                    !show ?  <>
                            <div className="referidos__section">
                                <ul className="referidos__menu">
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>1</span></button>
                                        <p className="referidos__menu-text">Información General</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button"><span>2</span></button>
                                        <p className="referidos__menu-text">Formulario</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>3</span></button>
                                        <p className="referidos__menu-text">Condiciones</p>
                                    </li>
                                </ul>
                            </div>
                            <ReferidosForm/>
                            <div className="referidos__button-container">
                                <button className="referidos__button">
                                    <span>Anterior</span>
                                </button>
                                <button onClick={()=>setShow(!show)} className="referidos__button" >
                                    <span>Siguiente</span>
                                </button>
                            </div>
                            </>

                            
                    : null
                }

                {
                    !show ?  <>
                            <div className="referidos__section">
                                <ul className="referidos__menu">
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>1</span></button>
                                        <p className="referidos__menu-text">Información General</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button-hover"><span>2</span></button>
                                        <p className="referidos__menu-text">Formulario</p>
                                    </li>
                                    <li className="referidos__menu-item">
                                        <button className="referidos__menu-button"><span>3</span></button>
                                        <p className="referidos__menu-text">Condiciones</p>
                                    </li>
                                </ul>
                            </div>
                            <ReferidosTerminos/>
                            <div className="referidos__button-container">
                                <button className="referidos__button">
                                    <span>Anterior</span>
                                </button>
                                <button onClick={()=>setShow(!show)} className="referidos__button" >
                                    <span>Siguiente</span>
                                </button>
                            </div>
                            </>

                            
                    : null
                }

            </section>

            <Footer />
        </>        
    );
}

export default Referidos;