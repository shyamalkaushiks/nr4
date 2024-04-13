import { menu_api } from "./constants";
import { useEffect, useState } from "react"; 
import { menu_api } from "./constants";
 const useRestaurantMenu=(resId)=>
 {
    const[resInfo,setresInfo]=useState(null);
           //const {resId}=resId; 

           useEffect(()=>
           {
           fetchMenu();
           },[resId]);
           const fetchMenu=async()=>
           {
            const data= await fetch(menu_api + resId);
            const json=await data.json();
            console.log(json);
            setresInfo(json.data);
            
           }
           return resInfo;
 }
 export default useRestaurantMenu;