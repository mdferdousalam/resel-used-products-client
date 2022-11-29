import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/AuthContext';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import UseTitle from '../hooks/UseTitle';
import Header from '../pages/Shared/Header/Header';


const DashboardLayout = () => {
    UseTitle('Dashboard')

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

    // console.log(isAdmin);
    // console.log(isBuyer);
    // console.log(isSeller);
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-accent text-xl text-white">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  ">

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
                                <li> <Link to="/dashboard/allbuyers">ALL Buyers</Link></li>
                                <li><Link to="/dashboard/reportedproducts">Reported Products</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/buyers">My Buyesr</Link></li>
                                <li><Link to="/dashboard/addproduct">Add Products</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }

                        {
                            isBuyer &&
                            <>
                                <li><Link to="/dashboard/orders">My Orders</Link></li>
                                <li><Link to="/dashboard/wishlist">Wish List</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;