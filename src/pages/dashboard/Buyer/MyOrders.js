import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../../hooks/UseTitle';
import axios from 'axios';
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import { Link } from 'react-router-dom';


const MyOrders = () => {
    UseTitle('My Orders')

    const [orderedProducts, setOrderedProducts] = useState(null)
    const { user } = useContext(AuthContext)
    const url = `https://b612-used-products-resale-server-side.vercel.app/orderedproducts?email=${user.email}`
    useEffect(() => {
        axios.get(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(response => {
                console.log(response);
                const productList = response.data
                setOrderedProducts(productList)
                console.log(orderedProducts);
            })
    }, [])



    return (
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Product Brand</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderedProducts?.map((product, index) => <tr
                            key={product._id}
                            seller={product}
                            index={index}
                            className='text-primary'>
                            <th><label>{index + 1}</label></th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar"><div className="mask  w-20 h-20"><img src={product?.productImage} alt="Phone" /></div> </div>
                                    <div className="font-bold">{product?.productName}</div>
                                </div>
                            </td>
                            <td>{product?.productBrand}</td>
                            <td>$ {product?.price}</td>
                            <td>{product?.status} </td>
                            <th>
                                {
                                    product?.price && product.status === 'booked' && <Link to={`/dashboard/payment/${product._id}`}>

                                        <button className="btn btn-primary btn-xs">Pay</button></Link>
                                }
                                {
                                    product?.price && product.status === 'paid' && <span className='text-primary'>Paid</span>
                                }
                            </th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;