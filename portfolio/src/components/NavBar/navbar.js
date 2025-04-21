import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu-svgrepo-com.svg';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToContact = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />

            {/* Desktop Menu */}
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>

            {/* Resume Button */}
            <button 
    className="desktopMenuBtn"
    onClick={() =>
        window.open(
            "https://drive.google.com/file/d/1k9nnMbEITRUGn8xNQxyFbaYHfZ2IlUw_/view?usp=drive_link",
            "_blank",
            "noopener,noreferrer"
        )
    }
>
    <img src={contactImg} alt="Resume Icon" className="desktopMenuImg" />
    Resume
</button>

            <img src={menu} alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Project</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
                <a
                    href="https://drive.google.com/file/d/1k9nnMbEITRUGn8xNQxyFbaYHfZ2IlUw_/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
