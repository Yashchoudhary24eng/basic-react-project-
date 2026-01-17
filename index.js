import React from "react";
import ReactDOM from "react-dom/client";

const a= React.createElement("div",{id:"parent"},React.createElement("div",{id:"child1"},React.createElement("h1",{},"boss1"),React.createElement("h2",{},"boss2")),React.createElement("div",{id:"child2"},"boss2"));

//creater h1 tag using jsx

const jsxheading = <h1>hello react by jsx top</h1>;

const HeadingComponent = () =>{return (<div> {jsxheading}<h1>hello this is component box!</h1></div>);} 

const b =ReactDOM.createRoot(document.getElementById("main"));


b.render(<HeadingComponent/>);
