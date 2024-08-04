import React from 'react';
import './Home.css';
import logoimg from '../Navbar/chrome.png'

const Home = () => {
  return (
  <>
   <section className='Home-section'>
     <div className='logo-div'>
       {/* <FaChrome className='home-logo'/> */}
       <img className='logoimg' src={logoimg} alt="" />
     </div>
     <div className='test-div-master'>
     <div className='Text-div'>
        <h1 className='home-h1'>The browser</h1>
        <h1 className='home-h2'>built to be yours</h1>
     </div>
    </div>
    <div className='main-home-nav'>
    <div className="home-nav" >
    <ul className="home-ul">
<li className="home-li">
<a href="" className="home-nav-a" >
Updates</a>
</li>
<li className="home-li">
<a href="" className="home-nav-a" >
Yours</a>
</li>
<li className="home-li">
<a href="" className="home-nav-a" >
Safe</a>
</li>
<li className="home-li">
<a href="#fast" className="home-nav-a" >
Fast</a>
</li>
<li className="home-li">
<a href="" className="home-nav-a" >
By Google</a>
</li>
</ul>
  </div>
  </div>
  <div className='h5-div'>
    <p>Need the Chrome installer?<span style={{color: 'blue'}}>Download Here.</span></p>
  </div>
   </section>
  </>
  )
}

export default Home;