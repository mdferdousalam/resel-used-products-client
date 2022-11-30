import React from 'react';

const OrderModal = ({ user, phone }) => {

    const handleOrder = (event) => {

    }


    return (
        <>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{ }</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input type="text" disabled defaultValue={phone?.productName} placeholder='' className="input w-full input-bordered " />
                        <input type="text" disabled defaultValue={`$ ${phone?.price}`} placeholder='' className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Enter your Phone Number +880172400000" className="input w-full input-bordered" />
                        <input type="text" placeholder='Meeting Place' className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;