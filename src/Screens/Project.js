import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from '../Components/SubComponents/Grid'
// import native from '../Images/native.png'
import Play from '../Images/play.png'
import Custom from '../Images/custom.png'
import youngapp from '../Images/youngapp.png';
import native from '../Images/native.png';
import Portfolio from './Portfolio';
import { NavLink } from 'react-router-dom';  
import NativePage from './pages/Nativepage';
import NavBar from './Navbar';
import iconfacebook from '../Images/iconfacebook.png';
import linkden from '../Images/linkden.png';
import instagram from '../Images/instagram.png';
import brixlogo from '../Images/brixlogo.png';
import vectoricon from '../Images/vectoricon.png'


export default function Project() {
  return (
    <>
    <NavBar bg='bg-black'/>
    <Portfolio/>
    <div className='container-fluid project  mt-5'>
      <h1 className='fs-1 text-center'>
        Our <span className='text-primary'>Impressive</span> Portfolio
      </h1>
      <div className='container-xl d-flex gap-4 '>
      <div className='row'>
    <a href="/Nativepage" className='link col-md-4'  > <Grid img={youngapp} head='Foreveryoung App' subhead='Mobile App Development' /></a>
        <a href="/Playpage" className='link col-md-4' >  <Grid img={Play} head='Play Ground (ESPORT) ' subhead='Design' /></a>
        <a href="/Custompage" className='link col-md-4' >  <Grid img={Custom} head='Custom E-Commerence Hub' subhead='Web Development' /></a>
        <a href="/Fastpage" className='link col-md-4' >  <Grid img={native} head='Fast Page SEO' subhead='Web Development' /></a>
        <a href="/Groundpage" className='link col-md-4' >  <Grid img={Play} head='Ground Fitness' subhead='Web Development' /></a>
        <a href="/Soobzpage" className='link col-md-4' >  <Grid img={native} head='Soobz Online Clothing App' subhead='Web Development' /></a>
        <a href="/Tradepage" className='link col-md-4' >  <Grid img={Custom} head='Trade Kitchen Supplier' subhead='Web Development' /></a>
        <a href="/Quickpage" className='link col-md-4' >  <Grid img={Play} head='Quick Professional Mover' subhead='Web Development' /></a>
        <a href="/Hair" className='link col-md-4' >  <Grid img={native} head='Hair Salon Reviews' subhead='Web Development' /></a>
        <a href="/Alhayat" className='link col-md-4' >  <Grid img={Custom} head='Al Hayyat Group' subhead='Web Development' /></a>

    </div>

        



      </div>
    </div>
    <div className="footer-section mt-5">

                    <div className="pt-5 text-center footer-text">
                        <h5 className=" footer-heading fs_40 fw-600 tc- lh_56  Poppins  mx-0 tc-white pt-3">Create something awesome
                            and extraordinary with us</h5>
                        <h6 className="fs_18 fw-400  lh_32  Poppins tc-white pt-3 pb-5">With a lot of creativity, we can make your dream come true</h6>
                        <div className="d-flex justify-content-center">
                        <NavLink to='/Contact' className='text-style-none'>
                            <button className="footer-button border-0 mx-1 mx-md-0">
                                <div className="Poppins tc-white fs_16 fw-500">Let’s work together</div>
                                <img src={vectoricon} />
                            </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="container">
                        <div className="footer-divider my-5"></div>
                        <div className="footer-bottom_section row ">
                            <div className="col-12 col-lg-6 py-5">
                                <img src={brixlogo} />
                                <div className="social-icons d-flex pt-5 mt-4 ">
                                    <img src={iconfacebook} />
                                    <img src={linkden} />
                                    <img src={instagram} />

                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-3 py-5">
                            <ul className="Poppins fs_14 fw-500 tc-white">
                Company
              <NavLink to='/HomePage'  className='text-style-none'> <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Home </li></NavLink> 
              <NavLink to='/Portfolio'  className='text-style-none'>   <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Portfolio</li></NavLink> 
              <NavLink to='/AboutUs'  className='text-style-none'>  <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >About Us</li></NavLink> 
              </ul>
                            </div>
                            {/* <div className="col-sm-12 col-lg-3 py-5">
                                <ul className="Poppins fs_14 fw-500 tc-white">
                                    Company
                                    <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Our team</li>
                                    <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >Our team</li>
                                    <li className=" footer-area  Poppins fs_14 fw-500 tc-white pt-3"  >Our team</li>
                                </ul>
                            </div> */}

                             <div className="col-sm-12 col-lg-3 py-5">
                                <ul className="Poppins fs_14 fw-500 tc-white">
                                Address
                                    <li className=" footer-area Poppins fs_14 fw-500 tc-white pt-3" >   Deerfields mall, level 4,Abu Dhabi, United Arab Emirates</li>
                                  
                                
                                </ul>
                            </div> 
                            <div className="footer-divider my-5"></div>
                        </div>
                    </div>

                </div>
    </>
  )
}
