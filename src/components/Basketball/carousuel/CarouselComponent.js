import React from 'react';
import './CarouselBasketball.scss';

function CarouselComponent(props) {
    return (
        <div>
            <div className=''>
                <img
                    src='https://oxigeno.bold-themes.com/basketball/wp-content/uploads/sites/6/2017/10/inner-hero-about-us.jpg'
                    className='d-block w-100'
                    alt='celebrity'
                />

                <div className='text-center text-light position-absolute top-20 start-25 p-4'>
                    <span className='fs-3 text-uppercase text-white'>BasketBall Club</span>
                    <h1 className='fs-78 lh-1 my-2'>
                        <span className='fw-bold text-orange text-uppercase'>
                            Believe <span className='text-white'>&</span> Archive
                        </span>
                    </h1>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default CarouselComponent;
