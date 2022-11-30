import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Sellerinfo = ({ seller, index }) => {

    const navigate = useNavigate()

    const handleDeleteSeller = id => {
        console.log(id)
        const url = `https://b612-used-products-resale-server-side.vercel.app/users?id=${id}`
        fetch(url, {
            method: "delete",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully')
                    navigate('/dashboard')
                }
            })
    }

    return (
        <tr className='text-primary'>
            <th>
                <label>
                    {index + 1}
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={seller.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="font-bold">{seller.displayName}</div>
                </div>
            </td>
            <td>
                {seller.email}

            </td>

            <th>
                <button
                    onClick={() => handleDeleteSeller(seller._id)}
                    className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default Sellerinfo;