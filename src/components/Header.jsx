import '../css/header.css'
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}  alt="Company Logo here" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className='loginBtn' onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;