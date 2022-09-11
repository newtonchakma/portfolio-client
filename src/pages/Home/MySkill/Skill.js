import React from 'react';
import './skill.css';
import react from '../../../images/react.png';
import node from '../../../images/node.png';
import css from '../../../images/css.png';
import tailwind from '../../../images/tailwind.png';
import bootstrap from '../../../images/bootstrap.png';
import javascript from '../../../images/javascript.png';
import mongodb from '../../../images/mongodb.png';
import express from '../../../images/express.png';
import wordpress from '../../../images/wordpress.png';

const Skill = () => {
    return (
        <div className='bg-base-content py-35 text-white  '>
            <h2 className='text-6xl font-bold text-center pb-3 font tracking-widest'>My Skill</h2>
            {/* <div className="skill-details flex flex-wrap text-center">  md:w-1/3 sm:w-1/2 */}
            <div className="skill-details text-center px-60">
               
                <div className="p-4 details">
                <div className="info">
                    <div className="photo ">
                    <img src={css} alt="" />
                    </div>
                    <div className="title mt-15 ">
                        <h3>
                          Css3
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details">
                <div className="info">
                    <div className="photo">
                    <img src={bootstrap} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Bootstrap
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details">
                <div className="info">
                    <div className="photo">
                    <img src={tailwind} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Tailwind
                        </h3>
                    </div>
                </div>


                </div>
                <div className="p-4  details">
                <div className="info">
                    <div className="photo">
                    <img src={javascript} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          React.js
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details">
                <div className="info">
                    <div className="photo">
                    <img src={react} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          React.js
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4 md:w-1/4 sm:w-1/2 details">
                <div className="info">
                    <div className="photo">
                    <img src={mongodb} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          mongodb
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4 md:w-1/4 sm:w-1/2  details">
                <div className="info">
                    <div className="photo">
                    <img src={node} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Node.js
                        </h3>
                    </div>
                </div>
                </div>

                <div className="p-4 md:w-1/4 sm:w-1/2  details">
                <div className="info">
                    <div className="photo">
                    <img src={express} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Express.js
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4 md:w-1/4 sm:w-1/2  details">
                <div className="info">
                    <div className="photo">
                    <img src={wordpress} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Wordpress
                        </h3>
                    </div>
                </div>
                </div>
               
               
            </div>
        </div>
    );
};

export default Skill;