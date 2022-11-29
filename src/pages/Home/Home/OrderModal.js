import React from 'react';

const OrderModal = () => {

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
                        <input type="text" disabled className="input w-full input-bordered " />
                        <input name="name" type="text" defaultValue={'name'} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={'rer'} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;