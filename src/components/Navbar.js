import React from 'react'
import Logo from '../images/logo.png'
export default function Navbar() {

  return (
    <nav class="navbar  navbar-expand-lg bg-color bg fixed-top  ">
      <div class="container-fluid  justify-content-between  ">
       
          <div className='brand col'>
            <img src={Logo} className='navbar-brand img-fluid px-4' />
          </div>

          <button class="navbar-toggler col-2 p-0 m-0 " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end bg-black  " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header ">
              
              <button type="button" class="btn-close bg-info text-light " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body fs-6  col  ">
              <ul class="navbar-nav flex-grow-1  justify-content-around">
                <li class="nav-item">
                  <a class="nav-link fw-bold active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item  ">
                  <a class="nav-link fw-bold  text-light" href="#">Page</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold text-light" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold text-light" href="#">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold text-light" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold text-light" href="#">Contact</a>
                </li>

              </ul>

            </div>
          </div>
          <div className='col number text-white-50 text-center px-3'>Call Us: <span className='text-light opacity-100 fw-bold '>+9200000000</span></div>
        </div>
   </nav>
 )
}
