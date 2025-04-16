import React from 'react';
import { Link } from 'react-router-dom';

const FilteredList = ({filteredMeals}) =>{
    return(
        <div className='list_items'>
                    
                        {
                            filteredMeals?.map((filtered)=>{
                                return(
                                    <div className='box'>
                                       <Link to={`/meal/${filtered.idMeal}`} className='item_wrapper'> <img src={filtered.strMealThumb}/>
                                        <h2>{filtered?.strMeal}</h2>
                                        <span>{filtered?.strTags}</span></Link>
                                    </div>
                                )
                            })
                        }
                </div>
    )
}

export default FilteredList;