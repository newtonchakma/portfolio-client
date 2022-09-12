import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';
import './Contact.css'
const Contact = () => {
    return (
        <div className='bg-base-content py-20'>
            <div className="text-center w-100">
                <h1 className='text-6xl text-white font-bold text-center pb-3 font tracking-widest'>Let's Talk</h1>
                <div className="hr-contact"></div>
            </div>
          
            <div className=" flex justify-around">
            <div className="">
            <form className=' w-full font'>
            <div className="flex max-w-xl mt-4 mx-auto">
                   <input type="text" placeholder="FastName" className="input w-full max-w-xs shadow-lg" required />
                   <input type="text" placeholder="LastName" className="input w-full max-w-xs ml-3 shadow-lg" required/>
                 </div>
                <input type="email" placeholder="Email" className="input w-full mt-4 max-w-2xl shadow"required />
                
                <textarea className="textarea w-full mt-4 max-w-xl shadow-lg" placeholder="Description" required></textarea>
                <br></br>
                <div className='mx-auto max-w-xl text-center mb-4 pb-3'>
                <button className="btn btn-wide my-8 btn-accent font-bold font text-xl text-white shadow-lg">Send</button>
                </div>
                </form>
            </div>
            <div className="text-white " >
                <div className=" contact-right items-center">
                    <div className="text-white text-5xl icon-contact">
                    <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className="text-2xl">
                        +8801817588304
                    </div>
                </div>
                <div className="contact-right items-center">
                <div className="text-white text-5xl icon-contact">
                <i class="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <div className="text-2xl">
                        newtonchakma202@gmail.com
                    </div>
                </div>

                <div className="contact-right items-center">
                <div className="text-white text-5xl icon-contact">
                <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text-2xl">
                       Hathazari, Chittagong
                    </div>
                </div>   
            </div>
            </div>
            <MessengerCustomerChat
    pageId="115474380583599"
    appId="467455062064227"
    // htmlRef="<REF_STRING>"
  /> 
        </div>
    );
};

export default Contact;