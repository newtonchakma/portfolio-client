import React from 'react';
import './Blogs.css'
import Blog from './Blog'

const Blogs = () => {
    return (
        <div className='bg-slate-900 min-h-screen'>
            <div className="blogsTitle px-20 shadow-lg bg-slate-900 shadow-xl">
                <div className=" pb-20">
                    <h1 className='bg-slate-900 text-center text-8xl text-shadow-lg text-white font-bold pt-20  font'>BLOGS</h1>
                </div>
            </div>
            <Blog></Blog>
        </div>
    );
};

export default Blogs;