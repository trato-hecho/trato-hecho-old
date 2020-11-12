import React from 'react'
import '../App.css'
import './Main.css'

function Main(){

    return (
        <main className="main">
            <section className="main__section">
                <div className="main__section--container">
                    <h1 className="main__section--title">La plusvalía de un bien inmueble puede darte grande beneficios.</h1>
                </div>

                <div className="main__section--container">
                    <div className="main__section--search">
                        <label className="main__section--search-label">Colonia</label>
                        <select className="main__section--search-select">
                            <option className="main__section--search-option">

                            </option>
                        </select>
                    </div>
                    <div className="main__section--search">
                        <label className="main__section--search-label">Precio</label>
                        <select className="main__section--search-select">
                            <option className="main__section--search-option">

                            </option>
                        </select>
                    </div>

                    <div className="main__section--search">
                        <button className="main__section--search-button">
                            <img className="main__section--search-button-img" src="https://firebasestorage.googleapis.com/v0/b/voltaic-tuner-270719.appspot.com/o/icons%2Fsearch-icon.svg?alt=media&token=eb8b00b5-5069-4655-9815-e22b0b730b3f" />
                        </button>
                    </div>

                </div>
                

            </section>
            <section>

            </section>
        </main>
    )

}

export default Main;