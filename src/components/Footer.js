import React from 'react'
import '../App.css'
import './Footer.css'

function Footer(){


    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="footer__menu">
                    <h3 className="footer__menu--title">Más:</h3>
                    <ul className="footer__menu--list">
                        <li className="footer__menu--item">
                            <a href="./Home" className="footer__menu--link"><span> - </span>Inicio</a>
                        </li>
                        <li className="footer__menu--item">
                            <a href="./Propiedades" className="footer__menu--link"><span> - </span>Propiedades</a>
                        </li>
                        <li className="footer__menu--item">
                            <a href="./Como-funciona" className="footer__menu--link"><span> - </span>¿Cómo funciona?</a>
                        </li>
                        <li className="footer__menu--item">
                            <a href="./Acerca_de" className="footer__menu--link"><span> - </span>¿Quiénes somos?</a>
                        </li>
                        <li className="footer__menu--item">
                            <a href="./Referidos" className="footer__menu--link"><span> - </span>Refiere</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <h3 className="footer__menu--title">Contáctanos:</h3>
                    <a href="tel:3332015081" className="footer__menu--tel">01) 33 3201 5081</a>
                    <p className="footer__menu--location-text">Av. Manuel Acuña 2952, Prados Providencia, 44670 Guadalajara, Jal.</p>
                </div>
                <div className="footer__menu">
                    <h3 className="footer__menu--title">Síguenos:</h3>
                    <ul className="footer__social">
                        <li className="footer__social--item" >
                            <a className="footer__social--link" href="https://www.facebook.com/tratohechomex/" target="__blank">
                                <img className="footer__social--img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Ffacebook.svg?alt=media&token=cf10ff34-9aa1-4777-8294-a7aa5ff90a29" alt="facebook image"/>
                            </a>
                        </li>
                        <li className="footer__social--item" >
                            <a className="footer__social--link" href="https://www.instagram.com/tratohechomex/" target="__blank">
                                <img className="footer__social--img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Finstagram-bosquejado.svg?alt=media&token=7097c095-a5a1-4581-8582-33293c2d0e50" alt="instagram image"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                <span className="footer__copyright-text">© 2019 Trato Hecho.</span>
                <a className="footer__copyright-link" href="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/documents%2Faviso-de-privacidad-trato-hecho.pdf?alt=media&token=60dbb63d-7a97-436e-bf3c-f46088d24063" target="__blank">Términos y condiciones de uso.</a>
            </div>
        </footer>
    )


}

export default Footer;