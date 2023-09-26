import React from 'react'
import DemoCarousel from './Carousel'
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function App() {
  const mainstyle = {
    width: '500px',
    margin : 'auto'
  }
  return (
    <div style={{...mainstyle}}>
      <DemoCarousel/>
    </div>
  );
}

export default App;