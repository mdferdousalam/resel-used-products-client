import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/home')
            })
            .catch((error) => console.error(error))
    }


    return (
        <div className=" bg-primary flex justify-between p-10 text-white pt-10 sticky z-50">

            <Link to='/' className="text-xl hidden md:block hover:bg-neutral hover:text-primary hover:rounded hover:p-2">Best Used Phones</Link>
            <div className="form-control">
                <input type="text" placeholder="Search" className="input text-primary input-bordered w-11/12" />
            </div>
            <div className='flex'>

                <div className="">
                    <div className="dropdown text-primary md:hidden z-10">
                        <label tabIndex={0} className="btn btn-nutral btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='hover:bg-accent ' to='/home'>Home</Link></li>
                            <li><Link className=' ' to='/blog'>Blog</Link></li>
                            <li><Link className=' ' to='/addservice'>Add Product</Link></li>
                            <li><Link className=' ' to='/myreviews'>My Buyers</Link></li>
                            <li><Link className=' ' to='/myreviews'>My Orders</Link></li>
                            <li><Link className=' ' to='/login'>Login</Link></li>
                            <li><Link className=' ' onClick={handleLogOut} >Log out</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex ">

                    <div className='hidden md:block'>
                        {
                            user?.uid ?
                                <>
                                    <div className='flex justify-between'>

                                        <Link to='/home' className="text-xl   ">Home</Link>
                                        <Link to='/blog' className="text-xl  ">Blog</Link>
                                        <Link to='/addservice' className="text-xl  ">Add Product</Link>
                                        <Link to='/myreviews' className="text-xl  ">My Product</Link>
                                        <Link to='/myreviews' className="text-xl  ">My Buyer</Link>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to='/home' className=" hover:bg-neutral hover:text-primary hover:rounded hover:p-2 text-xl mr-10 ">Home</Link>
                                    <Link to='/blog' className=" hover:bg-neutral hover:text-primary hover:rounded hover:p-2  text-xl mr-10 ">Blog</Link>

                                </>
                        }


                    </div>
                </div>
                <div className=" hidden md:block">
                    {
                        user?.uid ?
                            <Link onClick={handleLogOut} className="text-xl hover:bg-neutral hover:text-primary hover:rounded hover:p-2 ml-4">Logout</Link>
                            :
                            <Link className='text-xl hover:bg-neutral hover:text-primary hover:rounded hover:p-2' to='/login'>Login</Link>


                    }
                </div>
            </div>
        </div >
    );
};

export default Header;