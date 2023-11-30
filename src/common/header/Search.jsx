import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

import  {Link} from 'react-router-dom'
export default function Search(){
    window.addEventListener('scroll',function(){
        const search = document.querySelector(".search")
        search.classList.toggle('active',window.scrollY)
    }
    )
    return(
        <>
            <section className="search">
                <div className="container">
                    <div className="container c_flex">
                        <div className="logo width">
                            <img src={'vite.svg'} alt="logo" />
                        </div>

                        <div className="search-box f_flex">
                            <i><IoIosSearch/></i>
                            <input type="text" placeholder="Search and hit enter ..." />
                            <span>All Category</span>
                        </div>
                        <div className="icon f_flex width">
                            <i className="icon-circle"><FaUser/></i>
                            <div className="cart">
                                <Link to='/cart'>
                                    <i className="icon-circle"><FaShoppingBag/></i>
                                    <span>0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}