import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
  
  if(typeof onBefore !== "function"){
    return;
  };
  const handle = event => {
    const {clientY} = event;
    if(clientY <= 0){
      onBefore();
    }
  };
}
const App = () =>{
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
