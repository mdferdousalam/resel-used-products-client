import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Authprovider/AuthContext';
import UseTitle from '../../hooks/UseTitle';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import useToken from '../../hooks/useToken';

const SignUp = () => {
    UseTitle('SignUp')

    const { createUser, setUser, setUserType, providerLogin, updateUserProfile } = useContext(AuthContext)

    const imageHostKey = process.env.REACT_APP_imgbb_key

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.form?.pathname || "/";

    const [imageUrl, setImageUrl] = useState('')

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [profileEamil, setNewProfileEmail] = useState('')


    // console.log(profileEamil);

    const [token] = useToken(createdUserEmail)


    console.log(createdUserEmail);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const googleProvider = new GoogleAuthProvider();

    if (token) {
        navigate('/');
    }


    const onSubmit = data => {
        const name = data.name
        const email = data.email;
        const password = data.password;
        const image = data.image[0]
        const accountType = data.accountType

        // image host server 
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const photoURL = imageData.data.url
                // console.log(photoURL)
                setImageUrl(photoURL)
                // console.log(imageUrl)
                toast.success("image uploaded successfully")
                // create user after image hosted successfully 

                const userInfo = {
                    displayName: name,
                    email: email,
                    password: password,
                    photoURL: photoURL,
                    accountType: accountType
                }
                //creating user
                createUser(email, password)
                    .then(result => {
                        setCreatedUserEmail(email)
                        // setNewProfileEmail(email)
                        // setCreatedUserEmail(result.user.email)
                        const user = result.user
                        // user seting 
                        // user account type setup 
                        // setUserType(accountType)
                        // toast.success("user created successfully")
                        console.log(email);
                        // user profile updating 
                        // const newUser = { ...userInfo }
                        // setUser(newUser, user)
                        handleUpdateUserProfile(name, photoURL, email)
                        // navigate(from, { replace: true })
                    }).catch(err => console.log(err))


                //updating user info
                const handleUpdateUserProfile = (name, photoURL, email) => {
                    const profileInformation = {
                        displayName: name,
                        photoURL: photoURL
                    }
                    updateUserProfile(profileInformation)
                        .then(() => {
                            // console.log(photoURL)
                            // setCreatedUserEmail(email)
                            console.log(email)
                            toast.success("user profile updated successfully")

                        })
                        .catch(err => console.log(err))
                }

                // save user info in database
                fetch('https://b612-used-products-resale-server-side.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.result.acknowledged) {
                            toast.success('User saved to database successfully')
                            navigate(from, { replace: true })
                        }
                    })
            }).catch(err => console.log(err))
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                setUserType('buyer')
                // setCreatedUserEmail(user.email)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.error('error:', error);
            })
    }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold  text-primary my-10'>SignUp</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-center text-primary mx-auto  w-1/3'>

                <input
                    placeholder='Full Name'
                    title='Enter your profile Name'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("name", { required: true })}
                />

                {errors.name && <span>email is required</span>}

                <input
                    placeholder='Email'
                    title='Choose your profile email'
                    type='email'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("email", { required: true })}
                />
                {errors.email && <span>email is required</span>}

                <input
                    placeholder='Password'
                    type='password'
                    title='Choose your profile password'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("password", { required: true })}
                />
                {errors.password && <span>Password is required</span>}
                <input
                    type='file'
                    title='Choose your profile Picture'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("image", { required: true })}
                />
                {errors.image && <span>image is required</span>}

                <select
                    defaultChecked='buyer'
                    title='Choose your profile Type'
                    className='border-2 p-4 rounded border-primary'
                    {...register("accountType")}
                >
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>

                </select>

                <input
                    className='mt-10 font-medium border-2 border-primary  w-1/2 rounded mx-auto bg-neutral p-2 hover:bg-primary hover:text-white'
                    type="submit"

                />

                <p className='text-center mt-4'>
                    <small>Allready Have an Account?
                        <Link
                            className=' text-primary font-bold  hover:bg-neutral hover:text-primary hover:p-1' to='/login'> Please Login
                        </Link>
                    </small>
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

export default SignUp;