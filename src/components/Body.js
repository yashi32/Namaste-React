import RestroCart from "./RestroCart";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{

//React Hooks
//State variable -Superpower variable
  const [restaurantList,setrestaurantList]=useState([]);

  useEffect(()=>
  {fetchData()},
  []);

  const fetchData=async ()=>{
    const url="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.424514&lng=77.05230879999999";
    const data=await fetch(url);
    const json= await data.json();
   // console.log(json);

    //Optional Chaining
    setrestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //Conditional Rendering & Ternary Operator

    return restaurantList.length===0 ?<Shimmer/>:(
        <div className="body">
            <div className="filter-btn">
              <button onClick={()=>{
                //Filter Logic
                filteredData=restaurantList.filter(
                  (res)=>res.info.avgRating>4
                )
               
                setrestaurantList(filteredData); 
                console.log(restaurantList)
              }
              
            }
              > 
              Search Top Restaurants
              </button>
              </div>
            <div className="restro-container">
                {
                  //Using map function to iterate over list item
                  restaurantList.map((x,index)=>
                  (
                    <RestroCart key={x.info.id} resData={x}/>
                  ))
                }
                
            </div>
        </div>
    )
};

export default Body;