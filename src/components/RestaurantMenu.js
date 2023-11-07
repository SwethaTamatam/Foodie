import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from 'react'


function RestaurantMenu() {

  const { resId } = useParams();

  const restaturentInfo = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = useState(null)


  if (!restaturentInfo) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaturentInfo?.cards[0]?.card?.card?.info;

  const categories = restaturentInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
  ?.cards.filter(c => c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
      {
        categories?.map((category,index)=> 
        <RestaurantCategory 
          data={category?.card?.card}
          showItems={index==showIndex}
          setShowIndex = {()=>{index===showIndex?setShowIndex(null):setShowIndex(index)}}
        />)
      }
    </div>
  );
}

export default RestaurantMenu;
