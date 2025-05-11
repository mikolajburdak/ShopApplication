import {CartItem} from "../components/shop/CartItem.tsx";
import "../styles/Checkout.css"
import {Link} from "react-router-dom";
import "../styles/CartPage.css"


type CheckoutProps = {
    cart: { id: number; name: string; price: { main: number; fractional: number }, quantity: number }[];
}

export const Checkout = ({cart}: CheckoutProps) => {

    const totalInCents = cart.reduce((total, item) => {
        const itemTotal = (item.price.main * 100 + item.price.fractional) * item.quantity;
        return total + itemTotal;
    }, 0);

    const totalZl = Math.floor(totalInCents / 100);
    const totalGr = totalInCents % 100;

    return (
        <div className={"CartContainer"}>
            <div>
                {cart.map(product => (
                    <CartItem
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={product.quantity}
                        partialPrice={(product.price.main * 100 + product.price.fractional) / 100 * product.quantity}
                    />
                ))}
            </div>
            <div className="TotalAmountAndCheckout">
                <div className={"left-content"}>
                    <p className={"TotalAmount"}>Łączna cena: {totalZl} zł {totalGr.toString().padStart(2, "0")} gr</p>

                </div>
                <div className="right-content">
                    <Link to="/cart">Cofnij</Link>
                </div>
                <button
                    className="right-content"
                    onClick={() => {
                        localStorage.setItem("cart", JSON.stringify(cart));
                        window.location.href = "ShopApplication/confirmation.html";
                    }}
                >
                    Złóż zamówienie
                </button>
            </div>
        </div>
    )
}