/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { CDN_URL } from '../utils/constants';

const ResCard = (props) => {
    const {resData} = props;

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, deliveryTime} = resData?.data;

    return (
        <div className="m-4 p-4 w-[250px] bg-slate-200 rounded-md hover:bg-slate-300">
            <img className='res-logo rounded-md' src={CDN_URL+cloudinaryImageId} alt="restaurant logo" />
            <h3 className='font-bold text-center py-3 text-lg'>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
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