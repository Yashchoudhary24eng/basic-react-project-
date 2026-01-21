import { header_img } from "../utils/constants";
const Header = () =>{
   return (

    <nav className="header">
    <div  className="logobox">
    <img src={header_img}  alt="header logo" className="logo" />
    <span className="font">SwadHub</span>
    </div>
    
    <ul className="headerlist">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>MY Cart</li>
        
    </ul>
    </nav>

)};

export default Header;