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
                    <div key={index} className="border-gray-300 border-b-2 mt-5 flex justify-between h-[150px]">
                        <div className="w-9/12">
                            <div className="font-semibold text-left mb-1">
                                <span>{item.card.info.name}</span>
                            </div>
                            <span className="mb-2 block">
                                {isNaN(item.card.info.defaultPrice || item.card.info.price) ? "" : ` ₹${(item.card.info.defaultPrice/100) || (item.card.info.price/100)}`}
                            </span>
                            <p className="text-left text-xs">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="p-4 w-3/12">

                            <img src={CDN_URL + item.card.info.imageId} alt="Food Pic"  className="shadow-md rounded-md"/>

                            <div className="flex items-center justify-center relative bottom-7">
                            {/* Dispatching an action */}
                                <button className="p-2 rounded-md bg-green-500 text-white text-lg hover:text-green-500 hover:bg-white hover:border-green-500 hover:border-2" onClick={() => handleAddItem(item)}>ADD +</button>
                            </div>
                        </div>
                    </div>
            )
            })}
        </div>
    </div>
  )
}

export default CategoryList