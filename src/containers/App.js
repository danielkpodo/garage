import React from 'react';
import './App.css';
import M from 'materialize-css';
import Navbar from '../layouts/Navbar';

function App() {
  const [isLoading, setisLoading] = React.useState(true);
  React.useEffect(() => {
    /** Initializes javscript features of materialize css on page mount */
    M.AutoInit();

    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = 'none';
        setisLoading(false);
      }, 2000);
    }
  }, []);

  return (
    !isLoading && (
      <>
        <Navbar />
      </>
    )
  );
}

export default App;
