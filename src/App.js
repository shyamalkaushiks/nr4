import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Aboutus from "./Components/Aboutus.js";
import Contactus from "./Components/Contactus.js";
import Error from "./Components/Error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import RestaurantCard from "./Components/RestaurantCard";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */




  

const Applayout=()=>
{
   return (
<div class="app">
<Header/>
<Outlet/>
{/* <Body/> */}
</div>

   )
}

   const approuter=createBrowserRouter([
      {
         path:'/',
         element: <Applayout />,
         children:[
            {
               path:'/',
               element: <Body />,
            },
            {
               path:'/About',
               element: <Aboutus />, 
            },
            {
               path:'/Contact',
               element: <Contactus />, 
            },
            {
               path: "/restaurants/:resId",
               element: <RestaurantMenu />, 
            }
         ],errorElement:<Error/>
      }
  



   ])

   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(<RouterProvider router={approuter}/>);
    