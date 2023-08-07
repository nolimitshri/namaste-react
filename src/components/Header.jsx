import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const [btnClass, setBtnClass] = useState("bg-green-300 hover:bg-green-400")
    const onlineStatus = useOnlineStatus();

    // Subscribing to the store
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between shadow-md" style={{backgroundColor: 'rgb(255,241,176,1)'}}>
            <div className="logo">
                <img className='w-28 ml-4' src={LOGO_URL}  alt="Company Logo here" />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-3 mt-1.5'>
                        Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className='px-3 mt-1.5'>
                        <Link to="/" className='hover:underline'>Home</Link>
                    </li>
                    <li className='px-3 mt-1.5'>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='px-3 mt-1.5'>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/* Show the np. of items */}
                    <li className='px-3 mt-1 font-bold text-xl'>
                        <Link to="/cart">Cart - ({cartItems.length} items)</Link>
                    </li>
                    <li className='px-3 mt-1.5'>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className={`font-semibold rounded-lg px-2 py-[7px] ${btnClass}`} onClick={() => {
                            if(btnName === "Login"){
                                setBtnName("Logout");
                                setBtnClass("bg-red-300 hover:bg-red-400");
                            } else {
                                setBtnName("Login")
                                setBtnClass("bg-green-300");
                            }
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;