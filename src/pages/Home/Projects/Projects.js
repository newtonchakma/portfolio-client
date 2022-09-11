import React from 'react';

const Projects = () => {
    return (
   <div className="bg-base-content h-screen py-20">
     <div className="pb-10">
     <h1 className='text-6xl mb-10 font-bold text-center text-white font tracking-widest'>My Projects</h1>
        <div className="hr-contact"></div>
     </div>
     <div className='flex justify-around '>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body bg-slate-700 text-white">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body bg-slate-700 text-white">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
            <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body bg-slate-700 text-white">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    
  </div>
</div>
       
        </div>
   </div>
    );
};

export default Projects;