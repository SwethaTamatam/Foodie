import React, { useEffect } from 'react';

function RestaurantMenu() {

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId)
        const json = await data.json()
        console.log(json)
    }
  return (
    <div className='menu'>
      <h1>Name</h1>
      <img />
      <h2>Menu</h2>
      <ul>
        <li>biryani</li>
        <li>burger</li>
        <li>omlet</li>
        <li>noodles</li>
      </ul>
    </div>
  );
}

export default RestaurantMenu;
