import React from 'react';
import Service from '../../Sharied/Service/Service';
import Navigation from './../../Sharied/Navigation/Navigation';
import AponmentBanner from './../AponmentBanner/AponmentBanner';
import Banner from './../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <Service></Service>
            <AponmentBanner></AponmentBanner>
           
        </div>
    );
};

export default Home;