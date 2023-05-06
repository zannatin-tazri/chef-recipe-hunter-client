import React from 'react';
import Header from '../../../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;