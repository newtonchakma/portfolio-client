import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Navbar from '../Navber/Navbar';
import Projects from '../Projects/Projects';

import Skill from '../MySkill/Skill';

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
          <Skill></Skill>
           <Projects></Projects>
           <Contact></Contact>
        </div>
    );
};

export default Home;