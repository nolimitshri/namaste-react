/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { RES_API_FR } from "../utils/constants"; 

const RestaurantMenu = () => {
    console.log("Rendering")
    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data  = await fetch(`${RES_API_FR}${resId}`, {mode: "cors"});
        
        const json = await data.json();

        setResInfo(json.data);
    }

    if(resInfo === null){
        return <Shimmer/>
    }
    
    const {name, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);


    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <br /><br />
            <h2>Recommended Items...</h2>
            <ul>
                {itemCards.map(item => (
                    <li key={item.card.info.id}>{item.card.info.name} - [Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}]</li>
                ))}
            </ul>
        </div>
    )

}

export default RestaurantMenu;