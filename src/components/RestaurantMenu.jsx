/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [showIndex, setShowIndex] = useState(null);

    const resInfo  = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer/>
    }
    
    const {name, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
    // cards[1].card.card["@type"]
    // [0].card.card.title
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(categories)


    return (
        <div className="text-center">
            <h1 className="text-2xl my-6 font-bold">{name}</h1>
            <p className="font-semibold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</p>
            {/* For each categories found build an accordion */}
            {
                categories.map((category, index) => {
                    return (
                        <ResCategory key={index} data={category?.card?.card} setShowIndex={() => setShowIndex(index)} showItems={index === showIndex ? true: false}/>
                    )
                })
            }

        </div>
    )

}

export default RestaurantMenu;