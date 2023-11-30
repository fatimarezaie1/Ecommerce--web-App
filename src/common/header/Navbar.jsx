import React from "react";
import { Link } from "react-router-dom";
import { FaBorderAll } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
export default function Navbar(){
    const [MobileMenu, setMobileMenu] = React.useState(false)
    return(
        <>
           <header className="header">
            <div className="container d_flex">
                <div className="catgories d_flex">
                    <span className="fa-solid fa-border-all"><FaBorderAll/></span>
                    <h4>Catagories <i > <FaChevronDown/> </i> </h4>

                </div>
                <div className="navlink">
                    <ul className={MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'} onClick={() => setMobileMenu(false)}>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to='/pages'>pages</Link></li>
                        <li><Link to='/user'>user account</Link></li>
                        <li><Link to='/vendor'>vendor</Link></li>
                        <li><Link to='/track'>track my order</Link></li>
                        <li><Link to='/contact'>contact</Link></li>
                    </ul>
                    <button className="toggle" onClick={()=> setMobileMenu(!MobileMenu  )}>
                    {
                        MobileMenu ? <IoMdClose className="close home-btn"/> : <FaBars className="open"/>
                    }
                    </button>
                </div>
            </div>
           </header>
        </>
    )
}