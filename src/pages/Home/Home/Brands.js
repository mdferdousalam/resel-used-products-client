import React from 'react';
import google from '../../../assets/image/icons/brand--google.svg'
import nokia from '../../../assets/image/icons/brand--nokia.svg'
import samsung from '../../../assets/image/icons/brand--samsung.svg'
import sony from '../../../assets/image/icons/brand--sony.svg'
import iphon from '../../../assets/image/icons/brand--iphone.svg'
import htc from '../../../assets/image/icons/brand--htc.svg'
import huawei from '../../../assets/image/icons/brand--huawei.svg'
import lg from '../../../assets/image/icons/brand--lg.svg'
import motorolla from '../../../assets/image/icons/brand--motorola.svg'

const Brands = () => {
    return (
        <div className=' mt-32 hidden  lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8  '>
            <div className='flex   md:gap-20 mx-auto'>
                <img className='w-20 h-20 bg-base p-1 ' src={sony} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={google} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={nokia} alt="" />
            </div>
            <div className='flex  md:gap-20 mx-auto'>
                <img className='w-20 h-20 bg-base p-1 ' src={samsung} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={iphon} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={htc} alt="" />
            </div>
            <div className='flex   md:gap-20 mx-auto'>
                <img className='w-20 h-20 bg-base p-1 ' src={huawei} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={lg} alt="" />
                <img className='w-20 h-20 bg-base p-1 ' src={motorolla} alt="" />
            </div>
        </div>
    );
};

export default Brands;