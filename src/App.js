import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const MainComponent = () => {
 return ( 
    <div className="app">
        <Header/>
        <Body/>
        <Footer/>
    </div>
 )  
}




const b =ReactDOM.createRoot(document.getElementById("main"));


b.render(<MainComponent/>);
