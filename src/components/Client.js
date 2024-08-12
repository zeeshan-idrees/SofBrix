import React from 'react'
import Client1 from '../images/client1.jpg'
import Client2 from '../images/client2.jpg'
import Client3 from '../images/client3.jpg'
export default function Client() {
    return (
        <div className='container-fluid text-light' id='client'>
            <h2 className='fs-5 opacity-75 text-center'>HAPPY USERS</h2>
            <h2 className='Client Reviews feature-heading text-center'>Client Reviews</h2>
            <div>
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner pt-5">
                        <div class="carousel-item active">

                            <div className='discription text-center'>
                                <img src={Client1} class="d-block w-10 client-img" alt="..." />
                                <h1 className='fs-4 pt-4'>Mr Phoenix</h1>
                                <h3 className='fs-5 fw-lighter opacity-75'>-Head of Idea</h3>
                                <p>"Professional & modern, a theme designed to help your business stand out from the rest. For marketing firms."</p>
                            </div>
                        </div>
                        <div class="carousel-item ">

                            <div className='discription text-center'>
                                <img src={Client2} class="d-block w-10 client-img" alt="..." />
                                <h1 className='fs-4 pt-4'>Mr Phoenix</h1>
                                <h3 className='fs-5 fw-lighter opacity-75'>-Head of Idea</h3>
                                <p>"Professional & modern, a theme designed to help your business stand out from the rest. For marketing firms."</p>
                            </div>
                        </div>
                        <div class="carousel-item ">

                            <div className='discription text-center'>
                                <img src={Client3} class="d-block w-10 client-img" alt="..." />
                                <h1 className='fs-4 pt-4'>Mr Phoenix</h1>
                                <h3 className='fs-5 fw-lighter opacity-75'>-Head of Idea</h3>
                                <p>"Professional & modern, a theme designed to help your business stand out from the rest. For marketing firms."</p>
                            </div>
                        </div>
</div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            )
}
