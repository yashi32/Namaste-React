import React from "react";
import  ReactDOM  from "react-dom/client";

// JSX ==> Babel transpile it to React.createElement ==>ReactElement(Object) ==>HTML Element (render)
// JSX(transpiled before it reaches JS engine)- PARCEL- BABEL  

//React Element
const jsxheading= (<h1 className="head"> 
Namaste React Using JSX 🚀
 </h1>);

const jsxheading2= <h1> Namaste React</h1>;

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);




