
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home/Home';
import Navbar from './pages/Home/Navber/Navbar';
import Footer from './pages/Home/Footer/Footer';
import Projects from './pages/Home/Projects/Projects';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Skill from './pages/Home/MySkill/Skill';
import AboutDetails from './pages/Home/About/AboutDetails';
import Blogs from './pages/Home/Blogs/Blogs';
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/aboutDetails" element={<AboutDetails />} />
        <Route path='/skill' element={<Skill/>}/>
        <Route path="/contact" element={<Contact/>} />
        
     
      
      </Routes>
      
    
      <ScrollToTop smooth top='400' />
    
     
      <Footer></Footer>
    </div>
  );
}

export default App;
