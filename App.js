import React from "react";
import  ReactDOM  from "react-dom/client";

/** UI DESIGN
* Header
*      -> Logo
*      ->Nav Items
            ->Home
            ->About Us
            ->Contact Us
* Body
        ->Seach
        ->Restaurant Container
            ->Restaurant Cart
                ->Name
                ->Star Rating,Cusines,ETA,price
* Footer
        ->Copyright
        ->Links
        ->Address
        ->Contact
*/

const Header=()=>{
    return (
        <div className="header">
            
            <div className="logo">
                <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU"
                className="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestroCart=(props)=>{
    const {resData}=props;

    //Optional Chaining
    const{cloudinaryImageId,name,cuisines,sla,avgRating,costForTwo}=resData?.info;

    return(
        <div className="res-cart" style={{backgroundColor: "#d1d1e0" }} >
            <img 
            className="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId}
            alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>


        </div>
    )
}

const resList=[
  {
    "info": {
      "id": "15659",
      "name": "Behrouz Biryani",
      "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
      "locality": "AVA Court Mall",
      "areaName": "South City 2",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "15659",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7500
      },
      "parentId": "1803",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 58,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "58 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/behrouz-biryani-ava-court-mall-south-city-2-gurgaon-15659",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "332226",
      "name": "Tossin Pizza",
      "cloudinaryImageId": "313485a665bd0f4958fdc14ead8afade",
      "locality": "Sector 50",
      "areaName": "Sector 50",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "332226",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "1778",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 06:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tossin-pizza-sector-50-gurgaon-332226",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "392965",
      "name": "Burger Singh (Big Punjabi Burgers)",
      "cloudinaryImageId": "wkq6uc5st13ma67igxtb",
      "locality": "Sector 49",
      "areaName": "Sector 49",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Snacks",
        "Indian",
        "American"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "392965",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "375065",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 41,
        "lastMileTravel": 2,
        "serviceability": "SERVICEABLE",
        "slaString": "41 mins",
        "lastMileTravelString": "2.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/burger-singh-big-punjabi-burgers-sector-49-gurgaon-392965",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "29924",
      "name": "Naivedyam",
      "cloudinaryImageId": "mcyq31epsmqg6803i619",
      "locality": "Vatika City Market",
      "areaName": "Sohna Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "feeDetails": {
        "restaurantId": "29924",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 5600
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7600
      },
      "parentId": "2540",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "42 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 22:30:00",
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
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹900",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/naivedyam-vatika-city-market-sohna-road-gurgaon-29924",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "36509",
      "name": "Tibb's Frankie - Serving Rolls Since 1969",
      "cloudinaryImageId": "agkneu9bkxlbhvovfiry",
      "locality": "Baani Square",
      "areaName": "Sector 50",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Rolls & Wraps",
        "Fast Food"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "36509",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "472083",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 50,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "50 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/tibbs-frankie-serving-rolls-since-1969-baani-square-sector-50-gurgaon-36509",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "255753",
      "name": "Dana Choga",
      "cloudinaryImageId": "jqiv7tlymyu54lckiaxr",
      "locality": "ILD Trade Centre Mall",
      "areaName": "Sohna Road",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Chinese",
        "Mughlai",
        "North Indian"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "255753",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7500
      },
      "parentId": "5179",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "49 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dana-choga-ild-trade-centre-mall-sohna-road-gurgaon-255753",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "24229",
      "name": "Domino's Pizza",
      "cloudinaryImageId": "il9xprjk7axwmwsg3ru2",
      "locality": "Good Earth City Centre",
      "areaName": "Sector 50",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "avgRating": 4.3,
      "feeDetails": {
        "restaurantId": "24229",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 4800
      },
      "parentId": "2456",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 25,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 22:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "25% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dominos-pizza-good-earth-city-centre-sector-50-gurgaon-24229",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "1271",
      "name": "Om Sweets & Snacks",
      "cloudinaryImageId": "j2sikfhh5kgdzjllkpih",
      "locality": "Good Earth City Centre",
      "areaName": "Sector 50",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Sweets",
        "North Indian",
        "South Indian",
        "Chinese",
        "Snacks",
        "Desserts",
        "Bakery"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "1271",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "676",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "55 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 22:30:00",
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
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/om-sweets-and-snacks-good-earth-city-centre-sector-50-gurgaon-1271",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "11670",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "Unitech Cyber Park",
      "areaName": "Sector 39",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.9,
      "feeDetails": {
        "restaurantId": "11670",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 5600
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7600
      },
      "parentId": "721",
      "avgRatingString": "3.9",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 4.2,
        "serviceability": "SERVICEABLE",
        "slaString": "46 mins",
        "lastMileTravelString": "4.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-hut-unitech-cyber-park-sector-39-gurgaon-11670",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "25301",
      "name": "Oven Story Pizza - Standout Toppings",
      "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
      "locality": "AVA Court Mall",
      "areaName": "South City 2",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 3.7,
      "feeDetails": {
        "restaurantId": "25301",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 5500
      },
      "parentId": "3534",
      "avgRatingString": "3.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-42 mins",
        "lastMileTravelString": "2.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-ava-court-mall-south-city-2-gurgaon-25301",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "86402",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
      "locality": "Bani square Road",
      "areaName": "Sector 50",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Waffle",
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.3,
      "veg": true,
      "feeDetails": {
        "restaurantId": "86402",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "2233",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 55,
        "lastMileTravel": 1.9,
        "serviceability": "SERVICEABLE",
        "slaString": "55 mins",
        "lastMileTravelString": "1.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-bani-square-road-sector-50-gurgaon-86402",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "261150",
      "name": "The Masala Story",
      "cloudinaryImageId": "mc9me91yzae9j4unzvrl",
      "locality": "Sector 47",
      "areaName": "Sector 47",
      "costForTwo": "₹700 for two",
      "cuisines": [
        "Indian",
        "North Indian",
        "Kebabs",
        "Snacks",
        "Biryani",
        "Mughlai"
      ],
      "avgRating": 4,
      "feeDetails": {
        "restaurantId": "261150",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5500
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7500
      },
      "parentId": "211279",
      "avgRatingString": "4.0",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "47 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
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
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-masala-story-sector-47-gurgaon-261150",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "228351",
      "name": "House of Chow",
      "cloudinaryImageId": "6e97ac8f5c89213610309ef1940afa05",
      "locality": "Jharsa",
      "areaName": "Sector 39",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pan-Asian",
        "Chinese",
        "Thai",
        "Oriental"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "228351",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6100
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 8100
      },
      "parentId": "9064",
      "avgRatingString": "4.1",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 38,
        "lastMileTravel": 4.5,
        "serviceability": "SERVICEABLE",
        "slaString": "38 mins",
        "lastMileTravelString": "4.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "C",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/house-of-chow-jharsa-sector-39-gurgaon-228351",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "39308",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Unitech Cyber Park",
      "areaName": "Sector 39",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "39308",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 6100
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 8100
      },
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 04:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kfc-unitech-cyber-park-sector-39-gurgaon-39308",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "73650",
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
      "locality": "Rodeo Drive",
      "areaName": "Sector 49",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.6,
      "veg": true,
      "feeDetails": {
        "restaurantId": "73650",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 5300
          },
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7300
      },
      "parentId": "6249",
      "avgRatingString": "4.6",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/nic-ice-creams-rodeo-drive-sector-49-gurgaon-73650",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "355337",
      "name": "Grameen Kulfi",
      "cloudinaryImageId": "y5iaa6pwm6kfokkfcmcj",
      "locality": "Rodeo Drive",
      "areaName": "Sector 49",
      "costForTwo": "₹120 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "veg": true,
      "feeDetails": {
        "restaurantId": "355337",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "12175",
      "avgRatingString": "4.7",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "31 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹99"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/grameen-kulfi-rodeo-drive-sector-49-gurgaon-355337",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "812",
      "name": "Bikkgane Biryani",
      "cloudinaryImageId": "56646c3f698b3c5ae53639c49a4725af",
      "locality": "Sector 39",
      "areaName": "Sector 39",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "North Indian"
      ],
      "avgRating": 4.1,
      "feeDetails": {
        "restaurantId": "812",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "5070",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.5,
        "serviceability": "SERVICEABLE",
        "slaString": "32 mins",
        "lastMileTravelString": "2.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bikkgane-biryani-sector-39-gurgaon-812",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5996",
      "name": "Gianis - Ice Cream, Shakes & Sundaes",
      "cloudinaryImageId": "2365e2117e199c2b9a2cfa643c31b05c",
      "locality": "Sector 50",
      "areaName": "Sector 50",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts",
        "Beverages",
        "Bakery"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "5996",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "427371",
      "avgRatingString": "4.2",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "33 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:55:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/gianis-ice-cream-shakes-and-sundaes-sector-50-gurgaon-5996",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "20140",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Good Earth City Centre",
      "areaName": "Sector 50",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.5,
      "feeDetails": {
        "restaurantId": "20140",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 4800
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 6800
      },
      "parentId": "2",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 53,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "53 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-04 01:45:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL"
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/subway-good-earth-city-centre-sector-50-gurgaon-20140",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "1660",
      "name": "Sagar Ratna",
      "cloudinaryImageId": "xqinz4rdvxbexou7df1h",
      "locality": "Sohna Road",
      "areaName": "Sohna Road",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Desserts"
      ],
      "avgRating": 4.2,
      "veg": true,
      "feeDetails": {
        "restaurantId": "1660",
        "fees": [
          {
            "name": "ANCILLARY_SURGE_FEE",
            "fee": 2000
          },
          {
            "name": "BASE_DISTANCE",
            "fee": 5600
          },
          {
            "name": "BASE_TIME"
          }
        ],
        "totalFee": 7600
      },
      "parentId": "793",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "36 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-03 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
          "text": "BENEFITS",
          "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sagar-ratna-sohna-road-gurgaon-1660",
      "type": "WEBLINK"
    }
  }

]


const Body=()=>{
    return(
        <div className="body">
            <div className="search">Seach</div>
            <div className="restro-container">
                {
                  //Using map function to iterate over list item
                  resList.map((x,index)=>
                  (
                    <RestroCart key={x.info.id} resData={x}/>
                  ))
                }
                
            </div>
        </div>
    )
}
// not using keys(not acceptable) <<< index as key <<< unique key(best practise)
const AppLayout=()=>{
    return(
         <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);




