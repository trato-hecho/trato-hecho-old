import React from 'react'
import '../App.css'
import './Header.css'
import { useState } from "react";
import {Animated} from "react-animated-css";

function Header(){

    const [show,setShow] = useState(false)

    return (
        <Animated animationIn="slideInDown" animationOut="bounceOutUp" animationInDuration={1000} animationOutDuration={800} isVisible={true}>

            <header className="header">
                <figure className="header__figure">
                    <a className="header__figure--link">
                        <img src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/assets%2Flogo.png?alt=media&token=f193ae53-0c6b-4a33-a4f2-3976d5d14ec1" className="header__figure--img" />
                    </a>
                </figure>
                <nav  className="header__nav-mobile">
                    {
                        show ?
                            <Animated animationIn="slideInRight" animationOut="slideOutRight" animationInDuration={800} animationOutDuration={1000} isVisible={true}>
                            <ul  className="header__nav-mobile--list" >
                                <li className="header__nav-mobile--list-item">
                                    <a href="./Propiedades" className="header__nav-mobile--list-link">Propiedades</a>
                                </li>
                                <li className="header__nav-mobile--list-item">
                                    <a href="Referidos" className="header__nav-mobile--list-link">Referidos</a>
                                </li>
                                <li className="header__nav-mobile--list-item">
                                    <a href='./Login' className="header__nav-mobile--list-link">Inicia Sesión</a>
                                </li>
                            </ul> 
                        </Animated>
                        : null
                    
                    }
                    <button onClick={()=>setShow(!show)} className="header__nav-mobile--button" >
                        <img className="header__nav-mobile--button-img" src ="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Fmenu-mobile.svg?alt=media&token=908f4d01-597e-4e84-a02f-15d89e21059b"/>
                    </button>
                </nav>
                <nav  className="header__nav">
                        <ul  className="header__nav--list" >
                            <li className="header__nav--list-item">
                                <a href="./Propiedades" className="header__nav--list-link">Propiedades</a>
                            </li>
                            <li className="header__nav--list-item">
                                <a href="Referidos" className="header__nav--list-link">Referidos</a>
                            </li>
                            <li className="header__nav--list-item">
                                <a href='./Login' className="header__nav--list-link">Inicia Sesión</a>
                            </li>
                        </ul> 
                </nav>
            </header>
        </Animated>
    )


}

export default Header;