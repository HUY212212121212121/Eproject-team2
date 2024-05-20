import React from 'react';
import './OurAwards.scss';
import AboutClub from '../aboutclub/AboutClub';

function OurAwards(props) {
    return (
        <div className='parallax-content9 text-white position-relative'>
            <div className='ryan-contain'>
                <div className='ryan-number-basketball'>
                    <div className='text-start'>
                        <span className='d-block text-start text-uppercase'>
                            Professional Stuff
                        </span>
                        <span className='fs-48 text-start text-uppercase '>
                            Ryan <span className='text-orange fw-bold'>in number</span>
                        </span>
                        <div>
                            Discerning the various types seems difficult to the untrained eye with
                            the divers twisting and turning quickly before splashing into the club.
                        </div>
                    </div>
                </div>

                <div className='professional-stuff'>
                    <div className=' professional-box'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-shirt icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>234</span>
                        </div>
                        <span className='d-block text-start fs-13 text-uppercase p-2'>
                            Club Founder
                        </span>
                        <span className='d-block text-uppercase text-start fw-bold fs-5 ms-2 mb-3'>
                            Mark Smith
                        </span>
                        <p className='d-block text-start ms-2'>
                            Leverage agile frameworks to provide a robust synopsis for high level
                            overviews. Iterative approaches to corporate.
                        </p>
                    </div>

                    <div className='professional-box box-number-basketball'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-medal icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>99%</span>
                        </div>
                        <span className='d-block text-start fs-13 text-uppercase p-2'>
                            Senior Trainer
                        </span>
                        <span className='d-block text-start text-uppercase fw-bold fs-5 ms-2 mb-3'>
                            Thomas Back
                        </span>
                        <p className='d-block text-start ms-2'>
                            Strategy foster collaborative thinking to further the overall value
                            proposition. Organically grow the holistic world.
                        </p>
                    </div>

                    <div className='professional-box box-number-basketball'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-arrow-up-right-dots icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>47</span>
                        </div>
                        <span className='d-block text-start fs-13 text-uppercase p-2'>
                            Junior Trainer
                        </span>
                        <span className='d-block text-start text-uppercase fw-bold fs-5 ms-2 mb-3'>
                            Sam Douglas
                        </span>
                        <p className='d-block text-start ms-2'>
                            Capitalize on low hanging fruit to identify a ballpark value added
                            activity to beta test. Override the digital divide.
                        </p>
                    </div>

                    <div className='professional-box box-number-basketball'>
                        <div className='d-flex'>
                            <span className='p-2 mt-4'>
                                <i class='fa-solid fa-trophy icon-numbers'></i>
                            </span>
                            <span className='fs-71 fw-bold ms-3'>24</span>
                        </div>
                        <span className='d-block text-start fs-13 text-uppercase p-2'>
                            Fitness Instructor
                        </span>
                        <span className=' d-block text-start text-uppercase fw-bold fs-5 ms-2 mb-3'>
                            Maria Johnson
                        </span>
                        <p className='d-block text-start ms-2'>
                            Leverage agile frameworks to provide a robust synopsis for high
                            Nanotechnology immersion along the information highway will close the
                            loop on focusing solely on the bottom line.
                        </p>
                    </div>
                </div>
            </div>
            <AboutClub />
        </div>
    );
}

export default OurAwards;
