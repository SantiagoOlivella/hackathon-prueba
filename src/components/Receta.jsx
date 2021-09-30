import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const initialRecetas =
    [{ strMeal: "Plato1", strMealThumb: "", idMeal: "1" }, { strMeal: "Plato2", strMealThumb: "", idMeal: "2" }, { strMeal: "Plato3", strMealThumb: "", idMeal: "3" }];

export const Receta = () => {

    const history = useHistory();
    const { id } = useParams();
    const [description, setDescription] = useState(initialRecetas)

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setDescription(data.meals);
        }
        search();
    }, [id])

    return (
        <div className="card" >
            <div className="row">
                {description !== null ?
                    description.map((item, i) => (
                        <div className="col-md-4" key={i}>
                            <img src={item.strMealThumb} alt="imgReceta" />
                            <h1>{item.idMeal}</h1>
                        </div>
                    )):
                    <h1>Acá van recetas manuales</h1>
                }

            </div>

        </div>
    )
}
