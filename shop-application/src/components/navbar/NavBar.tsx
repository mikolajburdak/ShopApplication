import { FaShoppingCart } from "react-icons/fa";
import "../../styles/NavBar.css";
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link className="NavBar-left" to="/">Mikołaj Burdak Shop</Link>
            <Link className="NavBar-right" to="/cart"><FaShoppingCart size={40} /></Link>
        </nav>
    );
};