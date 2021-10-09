import axios from 'axios';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Header } from './Header';

// Se crea arreglo para banners principales de temporada
const initialRecetas =
    [{ strMeal: "Recomendado 1", strMealThumb: "img/recomendado1.jpg", idMeal: "1" }, { strMeal: "Recomendado 2", strMealThumb: "img/recomendado2.jpg", idMeal: "2" }, { strMeal: "Recomendado 3", strMealThumb: "img/recomendado3.jpg", idMeal: "3" }];
// Fin de Banners principales

export const Recetas = () => {


    const history = useHistory();
    const location = useLocation();
    const [recetas, setRecetas] = useState(initialRecetas);


    useEffect(() => {
        const { q = "" } = queryString.parse(location.search);
        if (q === "") {
            return setRecetas(initialRecetas)
        } else {
            getData(q)
        }
    }, [location.search])

    const getData = async (q) => {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
            setRecetas(data.meals);
        } catch (error) {
            console.log('error consultando apis', error.message)
        }
    };

    const search = (e) => {
        history.push('?q=' + e.target.value);
        getData(e.target.value);
    }
    return (
        <div>
            <Header />
            <div className="container m-5">
                <section className="col-md-8 form-group mx-auto">
                    <div className="container" id="containerTituloRecetas">
                        <h1 className="text-center mt-5 mb-3" >Búsca tu receta aquí <i className="fas fa-level-down-alt"></i></h1>
                    </div>
                    <div className=" input-group mb-5">
                        <i className=" input-group-text fas fa-angle-double-right"></i>
                        <input type="text" placeholder="Busca por el ingrediente principal de tu receta" className="form-control p-3" onChange={e => search(e)} id="inputRecetas" />
                        <i className=" input-group-text fas fa-angle-double-left"></i>
                    </div>
                </section>
                <div className="container" id="containerTituloRecetas">
                    <section className="row">
                        {recetas !== null ?
                            recetas.map(item => (
                                <Link to={`/description/${item?.idMeal}`} className="col-md-4 my-3 text-decoration-none" key={item.idMeal} >
                                    <div className="card" id="titleCard">
                                        <div className="card-body"  >
                                            <h3 className="text-center" > {item?.strMeal} </h3>
                                        </div>
                                        <div className="card-header">
                                            <img src={item?.strMealThumb} alt="img" className="card-img-top" />
                                        </div>

                                    </div>
                                </Link>
                            )) : <div className="col-12">
                                <div className="text-center fw-bold text-danger">
                                    <h1> <i className="fas fa-sad-tear"></i> Opps¡ no encontramos resultados, por favor intenta con otro ingrediente <i className="fas fa-upload"></i></h1>
                                </div>
                            </div>
                        }

                    </section>
                </div>
            </div>
        </div>
    )
}
