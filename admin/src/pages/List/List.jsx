import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../assets/assets';

const List = ({url}) => {
    

    const [list, setList] = useState([]);

    // Fetch list of food items when the component mounts
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);

            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Failed to load the list.");
            }
        } catch (error) {
            toast.error("An error occurred while fetching the list.");
        }
    };

    // Remove food item by ID
    const removeFood = async (foodId) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

            if (response.data.success) {
                toast.success("Food item removed successfully.");
                await fetchList(); // Refetch the list after removing the food item
            } else {
                toast.error("Failed to remove food item.");
            }
        } catch (error) {
            toast.error("An error occurred while removing the food item.");
        }
    };

    useEffect(() => {
        fetchList();  // Fetch list when component mounts
    }, []);

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => (
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/` + item.image} alt={item.name} width='50px' />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>Rs {item.price}</p>
                        <p onClick={() => removeFood(item._id)} className='cursor'>X</p> {/* Use _id instead of _Id */}
                    </div>
                ))}
            </div>
            <ToastContainer /> 
        </div>
    );
};

export default List;
