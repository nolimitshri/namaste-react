/* eslint-disable react/prop-types */
import '../css/resCard.css';
import { CDN_URL } from '../utils/constants';

const ResCard = (props) => {
    const {resData} = props;

    // eslint-disable-next-line no-unsafe-optional-chaining
    const {name, cuisines, costForTwo, avgRating, cloudinaryImageId, deliveryTime} = resData?.data;

    return (
        <div className="res-card">
            <img className='res-logo' src={CDN_URL+cloudinaryImageId} alt="restaurant logo" />
            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h4>{avgRating} ⭐</h4>
            <h4>{costForTwo / 100} FOR TWO</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
};

export default ResCard;