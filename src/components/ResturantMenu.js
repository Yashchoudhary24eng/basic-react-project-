
import React from 'react'
import { useEffect,useState } from 'react'
import { Shimmer } from './Shimmer';

import { useParams } from 'react-router-dom';

import MenuCategory from './MenuCategory';

const ResturantMenu = () => {

const [menudata,setmenudata] =useState([]);



const param =useParams();
const{resId} = param;

  const [showlist,setshowlist] = useState();

  useEffect(()=>{
    MENU();
  },[]);


  async function MENU(){
    const data = await fetch("https://gist.githubusercontent.com/Yashchoudhary24eng/2ad6577f90992b0d84f1c3c40477a7c3/raw/1c1748a7c96cd637113777d7f61e552301342263/gistfile1.txt");
    const json = await data.json();
    console.log(json);
    setmenudata(json);
  }


 
  const menuArray = menudata?.find(res=>{return res.id===resId});

  return menudata.length ===0? <div>loading...</div>: (

    <div className='text-center w-6/12 mx-auto border-b-2 mt-5 flex-grow'>
       <h1 className='font-extrabold'>{menuArray?.restaurantInfo?.name}</h1>
        {menuArray?.categories?.map((res,index) => 
        (
        <div className='mt-6 shadow-lg' key={res.title}  >

            <MenuCategory item={res} showlist={showlist === index}  setshowlist={setshowlist} index={index}/>
          
  </div>
      ))}
</div>

  )
}

export default ResturantMenu;