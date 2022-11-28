import React from 'react';

const BuyersInfo = ({ index, buyer }) => {
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
                            <img src={buyer.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className="font-bold">{buyer.displayName}</div>
                </div>
            </td>
            <td>
                {buyer.email}

            </td>

            <th>
                <button className="btn btn-primary btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default BuyersInfo;