import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useHover = (onHover) => {
  const element = useRef();
  useEffect(() => {
    if(typeof onHover !== "function"){
      return;
    }
    if (element.current) {
      element.current.addEventListener("mouseover", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseleave", onHover);
      }
    };
  }, []);
  return element;
};
const App = () =>{
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
