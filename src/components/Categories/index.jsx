import React from 'react';
import './style.scss';

const Categories = ({categories, handleSelect, selectedCategory}) =>{
    return(
        <div className='categories'>
                        {categories?.map((cat)=>{
                            return(
                                <button onClick={()=>handleSelect(cat)} className={selectedCategory === cat.strCategory ? "active" : ''}>{cat.strCategory}</button>
                            )
                        })}
       </div>
    )
}

export default Categories;