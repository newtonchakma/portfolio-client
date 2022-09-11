
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home/Home';
import Navbar from './pages/Home/Navber/Navbar';
import Blog from './pages/Home/Blogs/Blog';
import Footer from './pages/Home/Footer/Footer';
import Projects from './pages/Home/Projects/Projects';
import About from './pages/Home/About/About';
import Contact from './pages/Home/Contact/Contact';
import Skill from './pages/Home/MySkill/Skill';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path='/skill' element={<Skill/>}/>
        <Route path="/contact" element={<Contact/>} />
     
      
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
