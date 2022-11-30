import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import UseTitle from '../../../hooks/UseTitle';
import axios from 'axios';
import OrderModal from './OrderModal';


const SamsungCategory = () => {
    UseTitle('Samsung Category')
    const { loading, setLoading, user } = useContext(AuthContext)
    const [samsung, setSamsung] = useState(null)

    const url = `https://b612-used-products-resale-server-side.vercel.app/products/samsung`
    useEffect(() => {

        axios.get(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(response => {
                console.log(response);
                const productList = response.data
                setSamsung(productList)
                console.log(samsung);
            })
    }, [])

    return (
        <div className='mt-10 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                samsung?.map(phone => phone.status === 'available' && <div className="card text-primary w-96 bg-base-100 shadow-xl">
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
                            <button className="btn btn-primary btn-sm">Wish List</button>
                            <button className="btn btn-primary btn-sm">Report</button>
                            <label
                                htmlFor="order-modal"
                                className="btn btn-primary btn-sm">Buy Now
                            </label>
                        </div>
                    </div>
                    <OrderModal
                        user={user}
                        phone={phone}
                    ></OrderModal>
                </div>)
            }

        </div >
    );
};

export default SamsungCategory;