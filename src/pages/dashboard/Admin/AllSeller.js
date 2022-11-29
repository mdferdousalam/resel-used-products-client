import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
// import BuyersInfo from './BuyersInfo';
import toast from 'react-hot-toast';

import Sellerinfo from './Sellerinfo';

const AllSeller = () => {

    const [deletingSeller, setDeletingSeller] = useState(null)

    const { data: sellers, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://b612-used-products-resale-server-side.vercel.app/users/sellers', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken12')}`
                    }
                })
                const data = await res.json()
                return data;
            } catch (error) {

            }
        }
    });



    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
                <thead>
                    <tr>
                        <th> SL </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sellers?.map((seller, index) => <Sellerinfo
                            key={seller._id}
                            seller={seller}
                            index={index}
                        ></Sellerinfo>)
                    }
                </tbody>
            </table>
        </div>
    );


};

export default AllSeller;