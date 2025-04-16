import { useEffect, useState } from "react";

const useCategory = () =>{
    const [categories, setCategories] = useState([]);    
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        fetchCategories();
    },[])

    const fetchCategories = async () =>{
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        const result = await response.json();
        setCategories(result?.categories);
        setLoading(false);
    }

    return {categories, setCategories, loading, setLoading};
    
}

export default useCategory;