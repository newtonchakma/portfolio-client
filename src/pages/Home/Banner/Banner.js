import React from 'react';
import image from '../../../images/image-1.png';
import './Banner.css'



const Banner = () => {
  

    return (
        <div className='bg-base-content flex justify-items-center items-center justify-center'>
          
            
            <div className="">
                <div className="text-white pb-6 ">
                <h1 className='text-7xl font-bold font tracking-wider'>I'm Newton Chakma</h1>
                <h1 className='text-4xl font-bold py-4 text-gray-300 font tracking-wider'>Web Designer & Developer</h1>
                </div>

                { /* social icon */ }
                <div className="text-white text-5xl  " id='socialIcon'>
                <div className="icon rounded-lg shadow-inner">
                <i class="fa-brands fa-facebook"></i>
                </div>
                <div className=" icon rounded-lg shadow-inner">
                <i class="fa-brands fa-github"></i>
                </div>
                <div className="icon rounded-lg shadow-inner">
                <i class="fa-brands fa-linkedin"></i>
                </div>
                </div>
            </div>
            <div className="">
                <img className='w-100 h-100' src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;