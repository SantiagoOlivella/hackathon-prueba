import axios from 'axios';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Header } from './Header';


const initialRecetas =
    [{ strMeal: "Plato1", strMealThumb: "", idMeal: "1" }, { strMeal: "Plato2", strMealThumb: "", idMeal: "2" }, { strMeal: "Plato3", strMealThumb: "", idMeal: "3" }];

export const Recetas = () => {
    
    const history = useHistory();
    const location=useLocation();
    const [recetas, setRecetas] = useState(initialRecetas);

    useEffect(() => {
        const {q=""}=queryString.parse(location.search);
        if(q===""){
            return setRecetas(initialRecetas)
        }else{
            getData(q)
        }
    }, [])

    const getData = async (q) => {
        const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`);
        setRecetas(data.meals);
    };

    const search = (e) => {
        history.push('?q='+e.target.value);
        getData(e.target.value);
    }
    return (
        <div>
            <Header />
            <div className="container">
                <section className="col-md-8 form-group mx-auto">
                    <h1 className="text-center" >Recetas</h1>
                    <input type="text" placeholder="Busca por el ingrediente principal de tu receta" className="form-control" onChange={e => search(e)} />
                </section>
                <section className="row">
                    {typeof recetas !== "undefined" &&
                        recetas.map(item => (
                            <Link to="/" className="col-md-4 my-3 text-decoration-none" key={item.idMeal} >
                                <div className="card">
                                    <div className="card-header">
                                        <img src={item.strMealThumb} alt="img" className="card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3> {item.strMeal} </h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}
