import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Head(){
    return(
        <>
           <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className="fa fa-phone"><FaPhoneAlt/></i>
                        <label>+93 786 722 410</label>
                        <i className="fa fa-envelope"><FaEnvelope/></i>
                        <label>fatimarezaie705@gmail.com</label>
                    </div>
                    <div className="right row RText">
                        <label htmlFor="">Theme FAQ's</label>
                        <label htmlFor="">Need Helps</label>
                        <span></span>
                        <label htmlFor="">EN</label>
                        <span></span>
                        <label htmlFor="">USD</label>
                        <span></span>
                    </div>
                </div>
           </section>
        </>
    )
}