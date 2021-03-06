import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';
import { signOut } from 'firebase/auth';
import { MdOutlineShoppingCart } from 'react-icons/md';
import logo from '../Assests/icons/logo.png'
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);

    };
    return (
        <>
            <div className="navbar bg-base-100 lg:px-20 sm:px-0 fixed top-0 shadow-md z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li> <Link to="/" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white" >Home</Link></li>
                            <li><Link to="/shop" className="block py-3 pr-4 pl-3  hover:bg-red-700 hover:text-white">Shop</Link></li>
                            <li><Link to="/blogs" className="block py-3 pr-4 pl-3  hover:bg-red-700 hover:text-white">Blog</Link></li>
                            <li><Link to="/faq" className="block py-3 pr-4 pl-3  hover:bg-red-700 hover:text-white">FAQ</Link></li>
                            <li><Link to="/contact" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-red-800"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-xl font-bold uppercase text-red-800 font-mono py-2">
                        <li> <Link to="/" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white" >Home</Link></li>
                        <li><Link to="/shop" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white">Shop</Link></li>
                        <li><Link to="/blogs" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white">Blog</Link></li>
                        <li><Link to="/faq" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white">FAQ</Link></li>
                        <li><Link to="/contact" className="block py-3 pr-4 pl-3 hover:bg-red-700 hover:text-white">Contact</Link></li>
                        <li> <Link to="/orderProcessing" className="block py-3 pl-4 text-3xl absoulate hover:bg-red-700 hover:text-white"><MdOutlineShoppingCart /></Link></li>
                        {/* <span className='relative -ml-10 bg-red-700 text-white text-sm font-xs px-2 rounded-full mb-8'>1</span> */}
                        <div className="flex-none z-99">
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                    </div>
                                </label>
                                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-8 p-2 shadow bg-gray-100 rounded-box w-52">
                                    <li> {
                                        user?.uid ?
                                            <Link to="/signIn" onClick={logout} className="block py-3 pr-4 pl-3 ">Sign Out</Link>
                                            :
                                            <Link to="/signIn" className="block py-3 pl-3 text-center">Sign In</Link>
                                    }</li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <div className='flex items-center justify-between w-full'>
                        {/* <label tabIndex="0" className="btn btn-ghost btn-circle -mt-5"> */}
                        <div className='flex items-center  lg:hidden'>
                            <Link to="/orderProcessing" className="pr-6 pl-20 md:pl-[450px] text-3xl absoulate text-red-700"><MdOutlineShoppingCart /></Link>
                            {/* <span className='relative bg-red-700 text-white text-sm font-xs px-2 py-0.5 rounded-full -mt-20 ml-2'>1</span>
                            </label> */}
                            <div className="flex-none">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                                        </div>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 p-2 shadow bg-gray-50 rounded-box w-52">
                                        <li> {
                                            user?.uid ?
                                                <Link to="/signIn" onClick={logout} className="block py-3 pr-4 pl-3 ">Sign Out</Link>
                                                :
                                                <Link to="/signIn" className="block py-3 pl-3 text-center">Sign In</Link>
                                        }</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;