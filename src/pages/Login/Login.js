import React, { useContext, useState } from 'react';
import UseTitle from '../../hooks/UseTitle';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import * as Loader from "react-loader-spinner";
import useToken from '../../hooks/useToken';
import toast from 'react-hot-toast';

const Login = () => {
    UseTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.form?.pathname || "/"

    const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { providerLogin, userEmail, setUserType, signIn, auth, loading, setLoading } = useContext(AuthContext)

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    // console.log(loginUserEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                setLoading(true)
                // const user = result.user;
                setLoginUserEmail(result.user.email)
                // console.log(user);
                // console.log(user);
                // setUser(user)
                setUserType('buyer')
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }


    const onSubmit = data => {
        setLoading(true)
        // console.log(data)
        setLoginUserEmail(data.email)
        // console.log(loginUserEmail)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user.email);
                // setLoginUserEmail(user.email)
                setLoading(false)
                navigate(from, { replace: true })


            })
            .catch(error => {
                setLoading(false)
                toast.error('Failed! please try again')
                console.log(error)
            })
    }

    const handleForgetPassword = () => {
        setLoading(true)
        if (!userEmail) {
            alert('Please enter your email')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password reset email sent')
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed! please try again')
                setLoading(false)
            })
    }

    if (loading) {
        return < Loader.RotatingLines strokeColor="purple"
            strokeWidth="5"
            animationDuration="0.75"
            width="500"
            visible={true}
        />
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold  text-primary my-10'>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-center text-primary mx-auto  w-1/3'>
                <input
                    placeholder='Email'
                    type='email'

                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("email", { required: true })}
                />

                {errors.email && <span>email is required</span>}

                <input
                    placeholder='Password'
                    type='password'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}



                <input
                    className='mt-10 font-medium border-2 border-primary  w-1/2 rounded mx-auto bg-neutral p-2 hover:bg-primary hover:text-white'
                    type="submit"

                />


                <Link onClick={handleForgetPassword}  >
                    <p className='text-center mt-4'>
                        <small className='text-primary font-bold  hover:bg-neutral hover:text-primary hover:p-1'>Forgot your password?</small>
                    </p>
                </Link>
                <p className='text-center'><small>Not registered yet?
                    <Link className=' text-primary font-bold  hover:bg-neutral hover:text-primary hover:p-1' to='/signup'>Create an account
                    </Link></small>
                </p>

            </form>

            <h5 className='mx-auto text-center text-primary mt-6 font-medium'>---------------------------------or----------------------------------------</h5>

            <button onClick={handleGoogleLogin}
                className='border mt-10 hover:bg-neutral hover:text-primary bg-primary text-white border-primary flex px-7 py-2 text-xl rounded-lg font-medium mx-auto items-center'>
                <FaGoogle className='mr-5' />Login with Google
            </button>

        </div>
    );
};

export default Login;