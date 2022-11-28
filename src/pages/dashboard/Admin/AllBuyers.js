import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BuyersInfo from './BuyersInfo';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const [deletingBuyer, setDeletingBuyer] = useState(null)

    const { data: buyers, isLoading, refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://b612-used-products-resale-server-side.vercel.app/users/buyers', {
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


    const handleDeleteBuyer = doctor => {
        console.log(doctor)
        fetch(`https://doctors-portal-server-drab.vercel.app/doctors/${doctor._id}`, {
            method: "delete",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('deleted successfully')
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
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
                        buyers?.map((buyer, index) => <BuyersInfo
                            key={buyer._id}
                            buyer={buyer}
                            index={index}
                        ></BuyersInfo>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllBuyers;