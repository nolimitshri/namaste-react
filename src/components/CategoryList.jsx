import { useDispatch } from "react-redux";
import { addItem } from "../utils/cardSlice";
import { CDN_URL } from "../utils/constants";

/* eslint-disable react/prop-types */
const CategoryList = ({items}) => {
    // console.log(items);

    const dispatch = useDispatch();


    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item))
    }


  return (
    <div>
        <div>
            {items.map((item, index) => {
                return (
                    <div key={index} className="border-gray-300 border-b-2 p-2 m-2 flex justify-between h-[150px]">
                        <div className="w-9/12">
                            <div className="font-semibold text-left mb-2">
                                <span>{item.card.info.name}</span>
                                <span>{isNaN(item.card.info.defaultPrice || item.card.info.price) ? "" : ` ₹${(item.card.info.defaultPrice/100) || (item.card.info.price/100)}`}</span>
                            </div>
                            <p className="text-left text-xs">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="p-4 w-3/12">
                            <div className="absolute mx-[32px] shadow-md">
                            {/* Dispatching an action */}
                                <button className="p-1 mt-[41px] rounded-sm bg-green-500 text-white text-sm" onClick={() => handleAddItem(item)}>ADD +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} alt="Food Pic" className="w-full shadow-md"/>
                        </div>
                    </div>
            )
            })}
        </div>
    </div>
  )
}

export default CategoryList