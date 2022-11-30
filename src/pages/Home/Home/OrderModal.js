import React from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const OrderModal = ({ user, phone }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.form?.pathname || "/";

    const handleOrder = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phone.value;
        const meetingPlace = form.meetingPlace.value;

        const statusUpdateing = {
            ...phone,
            buyerName: name,
            buyerEmail: email,
            buyerPhoneNumber: phoneNumber,
            meetingPlace,
            status: 'booked'
        }

        // updating status of products available or not and placing order
        const url = `https://b612-used-products-resale-server-side.vercel.app/updateproducts?id=${phone._id}`
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
            body: JSON.stringify(statusUpdateing)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    navigate('/dashboard/orders')
                }
                else {
                    toast.error(data.message);
                }
            })

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
                        <input name="productName" type="text" disabled defaultValue={phone?.productName} placeholder='' className="input w-full input-bordered " />
                        <input name="price" type="text" disabled defaultValue={`$ ${phone?.price}`} placeholder='' className="input w-full input-bordered " />
                        <input name="phone" type="text" placeholder="Enter your Phone Number +880172400000" className="input w-full input-bordered" />
                        <input name="meetingPlace" type="text" placeholder='Meeting Place' className="input w-full input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default OrderModal;