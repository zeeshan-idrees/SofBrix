import React from 'react'
import ContactImg from '../images/contact.png'
export default function Contact() {
    return (
        <div className='container-fluid bg-color text-light' id='Contact'>
            <div className='row p-1'>
                <div className="col-xl-6 mt-5 p-3">
                    <img src={ContactImg} className='img-fluid pt-5' />
                  <div className='pt-5 contact-detail'>
                  <div className='fs-6 p-2'>
                        <span className='icon'><i class="fa-solid fa-location-dot"></i> </span>
                        151 New Park Ave, Hartford, CT 06106 United States</div>
                    <div className='fs-6 p-2'>
                        <span className='icon'> <i class="fa-solid fa-phone"></i> </span>
                        +0 123 4567 89</div>
                    <div className='fs-6 p-2'>
                        <span className='icon'><i class="fa-regular fa-envelope"></i> </span>
                        support@waretech.com</div>
                  </div>
                </div>
                <div className="col-xl-6 p-2">
                    <h1 className='feature-heading'>Now Let's Discuss your Project <span> Get a quote!</span></h1>
                    <form action="">
                        <input type="text" placeholder='Full Name' className='p-1 fs-6 mt-4 m-3' /> 
                        <input type="email" placeholder='E-Mail' className='p-1 fs-6 mt-4 m-3' /> <br />
                        <input type="text"  placeholder='Subject' className='p-1 fs-6 mt-4 m-3 subject' /> <br />
                        <textarea name="" id="" cols="30" rows="5" placeholder='Message' className='p-1 fs-6 mt-4 m-3'></textarea>
                    </form>
                    <div className='p-3'><button className='first-btn btn p-2'>Get Free Consultation</button></div>
                </div>
            </div>
        </div>
    )
}
