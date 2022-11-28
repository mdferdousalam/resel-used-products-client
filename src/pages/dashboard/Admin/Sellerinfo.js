import React from 'react';

const Sellerinfo = ({ seller, index }) => {
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
                <button className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default Sellerinfo;