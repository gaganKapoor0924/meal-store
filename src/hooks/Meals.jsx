import { useEffect, useState } from "react";

const useMeals= () =>{
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    

     useEffect(()=>{
            fetchMeals();
        },[])
    
        const fetchMeals = async () =>{
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
            const result = await response.json();
            setMeals(result?.meals);
            setLoading(false);
        }

    return {meals, setMeals, loading, setLoading};
    
}

export default useMeals;