import React from "react";
import  ReactDOM  from "react-dom/client";


//React Element
const jsxheading= (<h1 className="head"> 
Namaste React Using JSX 🚀
 </h1>);

//React Functional Component

const HeadingComponent= () => {
    return <h1>Namaste React Functional Component 🚀🚀</h1>
}

//Cool way of writing JSX in Functional Component
//Some Syntaxs are same

fn=()=>true;
fn2=()=>{
    return true;
};

// Both are same 

const HeadingComponent1=()=>{
    return <h1>Namaste Yashi Bagoli👾</h1>
};

const HeadingComponent2=()=>(                  //Multi Line -->without return statement
    <h1>Namaste Yashi Bagoli 🎃</h1>
);

const HeadingComponent3=()=> <h1> Namaste Yashi </h1>; //Single Line



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);




