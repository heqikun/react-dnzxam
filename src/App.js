import React from "react";
import "./style.css";

let name = "Hello";
let element = React.createElement('h1',{id:"1",goods:'apple'},'This is the best time and worst time!');
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz! {name}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
