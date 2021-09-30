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

                    <div className="row">
                        {description !== null ?
                            description.map((item, i) => (
                                <div className="col-md-4" key={i}>
                                    <img src={item.strMealThumb} alt="imgReceta" />
                                    <h1>{item.idMeal}</h1>
                                </div>
                            )) :
                            <div>
                                <h1>Acá van recetas manuales</h1>
                            </div>
                        }
                        <button className="btn btn-primary" onClick={back} >volver</button>
                    </div>
            }

        </div>
    )
}
