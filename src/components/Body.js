import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurentCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredRestaurents(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus)
    return (
      <h1>
        {" "}
        Looks like you are offline . Please check your internet connection
      </h1>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurents = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurents(filteredRestaurents);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-50"
            onClick={() => {
              setFilteredRestaurents(
                listOfRestaurants.filter((res) => res.info?.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurent
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants?.map((item) => {
          return (
            <Link key={item.info?.id} to={"/restaurants/" + item?.info?.id}>
              <RestaurantCardPromoted item={item?.info} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
