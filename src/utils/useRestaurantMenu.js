/* eslint-disable react-hooks/exhaustive-deps */
import { RES_API_FR } from "../utils/constants"; 
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData(RES_API_FR);
    }, [])

    const fetchData = async() => {
        const data  = await fetch(`${RES_API_FR}${resId}`, {mode: "cors"});
        
        const json = await data.json();

        setResInfo(json.data);

    }

    return resInfo;
}

export default useRestaurantMenu;