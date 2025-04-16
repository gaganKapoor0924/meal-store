import React, { useEffect, useState } from 'react';
import './style.scss';
import Categories from '../Categories';
import FilteredList from '../FilteredList';
import useCategory from '../../hooks/Category';
import useMeals from '../../hooks/Meals';

const Dashboard = () =>{

    
    const [selectedCategory, setSelectedCategory] = useState('Dessert');

    const {categories, loading, setCategories,setLoading} = useCategory();
    
    const {meals, setMeals} = useMeals();
    

    const handleSelect = (category) =>{
        console.log('select',category);
        setSelectedCategory(category?.strCategory);
    }

    const filteredList = ()=>{
        return meals?.filter((meal)=> meal.strCategory === selectedCategory);
    }

    const filteredMeals = filteredList();

    if(loading){
        return <div className='loader'>Loading ...</div>
    }

    return(
        <div className='dashboard_section'>
                <h2 className='heading'>Explore Meal Categories</h2>
                <Categories 
                    categories={categories} 
                    setCategories={setCategories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    handleSelect={handleSelect}
                />
                <div className='category_heading'>
                <h2>{selectedCategory} Meals </h2>
                </div>
                <FilteredList
                    filteredMeals={filteredMeals}
                />
        </div>
    )
}

export default Dashboard;