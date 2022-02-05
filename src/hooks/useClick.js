import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(typeof onClick !== "function"){
      return;
    }
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
const App = () =>{
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
