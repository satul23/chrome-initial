import React from 'react';
import './Fast.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import { PiSpeedometerBold } from "react-icons/pi";
import Fastvideo from './non-chrome.mp4';
import Faastimage1 from './image.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fastimage2 from './image copy.png';

const Fast = () => {

  return (
 <>
  <section id='fast'>
   <div className='main-fast-div'>
    <div className='heading-div'>
        <h1 className='hi-div'>The <div className='photo-div'>
            <div className='icon-div'><PiSpeedometerBold className='icon'/> </div>
            <div className='icon-fast'>fast</div>
            </div> way to do</h1>
        <h1 className='h2-div'>things online</h1>
    </div>
   <div className='corousel-div'>
   <Carousel interval={null}>
      <Carousel.Item>
        <div className='text-video-div'>
        <div className='text-div-fast'>
            <div style={{display: "flex", flexDirection: 'column', paddingLeft: "42px", paddingBottom: '32px'}}>
        <h2 style={{margin: '0'}}>Prioritise</h2>
        <h2 style={{margin: '0'}}>Performance</h2>
        </div>
        <div style={{display: "flex", flexDirection: 'column', margin: '0'}}>
            <p style={{margin: '0'}}>Chrome is built for performance. Optimise your experience with</p>
            <p style={{margin: '0'}}>features like Energy Saver and Memory Saver</p>
            <p style={{paddingTop: '4%', color: 'blue'}}>Learn more about Memory and Energy Saver </p>
        </div>
       </div>
       <div className='video-div-fast'>
      <video muted autoPlay loop
                className='d-block w-100'
                src={Fastvideo}
                // alt="Video slide 1"
                // controls
              />
              </div> 
              </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='text-video-div'>
        <div className='text-div-fast'>
            <div style={{display: "flex", flexDirection: 'column', paddingLeft: "42px", paddingBottom: '32px'}}>
        <h2 style={{margin: '0'}}>Stay on top</h2>
        <h2 style={{margin: '0'}}>of tabs</h2>
        </div>
        <div style={{display: "flex", flexDirection: 'column', margin: '0'}}>
            <p style={{margin: '0'}}>Chrome has tools to help you manage the tabs you're not quit</p>
            <p style={{margin: '0'}}>ready to close. Group, label, and colour code your tabs to stay</p>
            <p style={{margin: '0'}}>organised and work faster </p>
        </div>
       </div>
       <div className='video-div-fast'>
       <img src={Faastimage1} alt="" />
              </div> 
              </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='text-video-div'>
        <div className='text-div-fast'>
            <div style={{display: "flex", flexDirection: 'column', paddingLeft: "42px", paddingBottom: '32px'}}>
        <h2 style={{margin: '0'}}>Stay on top</h2>
        <h2 style={{margin: '0'}}>of tabs</h2>
        </div>
        <div style={{display: "flex", flexDirection: 'column', margin: '0'}}>
            <p style={{margin: '0'}}>Chrome has tools to help you manage the tabs you're not quit</p>
            <p style={{margin: '0'}}>ready to close. Group, label, and colour code your tabs to stay</p>
            <p style={{margin: '0'}}>organised and work faster </p>
        </div>
       </div>
       <div className='video-div-fast'>
       <img src={Fastimage2} alt="" />
              </div> 
              </div>
      </Carousel.Item>
    </Carousel>
    </div> 
   </div>
   </section>
 </>
  )
}

export default Fast;
