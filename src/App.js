import './App.css';
import { useEffect, useState } from "react";
import o_image from './assets/o_image.png'

import background_test from './assets/background_test.png'


import Header from './components/Header'
import TopSection from './components/TopSection';
import TheCollection from './components/TheCollection';
import Purpose from './components/Purpose'
import Guaranteed from './components/Guaranteed';
import Team from './components/Team'
import Footer from './components/Footer';
import WriteUs from './components/WriteUs';

import { Element, animateScroll as scroll } from 'react-scroll'
import RoadMap from './components/RoadMap';

function App() {

const [isLoaded, setIsLoaded] = useState(false);
const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

useEffect(() => {
    setIsLoaded(true);
}, []);

useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
    }
}, [isLoaded]);

  return (
    <div className="App" style={{background: `url(${background_test})`, backgroundSize: 'cover',  backgroundPosition: 'center'}}>
    {/* <div className="App">  */}
      { !isPageLoaded &&
        <div style={{position: 'absolute', height: '100vh', width: '100vw', backgroundColor: 'white'}}>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <p align='center'><img className='o-image' src={o_image}/></p>
          <p align='center'>Please wait, while we preparing some pigeons for you!</p>

        </div>
      }
      <Element name="headerElement"></Element>
      <Header/>
      <TopSection/>
      <Element name="collectionElement"></Element>
      <TheCollection/>
      <Purpose/>
      <Element name="contractElement"></Element>
      <Guaranteed/>
      <Element name="roadmapElement"></Element>
      <RoadMap/>
      <Element name="teamElement"></Element>
      <Team/>
      <WriteUs/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
