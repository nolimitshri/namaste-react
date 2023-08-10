/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */

// import { useEffect, useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import { CDN_URL } from "../utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
    city,
    areaName,
    avgRatingString,
    totalRatingsString,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  console.log(resInfo?.cards[0]?.card?.card?.info);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  let ratingColor = "bg-green-400";

  if (avgRatingString < "4.0") {
    ratingColor = "bg-yellow-300";
  }

  return (
    <div className="flex flex-col">
      {/* Restaurant Info */}
      <div className="mx-[23rem] my-14 flex h-auto pb-8 border-b-2 border-solid border-b-black">
        <div className="w-5/12 flex">
          <div className="w-6/12 flex items-center p-1 justify-center">
            <img
              src={CDN_URL + cloudinaryImageId}
              alt="res logo"
              className="h-24 w-36 rounded-md"
            />
          </div>
          <div className="ml-1 w-6/12">
            <h1 className="text-xl mb-1 font-bold">{name}</h1>
            <p className="font-medium text-xs">{cuisines.join(", ")}</p>
            <p className="font-medium text-xs">
              {areaName}, {city}
            </p>
            <p className="font-medium text-xs mt-2">
              <span className={`${ratingColor} inline px-1 rounded-sm`}>
                {avgRatingString}
              </span>{" "}
              ({totalRatingsString})
            </p>
          </div>
        </div>

        <div className="w-7/12 text-right flex flex-col p-1">
          <div className="h-[30%] pr-2 flex flex-row-reverse">
            <h1 className="text-sm font-semibold px-2">{costForTwoMessage}</h1>

            <h1 className="text-sm px-2">
              <FontAwesomeIcon icon={faClock} className="pr-1 text-xs" />
              <span className="font-semibold">{sla.deliveryTime} MINS</span>
            </h1>
          </div>
          <div className="h-[50%]">
            <input
              style={{ outline: "none" }}
              type="text"
              className="p-1 rounded-md border-2 border-green-300 w-5/12 text-gray-500"
              placeholder="Search Items"
            />
            <button
              className="pl-1.5"
            >
              <FaSearch className="text-green-300"/>
            </button>
          </div>
        </div>
      </div>

      {/* For each categories found build an accordion */}
      {categories.map((category, index) => {
        return (
          <ResCategory
            key={index}
            data={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
