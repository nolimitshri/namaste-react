/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { CDN_URL } from '../utils/constants';

const ResCard = (props) => {
    const {resData} = props;

    console.log(resData);

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId,
      } = resData;

    return (
        <div className="m-5 w-[300px] h-[320px] border border-black hover:bg-slate-100 p-2">
            <img className='bg-cover object-cover' src={CDN_URL+cloudinaryImageId} alt="restaurant logo" />
            <h3 className='font-bold py-3 text-lg'>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins</h4>
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