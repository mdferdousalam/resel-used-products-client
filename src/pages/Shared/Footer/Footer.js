import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-primary text-white md:text-xl pt-10 mt-20 relative bottom-0'>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <div className='p-6 text-center'>
                    <Link>About Us</Link>
                    <p>-----------------------------</p><br />
                    <Link>Why Resel</Link>
                    <p>-----------------------------</p><br />
                    <Link>How it Works</Link>
                    <p>-----------------------------</p><br />
                    <Link>FAQs</Link>
                </div>
                <div className='p-6 text-center'>
                    <Link>Resel For Business</Link>
                    <p>-----------------------------</p><br />
                    <Link>Charity</Link>
                    <p>-----------------------------</p><br />
                    <Link>User Reviews</Link>
                    <p>-----------------------------</p><br />
                    <Link>Blog</Link>
                </div>
                <div className='p-6 text-center'>
                    <Link>Contact Us</Link>
                    <p>-----------------------------</p><br />
                    <Link>Careers</Link>
                    <p>-----------------------------</p><br />
                    <Link>privacy</Link>
                    <p>-----------------------------</p><br />
                    <Link>Terms & Conditions</Link>
                </div>
                <div className='text-center'>
                    <div className='flex p-6 mt-10 md:text-3xl text-center'>
                        <Link> <FaFacebook className='' /></Link>
                        <Link className='ml-6'> <FaTwitter /></Link>
                        <Link className='ml-6'> <FaInstagram /></Link>
                        <Link className='ml-6'> <FaYoutube /></Link>
                    </div>
                    <div className='flex mt-10 text-center' >
                        <FaMailBulk className='ml-6 mt-2 md:text-3xl' /> <p className='ml-6'>info@resel.com</p>
                    </div>
                    <div className='flex p-6 mt-10 text-center'>
                        <FaPhoneAlt className='mr-6 mt-2 md:text-3xl' />
                        <div>
                            <p>+8801758074758</p>
                            (Mon-Sat 10AM-7PM)
                        </div>
                    </div>

                </div>
            </div>
            <p className='text-center my-10 pb-10'>All Rights Reserved © 2022 - Buy Sell Ltd</p>
        </div>
    );
};

export default Footer;