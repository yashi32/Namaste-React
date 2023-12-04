import { CDN_URL } from "../utils/constans";

const RestroCart=(props)=>{
    const {resData}=props;

    const{cloudinaryImageId,name,cuisines,sla,avgRating,costForTwo}=resData?.info;

    return(
        <div className="res-cart" style={{backgroundColor: "#d1d1e0" }} >
            <img 
            className="res-logo"
            src={CDN_URL+cloudinaryImageId}
            alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>


        </div>
    )
};

export default RestroCart;
