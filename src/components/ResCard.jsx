/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { CDN_URL } from '../utils/constants';

import "../css/resCard.css";

const ResCard = (props) => {
    const {resData} = props;

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        areaName,
        cloudinaryImageId,
        avgRatingString
      } = resData;

    // bg-green-400 bg-yellow-300

    let ratingColor = "bg-green-400";

    if(avgRating < 4.0){
        ratingColor = "bg-yellow-300";
    }


    return (
        <div className="m-5 w-[300px] h-[340px] p-2 box-shadow">
            <div>
                <img className='bg-cover object-cover rounded-md' src={CDN_URL+cloudinaryImageId} alt="restaurant logo" />
            </div>

            <div className='p-1'>
                <h3 className='font-bold text-lg truncate text-slate-800 mb-1'>{name}</h3>
                <h4>
                    <div className={`${ratingColor} inline px-1 rounded-sm`}>
                        {avgRatingString}
                    </div>
                </h4>
                <h6 className='truncate'>{cuisines.join(", ")}</h6>
                
                <h4 className='my-2 font-semibold capitalize'>{costForTwo}</h4>

                <div className='flex'>
                    <h4 className='block w-6/12'>{areaName}</h4>
                    <h4 className='w-6/12 text-right'>
                        <span className='inline border border-black p-1 rounded-md'>ETA: {sla.deliveryTime} mins</span>
                    </h4>
                </div>
                
            </div>
        </div>
    )
};

export const withPromotedLabel = (ResCard) => {
    return (props) => {
        return (
            <>
                <div>
                    <label className='p-1 ml-4 absolute bg-black text-white rounded-lg'>Promoted</label>
                    <ResCard {...props}/>
                </div>
            </>
        );
    };
};

export default ResCard;