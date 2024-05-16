import React from 'react';
import CarouselComponent from '../components/FootBall/carousuel/CarouselComponent';
import GameReport from '../components/FootBall/gameReport/GameReport';
import Schedule from '../components/FootBall/schedule/Schedule';
import AboutClub from '../components/FootBall/aboutclub/AboutClub';
import OurAwards from '../components/FootBall/ourAwards/OurAwards';
import Header from '../components/HeaderAndFooter/Header';
import ProfessionalSkill from '../components/FootBall/ProfessionalSkill/ProfessionalSkill';
import Players from '../components/FootBall/Players/Players';
import Activities from '../components/FootBall/activities/Activities';
import Footer from '../components/HeaderAndFooter/Footer';

function Football(props) {
    
    return (
        <div className='Football position-relative'>
            <Header />
            <CarouselComponent />
            <GameReport />
            <Schedule />
            <AboutClub />
            <OurAwards />
            <ProfessionalSkill />
            <Players />
            <Activities />
            <Footer />
        </div>
    );
}

export default Football;
