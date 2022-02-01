import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

const App = () =>{
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>IncremenetItem</button>
      <button onClick={decrementItem}>decremenetItem</button>
    </div>
  );
}

export default App;
