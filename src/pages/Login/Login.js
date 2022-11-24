import React, { useContext } from 'react';
import UseTitle from '../../hooks/UseTitle';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import { AuthContext } from '../../context/Authprovider/AuthContext';

const Login = () => {
    UseTitle('Login')
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.form?.pathname || "/"

    const googleProvider = new GoogleAuthProvider();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { providerLogin, userEmail, setuserEmail, setUser, signIn, auth } = useContext(AuthContext)


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                navigate(from, { replace: true })


            })
            .catch((error) => {
                console.error('error:', error);
            })
    }


    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email')
            return
        }

        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('password reset email sent')
            })
            .catch((error) => {
                console.log(error);
            })
    }


    const onSubmit = data => {
        console.log(data)

        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })

            })
            .catch(error => console.log(error))
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

                <select className='border-2 p-4 rounded border-primary' {...register("accountType")}>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="admin">Admin</option>
                </select>

                <input
                    className='mt-10 font-medium border-2 border-primary  w-1/2 rounded mx-auto bg-neutral p-2 hover:bg-primary hover:text-white'
                    type="submit"

                />


                <Link onClick={handleForgetPassword}  >
                    <p className='text-center '>
                        <small className='text-primary font-bold  hover:bg-neutral hover:text-primary hover:p-1'>Forgot your password?</small>
                    </p>
                </Link>
                <p className='text-center'><small>Not registered yet?
                    <Link className=' text-primary font-bold  hover:bg-neutral hover:text-primary hover:p-1' to='/register'>Create an account
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