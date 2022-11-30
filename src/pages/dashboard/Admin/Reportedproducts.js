import React, { useContext, useEffect, useState } from 'react';
import UseTitle from '../../../hooks/UseTitle';
import axios from 'axios';
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Reportedproducts = () => {
    UseTitle('Reported Products')

    const [reportedProducts, setReportedProducts] = useState(null)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()


    const url = `https://b612-used-products-resale-server-side.vercel.app/reportedtedproducts?email=${user.email}`
    useEffect(() => {
        axios.get(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(response => {
                console.log(response);
                const productList = response.data
                setReportedProducts(productList)
                console.log(reportedProducts);
            })
    }, [])

    const handleDeleteProduct = id => {
        console.log(id)
        const url = `https://b612-used-products-resale-server-side.vercel.app/deleteproducts?id=${id}`
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
        <div className="overflow-x-auto w-full">
            <table className="table  w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Product Name</th>
                        <th>Product Brand</th>
                        <th>seller Email</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Message</th>
                        <th>Reporter</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportedProducts?.map((product, index) => <tr
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
                            <td>$ {product?.sellerEmail}</td>
                            <td>$ {product?.price}</td>
                            <td>{product?.status} </td>
                            <td>{product?.message} </td>
                            <td>{product?.reporterEmail} </td>
                            <th><button

                                className="btn btn-primary btn-xs">Delete</button></th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Reportedproducts;