/* eslint-disable react/prop-types */
// import { useState } from "react";
import { useState } from "react";
import CategoryList from "./CategoryList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";

const ResCategory = ({data}) => {

    const [showAccordion, setShowAccordion] = useState(true);

    const handleClick = () => {
        setShowAccordion(!showAccordion)
    }
    
    return (
        <div className="w-[55%] my-3 mx-auto bg-gray-100 shadow-md p-2 rounded-md">
            {/* Accordion Item Header */}
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
                <span>
                    {showAccordion ? (<FontAwesomeIcon icon={faSortUp} className="pr-1" />) : (<FontAwesomeIcon icon={faSortDown} className="pr-1" />)}
                </span>
            </div>

            {/* Accordion Item Body */}
            {showAccordion && <CategoryList items={data.itemCards} />}

        </div>
    )
}

export default ResCategory