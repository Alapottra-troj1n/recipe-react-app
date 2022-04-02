import { faBackward, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./MoreDetails.css";

const MoreDetails = () => {
  const { id } = useParams();
  const [mealDetails, setMealDetails] = useState('');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => setMealDetails(data.meals[0]));
  }, [id]);

  const ingredients = Object.values(mealDetails).slice(9, 20);

  const filtered = ingredients.filter((el) => {
    return el !== null && typeof el !== "undefined" && el !== "";
  });
  console.log(filtered);

  return (
    
  
    <div className="more-details">
      {mealDetails === '' ? <Spinner/> : <>
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
        {filtered.map((ingredient) => (
          <span className="ingredient">{ingredient}</span>
        ))}
      </div>
      <div className="instruction">
        <p>{mealDetails.strInstructions}</p>
      </div>
      <div className="details-footer">
        <button className="goback-btn">
          <Link className="goback-btn-link" to="/">
         <FontAwesomeIcon icon={faBackward} ></FontAwesomeIcon>   Go Back
          </Link>
        </button>
        <button className="youtube-btn">
          <a href={mealDetails.strYoutube} target="_blank">
            Tutorial  <FontAwesomeIcon icon={faVideo} ></FontAwesomeIcon>
          </a>
        </button>
      </div>
      
      </> }
     

    </div>
  );
};

export default MoreDetails;
