import ResCard from "./ResCard";
import "../css/body.css";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {

  console.log("Rendered!!!")
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const [searchText, setSearchText] = useState([]);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API, {mode: 'cors'});

    const jsonData = await data.json();

    setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);


    console.log(filteredRestaurants);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // If listOfRestaurants is empty we will show a spinning screen

  return listOfRestaurants.length === 0 ? <Shimmer></Shimmer> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="search-btn" onClick={() => {

            const filteredList = listOfRestaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filteredList);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Card here as a Separate Component */}
        {filteredRestaurants.map((restaurant) => {
          return <ResCard key={restaurant.data.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
