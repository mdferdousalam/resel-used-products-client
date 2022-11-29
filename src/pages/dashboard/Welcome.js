import React, { useContext } from 'react';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import UseTitle from '../../hooks/UseTitle';
import useBuyer from '../../hooks/useBuyer'
const Welcome = () => {
    UseTitle('Welcome Dashboard')
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    return (
        <div>
            {
                isAdmin && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Admin Dashboard</h1>
                </>
            }
            {
                isSeller && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Seller Dashboard</h1>
                </>
            }
            {
                isBuyer && <>
                    <h1 className='text-4xl text-center text-primary mt-64'>Welcome to your Buyer Dashboard</h1>
                </>
            }
        </div>
    );
};

export default Welcome;