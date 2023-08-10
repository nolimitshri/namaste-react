/* eslint-disable no-unused-vars */
import ResCard, { withPromotedLabel } from "./ResCard";
import { useState, useEffect } from "react";
import { SWIGGY_API, SWIGGY_API_COORDS } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // console.log("Rendered!!!")
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState([]);

  const [userCoordinates, setUserCoordinates] = useState({
    lat: "28.5169378",
    lng: "77.17655479999999",
  });

  const [city, setCity] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResCard);

  const fetchDataByCoordinates = async (latitude, longitude) => {

    console.log(userCoordinates);

    const URL = SWIGGY_API_COORDS(latitude, longitude);

    console.log("CUSTOM: ", URL);
    console.log("DEFAULT: ", SWIGGY_API);

    try{
      const data = await fetch(URL, { mode: "cors" });
      
      const jsonData = await data.json();

      console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);


      setListOfRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

      setFilteredRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );

    }catch(e){
      console.log(e);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(position.coords);
          setUserCoordinates({
            lat: latitude,
            lng: longitude,
          });
          fetchDataByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
          fetchDataByCoordinates(userCoordinates.lat, userCoordinates.lng);
        }
      );
    } else {
      console.log("Geolocation not available in this browser.");
      fetchDataByCoordinates(userCoordinates.lat, userCoordinates.lng);
    }
  }, [city]);

  // If listOfRestaurants is empty we will show a spinning screen
  // console.log(filteredRestaurants);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks like you are offline. Please check your router..</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="w-[46%] search ml-8 p-4">
          <input
            style={{ outline: "none" }}
            type="text"
            className="py-1 pl-1 pr-7 rounded-md border border-solid border-black w-5/12"
            value={searchText}
            placeholder="Search for Restaurants"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mt-[10px] absolute left-[19rem]"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurants(filteredList);
            }}
          >
            <FaSearch />
          </button>
        </div>

        <div className="w-6/12 p-4 text-right">
          {city && (
            <h1 className="text-2xl font-bold">
              Top restaurant chains in {city}
            </h1>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly">
        {/* Restaurant Card here as a Separate Component */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant?.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <ResCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
