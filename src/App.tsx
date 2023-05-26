import React from 'react';
import RandomWordGen from './components/RandomWordGen';
import './css/main.css';
import Logo from './components/logo';
import words from './components/words';

function App() {
  
  let item = words[Math.floor(Math.random() * words.length)];
  const givenArray = Array.from(item);

  return (
    <div className="App">
      <Logo />
      <RandomWordGen givenArray={givenArray}/>
    </div>
  );
}

export default App;
