import React from 'react'
import '../App.css'
import './Header.css'



function Header(){

    return (
        <header className="header">
            <figure className="header__figure">
                <a className="header__figure--link">
                    <img src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/assets%2Flogo.png?alt=media&token=f193ae53-0c6b-4a33-a4f2-3976d5d14ec1" className="header__figure--img" />
                </a>
            </figure>
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
                <button className="header__nav--button" >
                    <img className="header__nav--button-img" src ="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Fmenu-mobile.svg?alt=media&token=908f4d01-597e-4e84-a02f-15d89e21059b"/>
                </button>
            </nav>
        </header>
    )


}

export default Header;