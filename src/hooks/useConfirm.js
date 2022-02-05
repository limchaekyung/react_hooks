import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';

const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function"){
    return;
  }
  if(onCancel && typeof onCancel !== "function"){
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)){
      onConfirm();
    }else{
      onCancel();
    }
  }
  return confirmAction;
}
const App = () =>{
  const deleteWorld = () => console.log("Deleting the word");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

export default App;
