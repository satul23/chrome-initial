import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home.js';
import Navbar from './components/Navbar/Navbar.jsx';
import login from './components/Animation/image copy 2.png';
import googlesearch from './components/Animation/image copy 3.png';
import googlesearch2 from './components/Animation/image copy 4.png';
import googlesearch3 from './components/Animation/image copy.png';
import googlesearch4 from './components/Animation/image.png';
import Animation from './components/Animation/Animation.js';
import Fast from './components/fast-section/Fast.js';

function App() {
    const images = [
      { src: googlesearch, width: '150px'},
        { src: googlesearch2, width: '520px'},
        { src: googlesearch3, width: '520px'},
        { src: googlesearch4, width: '520px'},
        { src: login, width: '150px'}
    ];

    return (
        <>
            <Navbar />
            <Home />
            <div className="App">
                {images.map((image, index) => (
                    <Animation key={index} src={image.src} index={index}  width={image.width}/>
                ))}
                <div style={{ height: '400px' }}></div> 
            </div>
            <Fast/>
        </>
    );
}

export default App;
