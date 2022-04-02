import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoreDetails.css'


const MoreDetails = () => {

    const {id} = useParams();
    const [mealDetails, setMealDetails] = useState('');

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setMealDetails(data.meals[0]));
    },[id])
    
   


    return (
        <div className='more-details'>
            <h2 className='recipe-name'>Recipe Name : <span className="colored">{mealDetails.strMeal}</span> </h2>
            <p className='origin'>Origin: {mealDetails.strArea}</p>
            
        </div>
    );
};

export default MoreDetails;