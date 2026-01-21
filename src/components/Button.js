import { useState } from "react";
import { restaurantData } from "../utils/mockdata"


export const Button = ({resdata,setdata}) =>{
 
    return(
        <div className="button">
            <button  onClick={()=>{
               const updated_data =  resdata.filter(res => res.rating>4);
               console.log(updated_data);
               setdata(updated_data);


            }} >Click to Find Top Rated Resturnats</button>
        </div>

    )
}