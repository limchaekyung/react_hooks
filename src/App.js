import React, {useState, useEffect, useRef} from "react"
import logo from './logo.svg';
import './App.css';
import useAxios from "./hooks/useAxios"

const App = () =>{
    const { loading, data, error, refetch } = useAxios({
      url: "https://yts.mx/api/v2/list_movies.json",
    });
    
    return (
      <div className="App">
        <h1>{data && data.status}</h1>
        <h2>{loading && "loading"}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>
    );
}

export default App;
