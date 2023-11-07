import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = ()=> {
    const [btnName, setBtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const data = useContext(UserContext)

    const cartItems = useSelector((store)=> store.cart.items);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100">
            <div className="logo-container">
                <img className="w-56"  src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4"> 
                <li className="px-4">Online Status : {onlineStatus? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"> <Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/restaurants/410683">Grocery</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/cart">🛒 {cartItems.length}</Link></li>
                    <button className="login" 
                    onClick={()=>{
                            btnName==='Login'?setBtnName("Logout"):setBtnName('Login')
                        }}
                    >{btnName}</button>
                    <li className="px-4">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;