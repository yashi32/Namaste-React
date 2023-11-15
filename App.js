import React from "react";
import  ReactDOM  from "react-dom/client";

// React.createElement ==> React Element (JS Object) ==> HTML Element(render)
const heading=React.createElement(
    "h1",
    { id:"heading" },
    "Namaste React🚀"

)
// JSX ==> React.createElement ==>ReactElement(Object) ==>HTML Element (render)
// JSX(transpiled before it reaches JS)- PARCEL- BABEL
const jsxheading= <h1 id="heading"> Namaste React Using JSX 🚀 </h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
console.log(jsxheading);
root.render(jsxheading);
 

