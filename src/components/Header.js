import { LOGO_URL } from "../utils/constans";
import { useState } from "react";
const Header=()=>{
    
   const[btnNameReact,setbtnNameReact]=useState("Login");
   console.log("Header Component Rendered");
    return (
        <div className="header">
            
            <div className="logo">
                <img
                src={LOGO_URL}
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
            <button className="login"
                
                onClick={()=>{
                    btnNameReact==="Login"? setbtnNameReact("Logout"):setbtnNameReact("Login");
                    
                }}>

                {btnNameReact}
            </button>

        </div>
    )
};

export default Header;