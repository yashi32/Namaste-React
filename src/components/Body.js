import RestroCart from "./RestroCart";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{

//React Hooks
//State variable -Superpower variable
  let [restaurantList,setrestaurantList]=useState(resList);
  console.log(restaurantList);
    return(
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