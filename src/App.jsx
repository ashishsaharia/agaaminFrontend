import Navbar from './components/navBar/NavBar';
import SectionOne from './components/sectionOne/sectionOne';
import SectionTwo from './components/sectionTwo/sectionTwo';
import SectionThree from './components/sectionThree/sectionThree';
import SectionFour from './components/sectionFour/sectionFour';
import SectionFive from './components/sectionFive/sectionFive';
import SectionSix from './components/sectionSix/sectionSix';
import SectionSeven from './components/sectionSeven/sectionSeven';
import Footer from './components/footer/footer';
import React from 'react';
// import "bootstrap/dist/css/bootstrap.css";
import './App.css'

function App() {
  return(
    <>
    <Navbar></Navbar>
    <SectionOne></SectionOne>
    <SectionTwo></SectionTwo>
    <SectionThree></SectionThree>
    <SectionFour></SectionFour>
    <SectionFive></SectionFive>
    <SectionSix></SectionSix>
    <SectionSeven></SectionSeven>
    <Footer></Footer>
    </>

  )
}

export default App
