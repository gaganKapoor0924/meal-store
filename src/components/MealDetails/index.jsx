import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

const MealDetails = () => {
    const { id } = useParams();
    // console.log(id);

    const [mealData, setMealData] = useState(null);

    useEffect(() => {
        fetchMealData();
    }, [])

    const fetchMealData = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const result = await response.json();
        console.log(result.meals);
        setMealData(result?.meals);
    }




    return (
        <div className='meal_details'>
            {mealData?.map((meal) => {
                const youtubeId = meal.strYoutube?.split('v=')[1];
                const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
                return (
                    <>
                        <h2>{meal.strMeal}</h2>
                        <div className='video_section'>
                            {youtubeId ? (
                                <iframe
                                    width="560"
                                    height="315"
                                    src={embedUrl}
                                    title={meal.strMeal}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <p>No video available</p>
                            )}
                        </div>
                        <div className='instructions'>
                            <p>{meal.strInstructions}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default MealDetails;