import { FaShoppingCart } from "react-icons/fa";
import "../../styles/NavBar.css";
import {Link} from "react-router-dom";

type NavBarProps = {
    totalItems: number;
    totalZl: number;
    totalGr: number;
};

export const NavBar = ({totalItems, totalZl, totalGr} : NavBarProps) => {
    return (
        <nav className="NavBar">
            <Link className="NavBar-left" to="/">Mikołaj Burdak Shop</Link>
            <Link className="NavBar-right" to="/cart"><FaShoppingCart size={40} />
                <div  className="cart-info" style={{ visibility: totalItems > 0 ? 'visible' : 'hidden' }}>
                    <span className={"Amount"}>
                        {totalItems} szt.
                    </span>
                    <span className={"Price"}>
                        {totalZl} zł {totalGr.toString().padStart(2, '0')} gr
                    </span>
                </div>
            </Link>
        </nav>
    );
};