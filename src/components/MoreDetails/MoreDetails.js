import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MoreDetails.css";

const MoreDetails = () => {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState("");

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]));
  }, [id]);


 const ingredients = Object.values(mealDetails).slice(9,20);
 
 const filtered = ingredients.filter((el) => {
    return el !== null && typeof el !== 'undefined' && el !== '';
  });
  console.log(filtered);
 
  
  

  return (
    <div className="more-details">

      <div className="more-details-header">

        <div className="details-img">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        </div>
        <h2 className="recipe-name">
          Recipe Name : <span className="colored">{mealDetails.strMeal}</span>{" "}
        </h2>
        <p className="origin">Origin: {mealDetails.strArea}</p>

      </div>
      <div className="ingredients">
          {filtered.map(ingredient => <span className='ingredient' >{ingredient}</span>)}
          
      </div>



    </div>
  );
};

export default MoreDetails;
