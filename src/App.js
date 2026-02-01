import React, { lazy, Suspense, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom"
import { About } from "./components/About";
import { Error } from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import MyContext from "./utils/MyContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux"
import Cart from "./components/Cart";


//import { Grocery } from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"));


const MainComponent = () => {
 const data = "yash";
 const[inputchange,setinputchange]  = useState(data);
 
  
 return ( 

  <Provider store={appStore}>
    <div className="min-h-screen flex flex-col">
    <MyContext.Provider value={{UserName:inputchange, setinputchange}}>
        <Header/>

        <Outlet />
        </MyContext.Provider>
        <Footer/>
     
        
    </div>
    </Provider>
 )  
}

//const About = lazy(()=>import("./components/About"));


const Router = createBrowserRouter([
{
path: "/",
element: <MainComponent/> , 
children: [
{
  path: "/about",
  element: <About/>,
},
{
  path: "/",
  element: <Body/>
},{
  path:"/home",
  element: <Body/>
},{
  path:"/resturant/:resId",
  element: <ResturantMenu/>
},{
  path:"/grocery",
  element: <Suspense fallbace={<h1>loading......</h1>}> <Grocery/> </Suspense>
},
{
  path:"/cart",
  element: <Cart/>
}
],
errorElement:<Error/>
},


]); 

const b =ReactDOM.createRoot(document.getElementById("main"));


b.render(<RouterProvider router={Router} />);
