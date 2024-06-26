import React, { useEffect, useState } from 'react';
import Header from '../components/HeaderAndFooter/Header';
import HeroBanner from '../components/Sports/heroBanner/HeroBanner';
import IndoorAndOutdoor from '../components/Sports/Indoor&Outdoor/IndoorAndOutdoor';
import Stadium from '../components/Sports/Stadium/Stadium';
import Subcribes from '../components/Sports/Subcribes/Subcribes';
import Footer from '../components/HeaderAndFooter/Footer';
import Login from './SignUp&&Login/Login';

function Sports(props) {
    const { showAvatar, setShowAvatar, saveInfo } = props;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Login
                saveInfo={saveInfo}
                setOpen={setOpen}
                open={open}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <Header
                open={open}
                setOpen={setOpen}
                showAvatar={showAvatar}
                setShowAvatar={setShowAvatar}
            />
            <HeroBanner />
            <IndoorAndOutdoor />
            <Stadium />
            <Subcribes />
            <Footer />
        </div>
    );
}

export default Sports;
