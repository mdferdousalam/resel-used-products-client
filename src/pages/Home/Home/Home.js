import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Advertise from './Advertise';
import Banner from './Banner';
import ProductCategory from './ProductCategory';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductCategory></ProductCategory>
        </div>
    );
};

export default Home;