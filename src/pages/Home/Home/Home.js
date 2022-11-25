import React from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Advertise from './Advertise';
import Banner from './Banner';
import Brands from './Brands';
import ProductCategory from './ProductCategory';

const Home = () => {
    UseTitle('Home')
    return (
        <div className='relative'>
            <Banner></Banner>
            <Advertise></Advertise>
            <ProductCategory></ProductCategory>
            <Brands></Brands>
        </div>
    );
};

export default Home;