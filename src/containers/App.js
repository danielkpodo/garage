import React from 'react';
import './App.css';
import M from 'materialize-css';
import Navbar from '../layouts/Navbar';
import Product from '../components/Product/Product';
import About from '../components/About/About';

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
        <Product />
        <About />
      </>
    )
  );
}

export default App;
