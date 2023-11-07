import { CDN_URL } from "../utils/constants";
const RestaurentCard = ({ item }) => {

    const { name, cuisines, avgRating, costForTwo, sla: { deliveryTime }, cloudinaryImageId } = item
    return (
        <div  className="m-2 p-4 w-[250px] h-[500px] bg-gray-100 rounded-lg">
            <img
                src={CDN_URL + cloudinaryImageId}
                alt="restarent image"
                className="rounded-lg"
            />
            <h3 className="font-bold py-4 text-xl">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating != '--' ? `${avgRating} stars` : null}</h4>
            <h4>{deliveryTime} min</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurentCard) => {
    return (props) => {
        const {aggregatedDiscountInfoV3} =props.item

        return (
            <div data-testid="resCard">
            {props.item.aggregatedDiscountInfoV3?<label className="absolute bg-black text-white m-2 p-2 rounded-lg">{aggregatedDiscountInfoV3.header +" "+aggregatedDiscountInfoV3.subHeader}</label>:null}
                <RestaurentCard {...props} />
            </div>
        );
    };
}
export default RestaurentCard; 