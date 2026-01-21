import Searchbar from "./Searchbar";
import { restaurantData } from "../utils/mockdata";
import { CardComponent } from "./CardComponent";
import { Button } from "./Button";
import { useState } from "react";

const Body = () =>{
       
const arr = useState(restaurantData);
const[restdata,setresdata] =arr;
    return (
        <div className="body">
            <div className="search">
             <Searchbar/>
            </div>
            <div>
                <Button resdata={restdata} setdata={setresdata}/>
            </div>
            <div className="cardcomp">

               {
                restdata.map(resturant =>(<CardComponent key={resturant.id} data = {resturant} />))
               }                
            </div>
             
        </div>
    )
}

export default Body;