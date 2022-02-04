import React, {useState, useEffect} from "react"
import logo from './logo.svg';
import './App.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");  //<title></title>
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}
const App = () =>{
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 1000);
  return (
    <div className="App">
    <div>Hi</div>    
    </div>
  );
}

export default App;
