// import logo from './logo.svg';

import React, { useState, useEffect } from "react";
import './App.css';
import Axios from "axios";

function App() {
  const [tag, setTag] = useState("");
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");
  const [writers, setWriters] = useState(0);

  const [queryData, setQueryData] = useState([])


  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setQueryData(response.data);
    });
  }, [])

  const addToList = () => {
    // console.log(tag + label + desc + writers);
    Axios.post("http://localhost:3001/insert", {
      tag: tag,
      label: label,
      description: description,
      writers: writers
    });
  };

  return (
    <div className="App">
      <div className="Container">
        <h1>Test</h1>
        <form action="" method="">
          <label htmlFor="tag">Tag</label>
          <input type="text"
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
          <label htmlFor="label">Label</label>
          <input type="text" name="label" id=""
            onChange={(e) => {
              setLabel(e.target.value);
            }}
          />
          <label htmlFor="description">Description</label>
          <input type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }} />
          <label htmlFor="writers">Writers</label>
          <input type="number"
            onChange={(e) => {
              setWriters(e.target.value);
            }}
          />
          <button onClick={addToList}>Submit</button>
        </form>
      </div>
      <div>
        {queryData.map((val, key) => {
          return (
            <div className="Container" key={key}>
              <ul>
                <li>{val.tag}</li>
                <li>{val.label}</li>
                <li>{val.description}</li>
                <li>{val.writers}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div >
  );
}

export default App;
