import React from 'react'
import '../App.css'
import './Main.css'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Animated} from "react-animated-css";



function Main(){

    return (
        <Animated animationIn="slideInLeft"  animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
            <main className="main">
                <section className="main__section">
                    <div className="main__section--container">
                        <h1 className="main__section--title">La plusvalía de un bien inmueble puede darte grandes beneficios.</h1>
                    </div>

                    <div className="main__section--container main__section--search-container">
                        <div className="main__section--search">
                            <label className="main__section--search-label">Colonia</label>
                            <Select className="main__section--search-select">
                                <MenuItem className="main__section--search-option">

                                </MenuItem>
                            </Select>
                        </div>
                        <div className="main__section--search">
                            <label className="main__section--search-label">Precio</label>
                            <Select className="main__section--search-select">
                                <MenuItem className="main__section--search-option">
                                </MenuItem>
                            </Select>
                        </div>

                        <div className="main__section--search main__section--search-button-container">
                            <button className="main__section--search-button">
                                <img className="main__section--search-button-img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Fsearch-icon.svg?alt=media&token=eb8b00b5-5069-4655-9815-e22b0b730b3f" />
                            </button>
                        </div>

                    </div>
                    

                </section>
                <section className="main__section-referidos">
                    <figure className="main__section-referidos--img-container">
                        <img src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/img%2Freferidos-banner.png?alt=media&token=136b9c9c-3293-4ac8-b220-c8ca3f24995b" className="main__section-referidos--img" />
                    </figure>
                    <div className="main__section-referidos--button-container">
                        <button className="main__section-referidos--button">
                            <a href="./Referidos" className="main__section-referidos--button-link">Referir</a>
                        </button>
                    </div>
                </section>
            </main>
        </Animated>
    )

}

export default Main;