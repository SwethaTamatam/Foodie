import React from "react";
import ReactDOM from "react-dom/client";
//React element
// const h1 = React.createElement("h1", { id: "heading" }, "Hello react");
//JSX/ReactElement
const h2 = <h2>Hii Hello React</h2>; 

//React Component
//Class Component - Old way 

//Functional Component - New way
const Title = ()=>{
    return <h1>This is title</h1>
}
const title = <h1>This is title React element</h1>

const HeadingComponent = () => {
    return (
        <div>
            <Title/>
            {title}
             <h1>This is functional component</h1>
        </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
