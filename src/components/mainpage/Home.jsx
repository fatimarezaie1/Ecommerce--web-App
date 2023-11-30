import Catagories from "./Catagories";
import SlideCard from "./SlideCard";
import Slider from "./Slider";
import './Home.css'

export default function Home(){
    return (
       <>
            <section className="home">
                <div className="container d_flex">
                    <Catagories />
                    <Slider />
                </div>
            </section>
       </>
    )
}