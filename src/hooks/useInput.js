import React, {useState} from "react"
import logo from './logo.svg';
import './App.css';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: {value}
    } = event;
    let WillUpdate = true;
    if(typeof validator === "function"){
      WillUpdate = validator(value);
    }
    if(WillUpdate){
      setValue(value);
    }
  }
  return {value, onChange};
}
const App = () =>{
  const maxLen = (value) => !value.includes("@");  //true return
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" /* value={name.value} */ {...name}/>
    </div>
  );
}

export default App;
