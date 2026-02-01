import Searchbar from "./Searchbar";
import { CardComponent ,promotedCard} from "./CardComponent";
import { Button } from "./Button";
import { useEffect, useState,useContext } from "react";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import MyContext from "../utils/MyContext";

const Body = () =>{
       
const[restdata,setresdata] = useState([]);

const [searchdata,setsearchdata] = useState("");

const[datafetch,setdatafetch] = useState([]);

console.log("lollllllllllllllllllllllll" ,restdata);
console.log( "kiiiiiiiiiiiiiiiiiiiiiiiiiiiii" ,restdata);
const Updatedcard =promotedCard(CardComponent);


  useEffect(()=>{
    fetchdata();
  },[]);

   const {UserName,setinputchange} =  useContext(MyContext);
 

async function fetchdata(){
  
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7047867&lng=77.6551073&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json =  await data.json();
    console.log(json);

    const arr  = json?.data?.cards;

    const restaurantcard = arr.find((res)=>res?.card?.card?.gridElements?.infoWithStyle?.["@type"] === 
"type.googleapis.com/swiggy.seo.widgets.v1.FoodRestaurantGridListingInfo");

    const resturant = restaurantcard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    
    setresdata(resturant);
    setdatafetch(resturant);
    
}

const OnlineStatus = useOnlineStatus();

if(OnlineStatus === false) return( <h1>Plz Check Your Internet connection!!!!!!!!!</h1>);

    return restdata?.length === 0?(<Shimmer/>): (
        <div className="body flex-grow">

            <div className="searchkabutton">

                <div className="search">
             <Searchbar  datafetch={datafetch} resdata={restdata} setdata={setresdata} searchdata={searchdata} setsearchdata={setsearchdata}/>
            </div>
            <div>
                <Button datafetch={datafetch} resdata={restdata} setdata={setresdata}/>
            </div>

            <div className="flex content-center gap-2">
                <span>UserName:</span>
                <input className="border border-black border-solid pl-2 rounded-md" value={UserName} onChange={(e)=>setinputchange(e.target.value)}/>
            </div>

            </div>
            <div className="cardcomp">

               {

                restdata.map((resturant) => (<Link   key={resturant.info.id}  to={`/resturant/${resturant.info.id}`}> {resturant.info.veg?<Updatedcard   data = {resturant}/>:<CardComponent  data = {resturant} /> }</Link>))


               }                
            </div>
             
        </div>
    )
}
export default Body;