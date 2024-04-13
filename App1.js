import React from "react";
import ReactDOM from "react-dom";

   // const heading= React.createElement("h1",{id:"heading",xyz:"s"},"hello world");
   const Heading=
   (<h1 className="hello">Namaste Heading using jsx</h1>);

// const fb=()=>
// {
//    return "ge";
// };
// or

// const fbg=()=>true;
   const headingcomponent=()=>
   {
      
      return <h1 className="hello">Namaste react using jsx</h1>
     
   };

  // or

  const Headingcomponent1=()=>
  (
   <div>
   {Heading},
      <h1 className="hello">Namaste react using jsx</h1>
   </div>


  );

 // or

 const headingcomponent3=()=>  <h1 className="hello">Namaste react using jsx</h1> ;

   const root=ReactDOM.createRoot(document.getElementById("root"));
   root.render(<Headingcomponent1/>);
    








   const resList=[
      {
      "info": {
      "id": "148027",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Karamchari Colony",
      "areaName": "Basant Vihar",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 4.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.9 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:59:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-karamchari-colony-basant-vihar-alwar-148027",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "158296",
      "name": "Praveen Sai Bakers & Fast Food",
      "cloudinaryImageId": "gwfhhhc7s9btk12f05ju",
      "locality": "Sector 7",
      "areaName": "Alwar Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "South Indian",
      "Chinese",
      "Fast Food",
      "Bakery",
      "Burgers",
      "Ice Cream",
      "Pizzas",
      "Biryani"
      ],
      "avgRating": 4.1,
      "parentId": "160797",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 3.6,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/praveen-sai-bakers-and-fast-food-sector-7-alwar-locality-alwar-158296",
      "type": "WEBLINK"
      }
      },
    
      {
      "info": {
      "id": "158827",
      "name": "Mr. Chop Shop",
      "cloudinaryImageId": "noyen2bkfettg5hlu2wr",
      "locality": "Karamchari Colony",
      "areaName": "Alwar Locality",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Chinese",
      "Burgers",
      "Pizzas",
      "Biryani"
      ],
      "avgRating": 4.2,
      "parentId": "10135",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 5.7,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "5.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/mr-chop-shop-karamchari-colony-alwar-locality-alwar-158827",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "247223",
      "name": "South Street",
      "cloudinaryImageId": "dk9i1xn4rz3q7a4y8s83",
      "locality": "Lajpat Nagar",
      "areaName": "Basant Vihar",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Chinese",
      "South Indian",
      "Burgers",
      "Ice Cream",
      "Pizzas",
      "Biryani"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "191502",
      "avgRatingString": "4.2",
      "totalRatingsString": "500+",
      "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:15:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/south-street-lajpat-nagar-basant-vihar-alwar-247223",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "161374",
      "name": "Mahaveer Dhaba",
      "cloudinaryImageId": "nsy4ur6mxrogvx9ttbzn",
      "locality": "Bus Stand Road",
      "areaName": "Rathkhana",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Indian",
      "Chinese"
      ],
      "avgRating": 3.9,
      "veg": true,
      "parentId": "130030",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.8,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/mahaveer-dhaba-bus-stand-road-rathkhana-alwar-161374",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "494353",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "txoqjg783ahkjqdol1s6",
      "locality": "Old Station Road",
      "areaName": "Basant Vihar",
      "costForTwo": "₹120 for two",
      "cuisines": [
      "Ice Cream",
      "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "12175",
      "avgRatingString": "4.6",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 22,
      "lastMileTravel": 3.8,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-old-station-road-basant-vihar-alwar-494353",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "373102",
      "name": "Havmor Ice Cream",
      "cloudinaryImageId": "tkze3lyppiotbdxlg4lm",
      "locality": "Basant Vihar",
      "areaName": "Sector 7",
      "costForTwo": "₹250 for two",
      "cuisines": [
      "Ice Cream"
      ],
      "avgRating": 4,
      "veg": true,
      "parentId": "6969",
      "avgRatingString": "4.0",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 21,
      "lastMileTravel": 2.8,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:59:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/havmor-ice-cream-basant-vihar-sector-7-alwar-373102",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "494351",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
      "locality": "Tej Mandi",
      "areaName": "Basant Vihar",
      "costForTwo": "₹120 for two",
      "cuisines": [
      "Ice Cream",
      "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "500+",
      "sla": {
      "deliveryTime": 20,
      "lastMileTravel": 3.8,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "3.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "60% OFF",
      "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-tej-mandi-basant-vihar-alwar-494351",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "726108",
      "name": "The Burger Company",
      "cloudinaryImageId": "24c46ccf853507618262d2449179c4d5",
      "locality": "Arya Nagar",
      "areaName": "Basant Vihar",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Burgers",
      "Fast Food",
      "Beverages",
      "Desserts"
      ],
      "avgRating": 4.2,
      "parentId": "206007",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 4.2,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.2 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/the-burger-company-arya-nagar-basant-vihar-alwar-726108",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "481506",
      "name": "Mama Mia Pizza",
      "cloudinaryImageId": "qotw25xz8rc6axqjqz5i",
      "locality": "Jail Circle",
      "areaName": "Basant Vihar",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Pastas",
      "Ice Cream",
      "Pizzas"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "131084",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 2.9,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "2.9 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/mama-mia-pizza-jail-circle-basant-vihar-alwar-481506",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "161353",
      "name": "Khandelwal Pavitra Bhojanlaya",
      "cloudinaryImageId": "abbfezhlcyksrafc1xv3",
      "locality": "Indra Colony",
      "areaName": "Alwar Locality",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Snacks",
      "Punjabi",
      "Tandoor"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "117398",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 21:30:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹199",
      "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/khandelwal-pavitra-bhojanlaya-indra-colony-alwar-locality-alwar-161353",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "654139",
      "name": "De' Pizza Planet",
      "cloudinaryImageId": "4f2c0365599cbf93c9296fe3438fa885",
      "locality": "Raghu Marg",
      "areaName": "Basant Vihar",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Pizzas",
      "Fast Food",
      "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "70756",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 25,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "aggregatedDiscountInfoV2": {},
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/de-pizza-planet-raghu-marg-basant-vihar-alwar-654139",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "340285",
      "name": "Tija",
      "cloudinaryImageId": "oijaohbrcfpfpivel4am",
      "areaName": "Bhiwadi",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Chinese",
      "Burgers",
      "Ice Cream"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "216253",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 24,
      "lastMileTravel": 3.5,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "3.5 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:15:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/tija-bhiwadi-alwar-340285",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "338611",
      "name": "Alwar Jayka",
      "cloudinaryImageId": "odpr0hxtlc9wsw4kealq",
      "locality": "Sector 7",
      "areaName": "Basant Vihar",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Pastas",
      "Chinese",
      "North Indian",
      "South Indian",
      "Burgers",
      "Pizzas"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "30705",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 4.7,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "4.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:00:00",
      "opened": true
      },
      "badges": {
      "imageBadges": [
      {
      "imageId": "v1695133679/badges/Pure_Veg111.png",
      "description": "pureveg"
      }
      ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {
      "badgeObject": [
      {
      "attributes": {
      "description": "pureveg",
      "imageId": "v1695133679/badges/Pure_Veg111.png"
      }
      }
      ]
      },
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/alwar-jayka-sector-7-basant-vihar-alwar-338611",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "758816",
      "name": "The Heaven's Shakes",
      "cloudinaryImageId": "59b61f714b8a87c83142079ac05d0131",
      "locality": "New Tej Market",
      "areaName": "Ghantaghar-Alwar",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "Beverages",
      "Chinese",
      "Cafe",
      "Snacks",
      "South Indian"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "448530",
      "avgRatingString": "4.3",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 28,
      "lastMileTravel": 4.7,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "4.7 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 23:00:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/the-heavens-shakes-new-tej-market-ghantaghar-alwar-alwar-758816",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "618341",
      "name": "Jitters",
      "cloudinaryImageId": "f0lce2kmoesjyizdc2tf",
      "locality": "Lajpat Nagar",
      "areaName": "Basant Vihar",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Beverages",
      "Snacks"
      ],
      "avgRating": 4.2,
      "parentId": "111044",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3.8,
      "serviceability": "SERVICEABLE",
      "slaString": "25-30 mins",
      "lastMileTravelString": "3.8 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/jitters-lajpat-nagar-basant-vihar-alwar-618341",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "646531",
      "name": "Sai Leela",
      "cloudinaryImageId": "f34657e4f398eec0e714971b58f8be69",
      "locality": "Karmchari Colony",
      "areaName": "Tijara Road",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Chinese",
      "Biryani",
      "Italian-American",
      "South Indian",
      "Snacks"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "3273",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 5,
      "serviceability": "SERVICEABLE",
      "slaString": "35-40 mins",
      "lastMileTravelString": "5.0 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 22:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹150",
      "discountTag": "SAVE BIG"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/sai-leela-karmchari-colony-tijara-road-alwar-646531",
      "type": "WEBLINK"
      }
      },
      {
      "info": {
      "id": "501529",
      "name": "Sai Bakers",
      "cloudinaryImageId": "eiuzjmo9ugmzdgogoy6m",
      "locality": "Lajpat Nagar",
      "areaName": "Scheme 2",
      "costForTwo": "₹100 for two",
      "cuisines": [
      "Burgers",
      "Pizzas"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "174909",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 3.6,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "3.6 km",
      "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
      "nextCloseTime": "2024-03-19 21:30:00",
      "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
      "entityBadges": {
      "imageBased": {},
      "textBased": {},
      "textExtendedBadges": {}
      }
      },
      "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹249",
      "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {},
      "video": {}
      }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
      "link": "https://www.swiggy.com/restaurants/sai-bakers-lajpat-nagar-scheme-2-alwar-501529",
      "type": "WEBLINK"
      }
      }
      ];