
import { header_img } from "../utils/constants";
import { Link } from "react-router-dom"; 
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import MyContext from "../utils/MyContext";
import {  useSelector } from "react-redux";




const Header = () =>{

    const [buttonname,setbuttonname] = useState("Login");
    const OnlineStatus = useOnlineStatus();

    const {UserName,UserRoll} = useContext(MyContext);


    const items = useSelector((store) => store.cart.iteams);
    console.log(items);
   

   return (
    <nav className="header">
    <div  className="logobox">
    <img src={header_img}  alt="header logo" className="logo" />
    <span className="font">SwadHub</span>
    </div>
    
    <ul className="headerlist">
        <li className="hover:translate-y-2 ease-out transition-transform inline-block">active status: {(OnlineStatus)? "✅online":"🔴offline"}</li>
        <li className="hover:translate-y-2 ease-out transition-transform inline-block"><Link to="/">Home</Link></li>
        <li className="hover:translate-y-2 ease-out transition-transform inline-block"><Link to="/about">About Us</Link></li>
        <li className="hover:translate-y-2 ease-out transition-transform inline-block"><Link to="/grocery">Grocery</Link></li>
        <li className="hover:translate-y-2 ease-out transition-transform inline-block">Contact us</li>
        <li className="hover:translate-y-2 ease-out transition-transform inline-block">{UserName}</li>
        <Link to="/cart"> <li className="">MY Cart -({items.length} items)</li></Link>
        
         <button className="bg-blue-500 rounded-lg font-semibold" style={{padding:"5px 20px", cursor:"pointer"}} onClick={()=>{
            buttonname==="Login"?setbuttonname("Logout"):setbuttonname("Login");
        }}>{buttonname}</button>
       
        
    </ul>
    </nav>

)};

export default Header;