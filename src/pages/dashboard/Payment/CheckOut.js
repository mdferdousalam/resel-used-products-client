import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import UseTitle from '../../../hooks/UseTitle';

const CheckOut = ({ booking }) => {
    UseTitle('Checkout')


    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const { price, _id, buyerName, buyerEmail, buyerPhoneNumber } = booking;

    useEffect(() => {
        // PaymentIntent 
        fetch("https://b612-used-products-resale-server-side.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card

        });


        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: buyerName,
                        email: buyerEmail,
                        phone: buyerPhoneNumber
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            console.log('card info', card)
            // store payment info in the database
            const payment = {
                ...booking,
                transectionId: paymentIntent.id,
                status: 'paid'
            }
            fetch('https://b612-used-products-resale-server-side.vercel.app/updateproducts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken12')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        setSuccess('Congrats! your payment completed')
                        setTransectionId(paymentIntent.id)
                    }
                })

        }
        setProcessing(false)
        console.log('paymentIntent', paymentIntent);
    }

    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button
                        className='btn btn-outline btn-sm mt-6 btn-primary'
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}

                    >
                        Pay
                    </button>
                    <p className="text-red-500">{cardError}</p>
                    {
                        success && <div>
                            <p className='text-green-500'>{success}</p>
                            <p>Your Transection ID: <strong>{transectionId}</strong> </p>
                        </div>
                    }
                </form>

            </>
        </div>
    );
};

export default CheckOut;