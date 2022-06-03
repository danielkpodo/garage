import React, { useEffect } from 'react';
import './App.css';
import Navbar from '../layouts/Navbar';
import Product from '../components/Product/Product';
import About from '../components/About/About';
import Team from '../components/Team/Team';
import Testimonial from '../components/Testimonials/Testimonial';
import Contact from '../layouts/Contact';
import Footer from '../layouts/Footer';
import Pricing from '../components/Pricing/Pricing';
import BackToTop from 'react-back-top';
const reqUrl = 'https://jsonplaceholder.typicode.com/users';

function App() {
  const [spinnerLoader, setSpinnerLoader] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      setTimeout(() => {
        spinner.style.display = 'none';
        setSpinnerLoader(false);
      }, 2000);
    }
    makeRequest(reqUrl);
  }, []);

  async function makeRequest(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log('Failed to retrieve data: ', err.message);
    }
  }

  return (
    !spinnerLoader && (
      <>
        <Navbar />
        <Product />
        <About />
        <Pricing />
        <Team loader={loading} />
        <Testimonial loader={loading} />
        <Contact />
        <Footer />
        <BackToTop
          shape="round"
          icon="fa fa-arrow-up"
          position={{ bottom: '5%', right: '2%' }}
          radius={20}
          background="#F77E21"
          hover={{ background: '#ff8906' }}
        />
      </>
    )
  );
}

export default App;
