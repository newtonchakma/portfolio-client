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
            <div className="hr-contact"></div>
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
               
                <div className="p-4 details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
                <div className="info">
                    <div className="photo ">
                    <img src={css} alt="" />
                    </div>
                    <div className="title mt-15 shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
                        <h3>
                          Css 3
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
                <div className="info">
                    <div className="photo">
                    <img src={bootstrap} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          Bootstrap 5
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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
                <div className="p-4  details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
                <div className="info">
                    <div className="photo">
                    <img src={javascript} alt="" />
                    </div>
                    <div className="title">
                        <h3>
                          JavaScript
                        </h3>
                    </div>
                </div>
                </div>


                <div className="p-4  details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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


                <div className="p-4 details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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


                <div className="p-4 details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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

                <div className="p-4  details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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


                <div className="p-4 details shadow-md shadow-dark rounded-md hover:scale-110 duration-500">
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
        </div>
    );
};

export default Skill;





// <div
//             name="skills"
//             className="w-full min-h-screen h-full flex items-center bg-dark pt-[80px] text-gray-300"
//         >
//             {/* Container */}
//             <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//                 <div className="pb-8">
//                     <p className="text-4xl font-bold inline border-b-4 text-white border-black bg-accent px-3">
//                         My Skills
//                         <TypeAnimation className="block-inline"
//                             cursor={true}
//                             sequence={[
//                                 '.',
//                                 2000,
//                                 '. .',
//                                 2000,
//                                 ' . . .',
//                             ]}
//                             wrapper="a"
//                             repeat={3}
//                         />
//                     </p>
//                     <p className="py-6 text-white font-bold">These are the technologies I've worked with</p>
//                 </div>


//                 <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
//                     {skillsData.map((skill) => (
//                         <div
//                             key={skill.id}
//                             className="shadow-md shadow-dark rounded-md hover:scale-110 duration-500"
//                         >
//                             <img
//                                 className="w-16 pt-4 mx-auto"
//                                 src={skill.img}
//                                 alt="HTML icon"
//                             />
//                             <p className="my-4">{skill.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>