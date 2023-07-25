/* eslint-disable react/prop-types */
// import { useState } from "react";
import CategoryList from "./CategoryList";

const ResCategory = ({data, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex()
    }
    
    return (
        <div className="w-6/12 mt-5 mx-auto bg-gray-200 shadow-md p-1.5">
            {/* Accordion Item Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>

            {/* Accordion Item Body */}
            {showItems && <CategoryList items={data.itemCards}/>}

        </div>
    )
}

export default ResCategory