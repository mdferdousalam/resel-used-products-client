import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AllBuyers from "../pages/dashboard/Admin/AllBuyers";
import AllSeller from "../pages/dashboard/Admin/AllSeller";
import Reportedproducts from "../pages/dashboard/Admin/Reportedproducts";
import MyOrders from "../pages/dashboard/Buyer/MyOrders";
import Wishlist from "../pages/dashboard/Buyer/Wishlist";
import Payment from "../pages/dashboard/Payment/Payment";
import AddProduct from "../pages/dashboard/Seller/AddProduct";
import MyBuyers from "../pages/dashboard/Seller/MyBuyers";
import MyProducts from "../pages/dashboard/Seller/MyProducts";
import Welcome from "../pages/dashboard/Welcome";
import ErrorElement from "../pages/ErrorPage/ErrorElement";
import AppleCategory from "../pages/Home/Home/AppleCategory";
import Home from "../pages/Home/Home/Home";
import OppoCategory from "../pages/Home/Home/OppoCategory";
import SamsungCategory from "../pages/Home/Home/SamsungCategory";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
// import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
// import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/apple',
                element: <PrivateRoute><AppleCategory></AppleCategory></PrivateRoute>
            },
            {
                path: '/samsung',
                element: <PrivateRoute><SamsungCategory></SamsungCategory></PrivateRoute>
            },
            {
                path: '/oppo',
                element: <PrivateRoute><OppoCategory></OppoCategory></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <AdminRoute><Reportedproducts></Reportedproducts></AdminRoute>
            },
            {
                path: '/dashboard/orders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist></Wishlist>
            },
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/buyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side.vercel.app/products/${params.id}`)
            }




        ]
    }


])

export default router;