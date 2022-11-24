import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../hooks/UseTitle';

const ErrorElement = () => {
    UseTitle('Error')
    return (
        <div className='text-4xl text-center mt-60 text-error font-medium'>
            <h1>Upps! your search link is not available.</h1>
            <p>404 Not Found</p>
            <p >Please check the link you clicked</p>
            <Link to='/home' className='btn btn-neutral text-primary'>Go Home</Link>
        </div>

    );
};

export default ErrorElement;