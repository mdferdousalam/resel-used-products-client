import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/Authprovider/AuthContext';
import { useNavigate } from 'react-router-dom';
import logoimg from '../../../assets/image/android-chrome-192x192.png'


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
        <div className="bg-primary  flex justify-between p-10 text-white pt-10  z-50">
            <div className='flex items-center'>
                <img className='rounded-full mr-2 w-10 h-10' src={logoimg} alt="" />
                <Link to='/' className="text-xl md:text-3xl hidden md:block  p-2">Best Used Phones</Link>
            </div>
            {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input text-primary input-bordered w-11/12" />
            </div> */}
            <div className='flex'>

                <div className="">
                    <div className="dropdown text-primary md:hidden z-10">
                        <label tabIndex={0} className="btn btn-nutral btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="z-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='hover:bg-accent ' to='/home'>Home</Link></li>
                            <li><Link className=' ' to='/blog'>Blog</Link></li>
                            <li><Link className=' ' to='/dashboard'>Dashboard</Link></li>
                            {
                                user?.uid ?
                                    <li><Link className=' ' onClick={handleLogOut} >Log out</Link></li>
                                    :
                                    <li><Link className=' ' to='/login'>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex ">

                    <div className='hidden md:block'>
                        {
                            user?.uid ?
                                <>
                                    <div className='flex justify-between'>

                                        <Link to='/home' className="text-xl md:text-3xl  ml-4  p-2 ">Home</Link>
                                        <Link to='/blog' className="text-xl md:text-3xl ml-4  p-2 ">Blog</Link>
                                        <Link to='/dashboard' className="text-xl md:text-3xl ml-4  p-2">Dashboard</Link>
                                        <Link onClick={handleLogOut} className="text-xl md:text-3xl  p-2 ml-4">Logout</Link>
                                    </div>
                                </>
                                :
                                <>
                                    <Link to='/home' className="  p-2 text-xl md:text-3xl mr-10 ">Home</Link>
                                    <Link to='/blog' className="  p-2  text-xl md:text-3xl mr-10 ">Blog</Link>
                                    <Link className='text-xl md:text-3xl  p-2' to='/login'>Login</Link>

                                </>
                        }



                    </div>
                </div>

            </div>
        </div >
    );
};

export default Header;