import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

function RestaurantMenu() {

  const { resId } = useParams();

  const restaturentInfo = useRestaurantMenu(resId)

  if (!restaturentInfo) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    restaturentInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaturentInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards[1]?.card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((itemCard) => (
          <li key = {itemCard.card.info.id}>
            {itemCard.card.info.name} ---- Rs. {itemCard.card.info.price / 100}
          </li>
        ))}
      </ul>
      <p>{costForTwoMessage}</p>
    </div>
  );
}

export default RestaurantMenu;
