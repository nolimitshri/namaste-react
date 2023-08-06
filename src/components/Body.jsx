import ResCard, {withPromotedLabel} from "./ResCard";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import useOnlineStatus from "../utils/useOnlineStatus";
// import useListOfRestaurants from "../utils/useListOfRestaurants";

const Body = () => {

  // console.log("Rendered!!!")
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const [searchText, setSearchText] = useState([]);


  // const listOfRestaurants = useListOfRestaurants();
  // setFilteredRestaurants(listOfRestaurants)

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  console.log("Body Rendered... ", listOfRestaurants);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API, {mode: 'cors'});

    const jsonData = await data.json();
    setListOfRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  useEffect(() => {
    fetchData();
  }, []);

  // If listOfRestaurants is empty we will show a spinning screen
  // console.log(filteredRestaurants);

  const onlineStatus = useOnlineStatus();

  if(!onlineStatus){
    return (
      <h1>Looks like you are offline. Please check your router..</h1>
    )
  }

  return listOfRestaurants.length === 0 ? <Shimmer></Shimmer> : (
    <div className="body">
      <div className="flex ">
        <div className="search m-4 p-4">
          <input type="text" className="p-1 rounded-md border border-solid border-black" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="px-1 py-1.5 bg-blue-400 ml-3 rounded-lg" onClick={() => {

            const filteredList = listOfRestaurants.filter(
              (res) => res?.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredList);
          }}>Search</button>
        </div>
        <div className="my-4 p-4">
          <button
            className="px-4 py-1.5 bg-gray-200 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Restaurant Card here as a Separate Component */}
        {filteredRestaurants.map((restaurant) => {
          return <Link key={restaurant?.info.id} to={"/restaurants/"+restaurant?.info.id}> 
            {restaurant?.info.promoted ? (<RestaurantCardPromoted resData={restaurant?.info} />) : (<ResCard resData={restaurant?.info} />)}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
