import React from 'react'
import './Navbar.css'
import logo from '../../Images/logo6.png'
import github from '../../Images/github2.svg'
import linkdin from '../../Images/linked2.svg'
import instagram from '../../Images/instagram.svg'
import Anand from '../../Images/Anand_Gautam.jpg'



const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="devloper-icon"><a href="https://anand-gautam.netlify.app/"><img src={Anand} alt="" /></a></div>
                <div className="social-media">
                    <a href="https://github.com/Anand0605"><div className="github"><img src={github} alt="" /></div></a>
                    <a href="https://www.linkedin.com/in/anand-kumar-gautam-733586207/"><div className="linkdin"><img src={linkdin} alt="" /></div></a>
                    <div className="instagram"><img src={instagram} alt="" /></div>
                </div>
            </div>

        </>
    )
}
export default Navbar;
