import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseTitle from '../../../hooks/UseTitle';
import Advertise from './Advertise';
import Banner from './Banner';
import Brands from './Brands';
import ProductCategory from './ProductCategory';

const Home = () => {
    UseTitle('Home')
    const [advertisedProducts, setadvertisedProducts] = useState(null)

    const url = `https://b612-used-products-resale-server-side.vercel.app/advertisedproducts`
    useEffect(() => {
        axios.get(url, {
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken12')}`
            // }
        })
            .then(response => {
                console.log(response);
                const productList = response.data
                setadvertisedProducts(productList)
                console.log(advertisedProducts);
            })
    }, [])

    return (
        <div className='relative'>
            <Banner></Banner>
            {
                advertisedProducts?.length > 0 && <Advertise
                    advertisedProducts={advertisedProducts}
                ></Advertise>
            }
            <ProductCategory></ProductCategory>
            <Brands></Brands>
        </div>
    );
};

export default Home;