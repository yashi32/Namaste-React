/** 
* Nested Elements in React
* Siblings within a div,use array to store them.
* ReactElement(Object) ====>> HTML(Browser Unserstands) 


<div id="parent">                           
    <div id="child1">                   ------> child of div id=parent
            <h1>I'm h1 tag</h1>         ------> children of div id=child1
            <h1>I'm a h1 tag</h1>       ------> children of div id=child1
    </div>

    <div id="child2">                   ------> child of div id=parent
            <h1>I'm h2 tag</h1>         ------> children of div id=child2
            <h1>I'm a h2 tag</h1>       ------> children of div id=child2
    </div>
</div>

*/



const parent= React.createElement(
    "div",
 { id:"parent" },
 [
    React.createElement(
    "div",
    {id:"child1"},
    [React.createElement("h1",{},"Im a h1 tag"),React.createElement("h1",{},"I'm a h1 tag")] 
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h2",{},"Im a h2 tag"),React.createElement("h2",{},"I'm a h2 tag")] 
        )
    ]
    );

const root= ReactDOM.createRoot(document.getElementById("root"));        
const root1= ReactDOM.createRoot(document.getElementById("root1"));        

root.render(parent);       
root1.render(parent);                                            

