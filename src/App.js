import React from 'react';
import logo from './logo.svg';
import './App.css';
import {get} from "./helpers/http"

function App() {
  const successCallback = (response) => {
    console.warn("Got response: " + JSON.stringify(response))
  };
  get({path: "https://thevirustracker.com/free-api?global=stats", successCallback: successCallback, errorCallback: () => {}});
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
