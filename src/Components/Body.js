import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import resList from "../utils/mockData";
import { Link } from "react-router-dom";


const Body=()=>
{
  
   //  console.log(resList);
   const [searchText, setSearchText] = useState("");
   const [filteredRestaurant, setfilteredRestaurant] = useState([]);

 const [listOfRestaurants, setListOfRestaurants]=useState([]);
 useEffect(()=>
 {
console.log("i am called");
fetchData();
 },[]);

 const fetchData = async () => {
   try {
     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.5529907&lng=76.6345735&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
     console.log(response);
     if (!response.ok) {
       throw new Error('Failed to fetch data');
     }
     const json = await response.json();
     const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
     console.log(restaurants);
     setListOfRestaurants(restaurants);
     setfilteredRestaurant(restaurants); 

    
     console.log('Fetched data:', json);

      // Set fetched data to state
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 };
 const OnlineStatus=useOnlineStatus();
 if(OnlineStatus===false)
 {
  return (
    <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
      Looks like you're offline! Please check your internet connection
    </h1>
  );
 }
if(listOfRestaurants.length===0)

   {
return  <Shimmer/>
}
  

  return (
   
     <div className="body">  
     <div className="filter"> 
     <input type="text"  className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
<button onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.infoWithStyle.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>

      <button className="filter-btn" onClick={()=>
     {
        const uplist=listOfRestaurants.filter((res)=>
        {
            return res.info.avgRating >4
        });
        setListOfRestaurants(uplist);
      //   console.log(uplist);
     }
     }>
        Top rated restraunt
     </button></div>
     <div className="res-container">
{

  filteredRestaurant.map((resdata)=>
     (
      <Link
            key={resdata.info.id}
            to={"/restaurants/" + resdata.info.id}
          >
            <RestaurantCard resname={resdata} />
          </Link>
    

     )
     )
}
     
  
      {/* <RestaurantCard resname={resList[0]}/>
     <RestaurantCard resname={resList[1]}/>
     <RestaurantCard resname={resList[2]}/>
     <RestaurantCard resname={resList[4]}/> 
     <RestaurantCard resname={resList[5]}/> 
     <RestaurantCard resname={resList[6]}/> 
     <RestaurantCard resname={resList[7]}/> 
     <RestaurantCard resname={resList[8]}/> 
     <RestaurantCard resname={resList[9]}/> 
     */}
     
 
     {/* <RestaurantCard resname={resList[1]}/>
     <RestaurantCard resname={resList[2]}/>
     <RestaurantCard resname={resList[3]}/>
     <RestaurantCard resname={resList[4]}/> */
     }
  
       </div>
     </div>
  )

}
export default Body;


//    <RestaurantCard key={resdata.info.id} resname={resdata}/>