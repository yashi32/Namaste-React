import { LOGO_URL } from "../utils/constans";
const Header=()=>{
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

        </div>
    )
};

export default Header;