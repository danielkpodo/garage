import React from 'react';
import './App.css';
import M from 'materialize-css';
import Navbar from '../layouts/Navbar';

function App() {
  React.useEffect(() => {
    /** Initializes javscript features of materialize css on page mount */
    M.AutoInit();
  }, []);
  return (
    <div className="">
      <Navbar />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
