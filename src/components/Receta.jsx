import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { ShowLoading } from './ShowLoading';

const initialRecetas =
    [{ strMeal: "Plato1", strMealThumb: "", idMeal: "1" }, { strMeal: "Plato2", strMealThumb: "", idMeal: "2" }, { strMeal: "Plato3", strMealThumb: "", idMeal: "3" }];

export const Receta = () => {

    const { id } = useParams();
    const [description, setDescription] = useState(initialRecetas);
    const history = useHistory();
    const [Loading, setLoading] = useState(false)

    useEffect(() => {
        const search = async () => {
            setLoading(true);
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setLoading(false);
            setDescription(data.meals);
        }
        search();
    }, [id])

    const back = () => {
        history.length <= 2 ? history.push("/recetas") : history.goBack();
    }

    return (
        <div className="card" >
            {
                Loading ? <ShowLoading /> :

                    <div id="containerTituloRecetas">
                        {description !== null ?
                            description.map((item, i) => (
                                <div className="row" key={i}>
                                    <div className="col-lg-4 card" id="titleCard" >
                                        <div className="m-5 p-5 card-body">
                                            <h1 className=" text-center m-3 p-3" id="titleReceta" >{item.strMeal}</h1>
                                            <div className="card-header">
                                                <img src={item?.strMealThumb} alt="img" className="card-img-top" />
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
                            <div className="container m-5 p-5" >
                                <h1 className="text-center m-5 p-3" id="titleCard">Para esta semana te tenemos los siguientes recomendados</h1>
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <h1 className="text-center p-2" id="titleCard">Pizza hot</h1>
                                            <img src="/img/recomendado1.jpg" className="card-img-top" alt="img" />
                                            <div className="card-body">
                                                <h5 className="card-title text-center" id="titleReceta">Instrucciones</h5>
                                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit alias facere aut rerum, quo dolores ipsa iste repellendus eos voluptatum..</p>
                                                <h5 className="card-title text-center" id="titleReceta">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
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
                                                <h5 className="card-title text-center" id="titleReceta">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
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
                                                <h5 className="card-title text-center" id="titleReceta">Ingredientes</h5>
                                                <ol className="list-group list-group-numbered">
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
                                                    <li className="list-group-item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, culpa.</li>
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
