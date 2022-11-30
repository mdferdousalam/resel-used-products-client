import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import OrderModal from './OrderModal';

const Advertise = ({ advertisedProducts }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()



    const handleWishList = (phone) => {
        const name = user.displayName;
        const email = user.email;
        const advertised = {
            ...phone,
            buyerName: name,
            buyerEmail: email,
            wishList: true
        }

        console.log(phone)
        // updating status of products available or not and placing order
        const url = `https://b612-used-products-resale-server-side.vercel.app/updateproducts?id=${phone._id}`
        fetch(url, {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                // 'access-control-allow-origin': '*',
                // mode: "no-cors",lo
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            },
            body: JSON.stringify(advertised)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('Added To Wish List');
                    navigate('/dashboard')
                }
                else {
                    toast.error(data.message);
                }
            })

    }

    const handleReport = phone => {
        console.log(phone);
        const name = user.displayName;
        const email = user.email;
        const reported = {
            ...phone,
            buyerName: name,
            buyerEmail: email,
            reported: true
        }

        console.log(phone)
        // updating status of products available or not and placing order
        const url = `https://b612-used-products-resale-server-side.vercel.app/updateproducts?id=${phone._id}`
        fetch(url, {
            method: 'POST',
            // mode: "no-cors",
            headers: {
                // 'access-control-allow-origin': '*',
                // mode: "no-cors",lo
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            },
            body: JSON.stringify(reported)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('This Product Reported To Admin');
                    navigate('/dashboard')
                }
                else {
                    toast.error(data.message);
                }
            })
    }



    return (
        <div className='my-10'>
            <h1 className='text-3xl my-10 text-primary font-medium'>Featured Products</h1>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    advertisedProducts.map(phone => phone.status === 'available' &&
                        <div
                            key={phone._id}
                            className="card text-primary w-96 bg-base-100 shadow-xl">
                            <figure><img src={phone.productImage} alt="apple" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {phone.productTitle}
                                    <div className="badge badge-neutral">Hot</div>
                                </h2>
                                <p>{phone.description}</p>
                                <p>Location: {phone.location}</p>
                                <p>Condition: {phone.condition}</p>
                                <p>Includes: {phone.includes}</p>
                                <p>Primary Camera: {phone.primaryCamera}</p>
                                <p>Secondary Camera: {phone.seconderyCamera}</p>
                                <p>Screen Size: {phone.screenSize}</p>
                                <p>SIM Count: {phone.simCount}</p>
                                <p>SIM Type: {phone.simType}</p>
                                <p>RAM: {phone.ram}</p>
                                <p>Internal Memory: {phone.internalMemory}</p>
                                <p>Battery: {phone.batteryType}</p>
                                <p>Price: $ {phone.price}</p>

                                <div className="card-actions items-center justify-center">
                                    <p className='font-bold text-neutral text-xl'><em>Login To buy or create wish List</em></p>
                                    {
                                        user?.uid && <button
                                            onClick={() => handleWishList(phone)}
                                            className="btn btn-primary btn-sm">Wish List
                                        </button>
                                    }
                                    {
                                        user?.uid && <button
                                            onClick={() => handleReport(phone)}
                                            className="btn btn-primary btn-sm">Report
                                        </button>
                                    }
                                    {
                                        user?.uid && <label
                                            htmlFor="order-modal"
                                            className="btn btn-primary btn-sm">Buy Now
                                        </label>
                                    }
                                </div>
                            </div>
                            <OrderModal
                                user={user}
                                phone={phone}
                            ></OrderModal>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Advertise;