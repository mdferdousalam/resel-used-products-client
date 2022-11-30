import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../../hooks/UseTitle';
import CheckOut from './CheckOut';


const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    UseTitle('Payment')
    const booking = useLoaderData();
    console.log('booked product', booking)


    return (
        <div className='text-primary text-center'>
            <h1 className='text-3xl  my-10'>Payment For {booking.productName}</h1>
            <p className='text-center text-xl '>Please pay {booking.price}</p>
            <img className='w-96 ml-72 my-10' src={booking.productImage} alt="" />
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;