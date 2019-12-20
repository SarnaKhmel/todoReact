import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootwatch/journal/bootstrap.css"

function App() {
  return (
    <div className="App">
        <WetherDisplay zip=("1,2,3,4,5")/>
    </div>
  );
}

export default App;
