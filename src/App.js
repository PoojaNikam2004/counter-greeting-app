import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';
function App() {
  return (
    <div className="App">
      

      <Greeting name="Pooja" />
      <h1>Welcome</h1>
      
      <input type="text" placeholder="Enter your name" />
      <Counter />
    </div>
  );
}

export default App;
