import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  }, []);
  if(typeof duration !== "number" || typeof delay !== "number"){
    return;
  }
  return {ref: element, style: {opacity: 0}};
}
const App = () =>{
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInp = useFadeIn(5, 10);
  return (
    <div className="App">
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInp}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatem, doloribus ea pariatur repellat est nam alias accusamus molestiae dolorum autem dolorem optio iure explicabo, eum quae labore odit esse.</p>
    </div>
  );
}

export default App;