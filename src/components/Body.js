import RestaurentCard from "./RestaurentCard";
import resData from "../utils/resData";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurents,setListOfRestaurent] = useState(resData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           setListOfRestaurent(listOfRestaurents.filter(res=>res.data.avgRating>4))
          }}>
          Top Rated Restaurent
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((item) => {
          return <RestaurentCard key={item.data.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
