import RestroCart from "./RestroCart";
import resList from "../utils/mockData";

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
};

export default Body;