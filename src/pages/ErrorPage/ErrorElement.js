import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import UseTitle from '../../hooks/UseTitle';
import * as Loader from "react-loader-spinner";
const ErrorElement = () => {
    UseTitle('Error')
    const { loading, setLoading } = useContext(AuthContext)

    const handleErrorLoader = () => {
        setLoading(false)
    }

    if (loading) {
        return < Loader.RotatingLines strokeColor="red"
            strokeWidth="5"
            animationDuration="2"
            width="500"
            visible={true}
        />
    }
    return (
        < div className='text-4xl text-center mt-60 text-error font-medium' >
            {
                setLoading(true)
            }
            <h1>Upps! your search link is not available.</h1>
            <p>404 Not Found</p>
            <p >Please check the link you clicked</p>

            {
                setLoading(false)
            }
            <Link onClick={handleErrorLoader} to='/home' className='btn btn-neutral text-primary'>Go Home</Link>
        </div >

    );
};

export default ErrorElement;