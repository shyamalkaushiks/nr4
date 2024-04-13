import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>
  {
   const {resname}= props;
 
   const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla, // Destructure the sla object
    } = resname?.info;
  
    // Extracting delivery time from the sla object
    const deliveryTime = sla ? sla.deliveryTime : null;
    const cost = parseInt(costForTwo.replace("₹", "").replace(" for two", ""));
    
    // console.log(resname);
return (
   <div className="res-card" style={{
        backgroundColor: '#f0f0f0',
   }}>

<img className="res-logo" src={
  CDN_URL+ cloudinaryImageId
  } />
<h3>{name}</h3>
       <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{cost} FOR TWO</h4> {/* Displaying extracted cost */}
      <h4>{deliveryTime} minutes</h4> {/* Displaying delivery time */}
    
   </div>
)

  };
  export default RestaurantCard;