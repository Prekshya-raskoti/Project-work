import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'


const ExploreMenu =({category,setCategory})=>{

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'> LeafyFeast is your go-to platform for delicious vegetarian meals, now available at your fingertips. With our seamless online ordering system, you can browse a wide range of healthy and flavorful dishes tailored to satisfy your cravings.</p>
    <div className='explore-menu-list'>
      {menu_list.map((item,index)=>{
        return (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=''/>
            <p>{item.menu_name}</p>
          </div>
        )
      })} 
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu