import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './page/HomePage';
import BasketBall from './page/BasketBall';
import BaseBall from './page/BaseBall';
import Football from './page/Football';
import ContactUs from './page/ContactUs';
import Register from './page/register/Register';
import Historyyy from './page/history/Historyyy';
import Sports from './page/Sports';
import Tennis from './page/Tennis';
import BookStadium from './page/BookStadium';
import { useState } from 'react';
import FacilityEvent from './page/FacilityEvent';
import FacilityChild from './page/FacilityChild';

function App() { 
    const [Infor,setInfor]= useState([])
    // const [count, setCount] = useState(2);
    return (
       
        <div className='App'>
            <Routes>
                <Route element={<HomePage />} path='/' />
                <Route element={<Register Infor={Infor} setInfor={setInfor}/>} path='/register'/>
                <Route element={<Historyyy Infor={Infor} setInfor={setInfor}/>} path='/history'/>
                <Route element={<Sports />} path='/sports'>
                <Route element={<BookStadium />} path='bookstadium' />
                </Route>
                <Route element={<Register />} path='/register' />
                <Route element={<BasketBall />} path='/basketball' />
                <Route element={<BaseBall />} path='/baseball' />
                <Route element={<Tennis />} path='/tennis' />
                <Route element={<Football />} path='/football' />
                <Route element={<ContactUs />} path='/contact' />
                <Route element={<FacilityEvent/>} path='/event'/>
                <Route element={<FacilityChild/>} path='/child'/>

                
            </Routes>
        </div>
    );
}

export default App;
