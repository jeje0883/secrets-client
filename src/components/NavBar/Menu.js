// Menu.js
import { useState } from 'react';
import '../../styles/navbar/menu.css';

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Menu Icon */}
            <div className="menu-icon-container" onClick={handleClick}>
                <img className="menu-icon" src={'/images/secret-symbol.png'} alt="menu icon" />
            </div>

            {/* Slide-in Menu */}
            <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={handleCloseMenu}>×</button>
                <ul className="menu-items">
                    <li><a href="/">Home</a></li>
                    <li>Top</li>
                    <li>Trending</li>
                    <li>Fresh</li>
                </ul>
                <ul className="menu-items">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>FAQs</li>
                    <li>Blog</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Language</li>
                    <li>Currency</li>
                    <li>Help Center</li>
                    <li>Donate</li>
                    <li>Sell</li>
                    <li>Buy</li>
                    <li>Exchange</li>
                    <li>Affiliate</li>
                    <li>Community</li>
                    <li>Support</li>
                    <li>Advertise</li>
                    <li>Newsletter</li>
                    <li>Affiliate Program</li>
                    <li>Invest</li>
                </ul>
            </div>

            {/* Overlay */}
            {isMenuOpen && <div className="menu-overlay" onClick={handleCloseMenu}></div>}
        </>
    );
}
