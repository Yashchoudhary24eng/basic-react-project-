import { useState } from "react";
import { restaurantData } from "../utils/mockdata"


export const Button = ({resdata,setdata,datafetch}) =>{
 
    return(
        <div className="button">
            <button className="border-solid border-black border rounded-md px-2 hover:bg-slate-200" onClick={()=>{
               const updated_data =  datafetch.filter(res => res?.info?.avgRating>4.3);
               console.log(updated_data);
               setdata(updated_data);


            }} >Click to Find Top Rated Resturants</button>
        </div>

    )
}