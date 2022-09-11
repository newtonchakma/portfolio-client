import React from 'react';
import about from '../../../images/about.png'

const About = () => {
    return (
        <div className='bg-base-content py-35 text-white'>
            <div className=" pt-40">
                <h1 className='text-6xl font-bold text-center pb-3 font tracking-widest'>About</h1>
                <div className="hr-contact"></div>
                <p className='text-2xl px-20  text-gray-400'>My name is Newton Chakma. I am a web designer and developer.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            </div>
          <div className="flex py-10 px-20">
          <div className="">
                <img src={about} alt="" />
            </div>
            <div className=" text-2xl text-gray-400">
                <p className='py-2'><strong className='text-3xl text-white'>Expertise:</strong> Javascript, React.js, HTML5/CSS3, SCSS, Tailwind CSS, Bootstrap 5, Node.js, Express.js, Mongodb.</p>
                <p className='py-2'><strong className='text-3xl text-white'>Comfortable:</strong>  Mongoose, Redux, Firebase ,Daisy UI , Material UI, React Query.</p>
                <p className='py-2'><strong className='text-3xl text-white'>Familiar:</strong>  Next.js, Python,Typescript, Framer Motion.</p>
                <p className='py-2'><strong className='text-3xl  text-white'>Tools:</strong>  Adobe Photoshop, Adobe Illustrator, Figma, Github, Netlify, Heroku, Wordpress, Webflow, Shopify.</p>
                
                
            </div>
          </div>
        </div>
    );
};

export default About;