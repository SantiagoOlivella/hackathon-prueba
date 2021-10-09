import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ShowLoading } from './ShowLoading';

// Este arreglo se va a usar en un principio para mostrar platos en temporadas especiales
const initialRecetas =
    [{ strMeal: "Plato1", strMealThumb: "", idMeal: "1" }, { strMeal: "Plato2", strMealThumb: "", idMeal: "2" }, { strMeal: "Plato3", strMealThumb: "", idMeal: "3" }];

export const Receta = () => {

    const { id } = useParams();
    const [description, setDescription] = useState(initialRecetas);
    const history = useHistory();
    const [Loading, setLoading] = useState(false)

    // Estamos consumiendo la Api y le enviamos el id por Params desde la Url, adicional seteamos la funcion loguin para activar/desactivar el snipper
    useEffect(() => {
        const search = async () => {
            setLoading(true);
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setLoading(false);
            setDescription(data.meals);
        }
        search();
    }, [id])

    // Esta función es para devolverse dentro de la aplicación

    const back = () => {
        history.length <= 2 ? history.push("/recetas") : history.goBack();
    }

    return (

        // Inicia creación de card para mostrar la información
        <div className="card" >
            {
                // Evaluamos el estado del Snipper para saber cuando mostrarlo
                Loading ? <ShowLoading /> :
                    // Iniciamos creación de la card para mostar la información de las recetas, esto lo hacemos recorriendo el arreglo con un map pero antes evaluamos que el resultado de la viarble description que es donde estamos guardando el resultado de la api si traiga un resultado correcto.
                    <div id="containerTituloRecetas">
                        {description !== null ?
                            description.map((item, i) => (
                                <div className="row" key={i}>
                                    <div className="col-lg-4 card mt-5 pt-5" id="titleCard" >
                                        <div className="m-5 p-5 card-header">
                                            <h1 className=" text-center m-3 p-3" id="titleReceta" >{item.strMeal}</h1>
                                            <h4 className="text-center" id="titleReceta" > Categoría: <span className="badge bg-dark">{item?.strCategory}</span></h4>
                                            <p className="text-center"> <span className="badge bg-info text-dark">{item?.strArea}</span></p>
                                            <div className="card-body">
                                                <img src={item?.strMealThumb} alt="img" className="card-img-top" />
                                                <h5 className="card-title text-center mt-3" id="titleReceta">Ingredientes principales</h5>
                                                <ol className="list-group list-group-numbered" id="">
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient1}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient2}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient3}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient4}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient5}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient6}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient7}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient8}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient9}</li>
                                                    <li className="list-group-item" id="titleReceta">{item.strIngredient10}</li>
                                                </ol>
                                                <div className=".alert alert-info">
                                                    <strong>¿Esta es tu receta?</strong> consulta todos los ingredientes dando click en el siguiente enlace <a href={item.strSource} className="alert-link">Ingredientes</a>
                                                </div>
                                            </div>
                                            <div className="card-footer text-center">
                                                <button className="btn btn-primary btn-lg" onClick={back} >volver</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 container" >
                                        <div className="m-5 p-5 card-header">
                                            <h1 className="text-center" id="titleCard" >Instrucciones</h1>
                                            <h5 className=" text-center m-3 p-3" >{item.strInstructions}</h5>
                                            <h1 className="text-center" id="titleCard" >Mira nuestro video con las instrucciones</h1>
                                            <a href={item.strYoutube} className="text-decoration-none" > <h3 className="text-center" >Click Aquí <i className="fas fa-eye"></i><i className="far fa-eye"></i> </h3> </a>
                                            <div className="card-body">
                                                <img src="/img/instruccionesReceta.jpg" alt="img" className="card-img-top" />
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )) :
                            // Si el resultado de la Api no es correcto entonces hacemos uso del arreglo definido como  vitrina de platos especiales. Creamos la card para mostrar esa información
                            <div className="container m-5 p-5" >
                                <h1 className="text-center m-5 p-3 pt-5" id="titleCard">Para esta semana te tenemos los siguientes recomendados</h1>
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <h1 className="text-center p-2" id="titleCard">Pizza hot</h1>
                                            <img src="/img/recomendado1.jpg" className="card-img-top" alt="img" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center" id="titleReceta">Instrucciones</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit alias facere aut rerum, quo dolores ipsa iste repellendus eos voluptatum..</p>
                                                <h5 className="card-title text-center" id="titleCard">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                </ol>
                                                <div className="card-footer text-center">
                                                    <button className="btn btn-primary btn-lg" onClick={back} >volver</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <h1 className="text-center p-2" id="titleCard">Peperoni hot</h1>
                                            <img src="/img/recomendado2.jpg" className="card-img-top" alt="img" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center" id="titleReceta">Instrucciones</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit alias facere aut rerum, quo dolores ipsa iste repellendus eos voluptatum..</p>
                                                <h5 className="card-title text-center" id="titleCard">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                </ol>
                                                <div className="card-footer text-center">
                                                    <button className="btn btn-primary btn-lg" onClick={back} >volver</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <h1 className="text-center p-2" id="titleCard">Taconishi</h1>
                                            <img src="/img/recomendado3.jpg" className="card-img-top" alt="img" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center" id="titleReceta">Instrucciones</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit alias facere aut rerum, quo dolores ipsa iste repellendus eos voluptatum..</p>
                                                <h5 className="card-title text-center" id="titleCard">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item" id="titleReceta">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                </ol>
                                                <div className="card-footer text-center">
                                                    <button className="btn btn-primary btn-lg" onClick={back} >volver</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
            }

        </div>
    )
}
