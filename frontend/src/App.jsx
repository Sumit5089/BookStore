import React from 'react';
import Navbar from './components/Navbar';
import Baner from './components/Baner';
import Footer from './components/Footer';
import { Freebook } from './components/Freebook';

const App = () => {
  return (
    <>
     <Navbar />
     <Baner/>
     <Freebook/>
     <Footer />
    </>
  )
}

export default App