import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MapComponent } from './mapComponent/MapComponent';
import { PinsList } from './pinsList/PinsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        hello in vaccation pin app
      </header>
      <div className="main-wrapper">
        <MapComponent></MapComponent>
        <PinsList></PinsList>
      </div>
    </div>
  );
}

export default App;
