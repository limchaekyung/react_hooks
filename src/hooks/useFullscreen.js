import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = isFull => {
        if(callback && typeof callback === "function"){
            callback(isFull);
        }
    }
    const triggerFull = () => {
        if (element.current) {
          if (element.current.requestFullscreen) {
            element.current.requestFullscreen();
          } else if (element.current.mozRequestFullScreen) {
            element.current.mozRrequestFullScreen();
          } else if (element.current.webkitRequestFullscreen) {
            element.current.webkitRrequestFullscreen();
          } else if (element.current.msRequestFullscreen) {
            element.current.msRrequestFullscreen();
          }
          runCb(true);
        }
    };
    const exitFull = () => {
        document.exitFullscreen();
        if(document.exitFullscreen){
            document.exitFullscreen();
        } else if(document.mozCalcelFullscreen){
            document.mozCalcelFullscreen();
        } else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        } else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }
        runCb(false);
    }
    return {element, triggerFull, exitFull};
}
const App = () =>{
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small")
    }
    const {element, triggerFull, exitFull} = useFullscreen(onFullS);
  return (
    <div className="App" style={{height: "1000vh"}}>
        <div ref={element}>
            <img ref={element} src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" />
            <br />
            <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
