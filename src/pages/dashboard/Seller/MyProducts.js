import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import axios from 'axios';
import UseTitle from '../../../hooks/UseTitle';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const MyProducts = () => {
    UseTitle('My Products')
    const [products, setProducts] = useState(null)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()



    const url = `https://b612-used-products-resale-server-side.vercel.app/products?email=${user.email}`
    useEffect(() => {
        axios.get(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken12')}`
            }
        })
            .then(response => {
                console.log(response);
                const productList = response.data
                setProducts(productList)
                console.log(products);
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



    const handleAdvertise = (id) => {

        const advertised = {
            ...products,
            advertised: true

        }
        console.log(id)
        // updating status of products available or not and placing order
        const url = `https://b612-used-products-resale-server-side.vercel.app/updateproducts?id=${id}`
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
                    toast.success('Product Advertised');
                    navigate('/dashboard')
                }
                else {
                    toast.error(data.message);
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
                        <th>Price</th>
                        <th>Status</th>
                        <th>Advertise</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => <tr
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
                                    product?.status === "available" && product.advertised === false &&
                                    <button
                                        onClick={() => handleAdvertise(product._id)}
                                        className="btn btn-primary btn-xs">Advertise</button>
                                }
                            </th>
                            <th><button
                                onClick={() => handleDeleteProduct(product._id)}
                                className="btn btn-primary btn-xs">Delete</button></th>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;