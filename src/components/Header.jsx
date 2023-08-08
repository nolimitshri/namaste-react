/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import "../css/header.css";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const [btnClass, setBtnClass] = useState("bg-green-300 hover:bg-green-400")
    const onlineStatus = useOnlineStatus();

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items)
    // style={{backgroundColor: "rgba(252, 202, 17, 1)"}}

    return (
        <div className="fixed shadow-lg h-[10vh] w-[100%] z-[100] flex bg-slate-200 items-center">
            {/* Title and Search Bar */}
            <div className='w-5/12 flex items-center justify-between p-4'>
                <h1 className='text-2xl font-bold'><span className='text-gray-500'>Grub</span><span className='text-yellow-500'>Express</span></h1>
                <div>
                    <input style={{outline: "none"}} type="text" className='mr-2 p-1 rounded-md' placeholder='Search by City'/>
                    <button className='border border-yellow-500 bg-yellow-500 text-white font-semibold p-1 rounded-md'>Search</button>
                </div>
            </div>
            {/* Showing the Menu Items */}
            <div className='w-7/12 flex'>
                <div className='w-6/12'></div>
                <ul className='flex justify-evenly'>
                    <li className='mx-4'>
                        <Link to="/" className='text-xl tracking-wide hover-effect'>HOME</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/about" className='text-xl tracking-wide hover-effect'>ABOUT</Link>
                    </li>
                    <li className='mx-4'>
                        <Link to="/contact" className='text-xl tracking-wide hover-effect'>CONTACT</Link>
                    </li>
                    <li className='mx-4 '>
                        <Link to="/cart" className='text-xl tracking-wide hover-effect'>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            {cartItems.length > 0 && <span className="ml-1 text-lg">{cartItems.length}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;