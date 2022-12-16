import './App.css';
import React from 'react';
import Home from './Components/Home';
import NodeContext from './Components/Context/NodeContext';

function App() {
  return (
    <>
      <NodeContext >
        <Home />
      </NodeContext>
    </>
  );
}

export default App;
