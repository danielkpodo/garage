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

function App() {
  const [isLoading, setisLoading] = React.useState(true);
  useEffect(() => {
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
        <Pricing />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </>
    )
  );
}

export default App;
