import React from 'react'
import { Header } from './Header'

export const Home = () => {
    return (
        <div>
        {/* Importamos el Header */}
            <Header />
            {/* Inicia creación del accordion donde vamos a mostrar la información principal */}
            <div className="container" id="collapsableHome">
                <div className="accordion m-5" id="accordionHome">
                    <div className="accordion-item" id="collapsableHomeDetalle">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿Quienes somos?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionHome">
                            <div className="accordion-body">
                                <strong>Aquí encontraras las mejores recetas</strong> Nos encargamos de recopilar las mejores recetas del mundo para que con un clic las puedas llevar a tu mesa.  <a className="text-decoration" href="/recetas">Descubrelo ahora <i className="fas fa-mouse"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" id="collapsableHomeDetalle">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Contactenos
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionHome">
                            <div className="accordion-body">
                                <strong>Escribenos,</strong> Nos gusta escucharte, escribenos al<strong> whatsapp</strong> 3052541878
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" id="collapsableHomeDetalle">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Newsletter
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionHome">
                            <div className="accordion-body">
                                <strong>Mantente informado</strong> Dejanos tu correo y te mantendremos actualizado
                                <div className="input-group flex-nowrap">
                                    <span className="input-group-text" id="addon-wrapping">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                                    <button className="btn btn-success" >Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Finaliza cración del accordion
    )
}
