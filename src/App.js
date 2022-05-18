import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <div className="outer">
        <div className="inner">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;