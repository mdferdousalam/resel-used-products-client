import React from 'react';
import bannerimg from '../../../assets/image/bannerimage/banner image.png'

const Banner = () => {
    return (
        <div>
            <div className="hero mt-20 mb-32 ">
                <div className="hero-content flex-col lg:flex-row max-w-[1440px] p-0 gap-10">
                    <img src={bannerimg} className=" w-full rounded-lg shadow-2xl" alt='banner' />
                    <div className='text-primary'>
                        <h1 className="text-5xl  font-bold">Buy & Sell From Us!</h1>
                        <p className="py-6 text-justify">Buying a used phone, directly from another seller, typically means you're getting the best price available. We make it easy to find a gently used phone at a cheaper price.Used phone prices decline steadily over time meaning you can get a great deal today. New iPhones, sold by Apple and other retailers, usually only see a price drop around that time of the next model release.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;