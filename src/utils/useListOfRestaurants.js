import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";

const useListOfRestaurants = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const fetchData = async() => {
        const data = await fetch(SWIGGY_API, {mode: 'cors'});

        const jsonData = await data.json();

        setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    }

    useEffect(() => {
        fetchData(SWIGGY_API);
    }, []);


    return listOfRestaurants;
}

export default useListOfRestaurants;