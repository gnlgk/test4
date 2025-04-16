import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        document.addEventListener("mouseover", setIsMenuOpen(true));

    }, [])
    return (<>
        { isMenuOpen && (<nav className='navbar'
            ref={menuRef}>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/guestbook">GuestBook</Link>
            <Link to="/scrollText">ScrollText</Link>
        </nav>)
      }
      </>
      )
}

export default Navbar