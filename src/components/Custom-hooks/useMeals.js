import { useEffect, useState } from "react";


const useMeals = (userValue) => {

    

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userValue}`
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        
      
       

       
        
    },[userValue])
    

    return [meals, setMeals]
};

export default useMeals;