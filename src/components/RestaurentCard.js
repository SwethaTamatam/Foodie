import { CDN_URL } from "../utils/constants";
const RestaurentCard = ({item}) => {
   const {name,cuisines,avgRating,costForTwo,deliveryTime,cloudinaryImageId } = item?.data
    return (
        <div className="res-card">
            <img 
            src={CDN_URL+cloudinaryImageId}
             alt="restarent image"
             className="res-image"
             />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating!='--'?`${avgRating} stars`:null  }</h4>
            <h4>{deliveryTime} min</h4>
            <h4>Rs.{costForTwo/100} for two</h4>
        </div>
    )
}
export default RestaurentCard; 