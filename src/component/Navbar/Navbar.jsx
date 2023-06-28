import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo1.png'
import github from '../../Images/github2.svg'
import linkdin from '../../Images/linked2.svg'
import instagram from '../../Images/instagram.svg'


const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="social-media">
                    <div className="github"><img src={github} alt="" /></div>
                    <div className="linkdin"><img src={linkdin} alt="" /></div>
                    <div className="instagram"><img src={instagram} alt="" /></div>
                </div>
            </div>

        </>
    )
}
export default Navbar;
