import React, { useState } from 'react';
import useCategory from '../../hooks/Category';
import './style.scss';
import Categories from '../Categories';
import useMeals from '../../hooks/Meals';

const Videos = () =>{

    const [selected, setSelected] = useState('Dessert');
    const {categories, setCategories, loading, setLoading} = useCategory();
    const {meals, setMeals} = useMeals();

    const handleSelectCategory = (category) =>{
        setSelected(category?.strCategory);
    }
    
    const filteredVideos = () =>{
        return meals?.filter((meal)=> meal.strCategory === selected);
    }

    const filteredListVideos = filteredVideos();
    console.log(filteredListVideos);

    return(
        <div className="video_section_wrapper">
            <h2>Videos</h2>
            <div className='video_categories'>
            <Categories
                    categories={categories} 
                    setCategories={setCategories}
                    selectedCategory={selected}
                    setSelectedCategory={setSelected}
                    handleSelect={handleSelectCategory}
                />
            </div>
            <div className='videos'>
            {filteredListVideos?.map((meal) => {
                const youtubeId = meal.strYoutube?.split('v=')[1];
                const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
                return (
                        <div className='video_section'>
                            {youtubeId ? (
                                <iframe
                                    width="100%"
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
                )
            })}
            </div>
        </div>
    )
}

export default Videos;