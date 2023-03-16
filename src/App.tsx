import React from 'react';
import RandomWordGen from './components/RandomWordGen';
import './css/main.css';
import Logo from './components/logo';

function App() {
  return (
    <div className="App">
      <Logo />
      <RandomWordGen />
    </div>
  );
}

export default App;
