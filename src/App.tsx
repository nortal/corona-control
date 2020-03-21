import React from 'react';
import './App.css';
import {get} from "./helpers/http"
import Form from "./components/Form"

function App() {
  const successCallback = (response: any) => {
    console.warn("Got response: " + JSON.stringify(response))
  };
  get({path: "https://thevirustracker.com/free-api?global=stats", successCallback: successCallback, errorCallback: () => {}});
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
