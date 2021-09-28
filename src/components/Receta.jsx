import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const initialRecetas =
    [{ strMeal: "Plato1", strMealThumb: "", idMeal: "1" }, { strMeal: "Plato2", strMealThumb: "", idMeal: "2" }, { strMeal: "Plato3", strMealThumb: "", idMeal: "3" }];

export const Receta = () => {

    const history = useHistory();
    const { id } = useParams();
    const [description, setDescription] = useState(initialRecetas)



    useEffect(()=>{
        const search = async () => {
            const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setDescription(data);
            console.log(description)
            console.log(data.meals)
        }
        search();
    },[id])

    return (
        <div className="card" >
            <div className="row">
                <div className="col-md-4">
                    <img src={description.strMealThumb} alt="imgReceta" />
                    <h1>{description.idMeal}</h1>
                </div>
            </div>

        </div>
    )
}
