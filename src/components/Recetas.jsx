import axios from 'axios';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Header } from './Header';

// Se crea arreglo para banners principales de temporada
const initialRecetas =
    [{ strMeal: "Recomendado 1", strCategory:"FastFood", strMealThumb: "img/recomendado1.jpg", idMeal: "1" }, { strMeal: "Recomendado 2", strCategory:"Esparragueison", strMealThumb: "img/recomendado2.jpg", idMeal: "2" }, { strMeal: "Recomendado 3", strCategory:"MexicanFood", strMealThumb: "img/recomendado3.jpg", idMeal: "3" }];
// Fin de Banners principales

export const Recetas = () => {


    const history = useHistory();
    const location = useLocation();
    const [recetas, setRecetas] = useState(initialRecetas);

    // Se crea la constante q y se la envíamos a la función donde consumimos la api, esta constante viene del search que adicional es la funcion que me lee lo que el cliente ingresa en el input
    useEffect(() => {
        const { q = "" } = queryString.parse(location.search);
        if (q === "") {
            return setRecetas(initialRecetas)
        } else {
            getData(q)
        }
    }, [location.search])

    // Recibe la q y con esta es que buscamos la APi y la consumimos. Seteamos la variables Recetas que es donde vamos a guardar el resultado de la API

    const getData = async (q) => {
        try {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
            setRecetas(data.meals);
        } catch (error) {
            console.log('error consultando apis', error.message)
        }
    };

    // Recibimos el evento del Input y se lo envíamos a la función getData
    const search = (e) => {
        history.push('?q=' + e.target.value);
        getData(e.target.value);
    }
    return (
        <div>
            {/* Importamos el Header */}
            <Header />
            {/* Creamos el input donde vamos a buscar la receta */}
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
                        {/* Evaluamos que el resultado que guardamos en la variable recetas sea un dato valido para recorrer con el .map */}
                        {recetas !== null ?

                        // Si el resultado es correcto creamos creamos las cards para mostrar la información y linkeamos las para que al darle clic me lleve a la ruta deseada y le envíamos el id
                            recetas.map(item => (
                                <Link to={`/description/${item?.idMeal}`} className="col-md-4 my-3 text-decoration-none" key={item.idMeal} >
                                    <div className="card" id="titleCard">
                                        <div className="card-header"  >
                                            <h3 className="text-center" id="titleReceta" > {item?.strMeal} </h3>
                                            <h4 className="text-center" id="titleReceta" > Categoría: <span className="badge bg-dark">{item?.strCategory}</span></h4>
                                            <p className="text-center"> <span className="badge bg-info text-dark">{item?.strArea}</span></p>                                            
                                        </div>
                                        <div className="card-body">
                                            <img src={item?.strMealThumb} alt="img" className="card-img-top" />
                                        </div>

                                    </div>
                                </Link>
                            )) : 
                            // Si no es correcto me muestra el siguiente mensaje de error
                            <div className="col-12">
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
