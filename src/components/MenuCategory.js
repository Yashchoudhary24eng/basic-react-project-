import ItemList from "./ItemList";
import { useState } from "react";



const MenuCategory = ({item,showlist,setshowlist,index})=> {

  const {items} = item;

    
const handleclick = ()=>{
//setshowlist(!showlist);
setshowlist(prev=> prev===index? null: index);
}

return (

    <div> 
          <div className='flex justify-between bg-slate-100 py-4 px-3 font-bold cursor-pointer' onClick={handleclick} >
        
        <h1 >{item?.title} ({item.items.length})</h1>
        <h1>{"▼"}</h1>
        
          </div>

           {showlist && <ItemList items={items}/>}

           </div>
)
}

export default MenuCategory;