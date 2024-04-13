import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {menu_api} from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu=()=>
{
    // const [resInfo,setresInfo]=useState(null);
    console.log(menu_api);
    const {resId} = useParams();
    const resInfo=useRestaurantMenu(resId);
    console.log(resId);
    
//      useEffect(()=>
// {
// fetchMenu();
// },[]);
// const  fetchMenu=async()=>
// {
//  const data= await fetch(menu_api + resId);
//  const json=await data.json();
//  console.log(json);
//  setresInfo(json.data);
// }
if (!resInfo) {
    return <Shimmer />;
}


const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;
 const itemCards = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[1]?.itemCards;


   
   
// console.log(itemCards);
    return(
    <div className="menu">
      <h1>{name}</h1>

     
      <p>
                {cuisines ? cuisines.join(", ") : ""} - {costForTwoMessage}
            </p>
      <h2>Menu</h2>
       <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> 
    </div> 
  );
}
export default RestaurantMenu;