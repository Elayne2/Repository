import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact';
import Details from './components/details'
import './style.css'



function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
        <div className='body'>
            <Routes >
                <Route exact path = '/' element = {<Home/>} />
                <Route path = '/about' element = {<About/>} />
                <Route path='/contact' element = {<Contact/>} />
                <Route path='/post/:post_id' element = {<Details/>} />
            </Routes>
        </div>  
      </BrowserRouter>
    </div>
  );
}

export default App;