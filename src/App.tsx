import React from 'react';
import './App.css';
import {get} from "./helpers/http"
import CoronaForm from "./components/CoronaForm"
function App() {
  const successCallback = (response: any) => {
    console.warn("Got response: " + JSON.stringify(response))
  };
  get({path: "https://thevirustracker.com/free-api?global=stats", successCallback: successCallback, errorCallback: () => {}});
  return (
    <div className="App">
      <CoronaForm onSubmitted={ (formData) => console.log(formData)} />
    </div>
  );
}

export default App;
