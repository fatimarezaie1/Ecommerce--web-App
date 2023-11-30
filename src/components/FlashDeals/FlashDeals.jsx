import FlashCard from "./FlashCard";
import { FaBolt } from "react-icons/fa";

export default function FlashDeal(){
    return(
        <>
           <section className="flash background">
                <div className="container">
                    <div className="heading f_flex">
                        <i className="fa-bolt"><FaBolt/></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard />
                </div>
           </section>
        </>
    )
}