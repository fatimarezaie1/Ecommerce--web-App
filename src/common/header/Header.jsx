import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";
import './Header.css';

export default function Header(){
    return (
        <div>
            <Head/>
            <Search />
            <Navbar />

        </div>
    )
}