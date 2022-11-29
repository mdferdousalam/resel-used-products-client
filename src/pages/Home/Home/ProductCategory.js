import React from 'react';
import apple from '../../../assets/image/category/apple.png'
import samsung from '../../../assets/image/category/samsung.jpg'
import oppo from '../../../assets/image/category/oppo.png'
import { Link } from 'react-router-dom'
const ProductCategory = () => {
    return (
        <div>
            <h1 className='text-3xl my-10 text-primary font-medium'>Category</h1>
            <div className='grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div>
                    <Link to='/apple'>
                        <img className='rounded-xl' src={apple} alt="" />
                        <p className='text-2xl mt-3 text-primary text-center'>Apple</p>
                    </Link>
                </div>
                <div>
                    <Link to='/samsung'>
                        <img className='rounded-xl' src={samsung} alt="" />
                        <p className='text-2xl mt-3 text-primary text-center'>Samsung</p>
                    </Link>
                </div>
                <div>
                    <Link to='/oppo'>
                        <img className='rounded-xl' src={oppo} alt="" />
                        <p className='text-2xl mt-3 text-primary text-center'>Oppo</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;