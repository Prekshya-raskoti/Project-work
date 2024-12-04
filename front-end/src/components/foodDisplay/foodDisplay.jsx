import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/foodItem'

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list && Array.isArray(food_list) && food_list.length > 0 ? (
                    food_list.map((item, index) => {
                        // Only log if category matches
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem 
                                    key={index} 
                                    id={item._id} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    image={item.image} 
                                />
                            );
                        }
                        return null; // Handle case where category doesn't match
                    })
                ) : (
                    <p>No food items available</p> // Fallback for empty or undefined food_list
                )}
            </div>
        </div>
    )
}

export default FoodDisplay;
