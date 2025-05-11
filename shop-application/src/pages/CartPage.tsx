import {CartItemWithButtons} from "../components/CartItemWithButtons.tsx";
import "../styles/CartPage.css"
import {Link} from "react-router-dom";

type CartProps = {
    cart: { id: number; name: string; price: { main: number; fractional: number }, quantity: number }[];
    onAddToCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onUpdateCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onRemoveFromCart: (productId: number) => void;
};

export const CartPage =({
    cart, onAddToCart,onUpdateCart,onRemoveFromCart
}: CartProps) => {

    const totalInCents = cart.reduce((total, item) => {
        const itemTotal = (item.price.main * 100 + item.price.fractional) * item.quantity;
        return total + itemTotal;
    }, 0);

    const totalZl = Math.floor(totalInCents / 100);
    const totalGr = totalInCents % 100;

    return (
        <div className="CartContainer">
            {cart.length === 0 ? (
                <p className={"EmptyCart"}>Twój koszyk jest pusty</p>
            ) : (
                <div className="CartList">
                    {cart.map((item) => (
                        <CartItemWithButtons
                            key={item.id} {...item}
                            onAddToCart={onAddToCart}
                            onUpdateCart={onUpdateCart}
                            onRemoveFromCart={onRemoveFromCart}
                        >
                        </CartItemWithButtons>
                    ))}
                </div>
            )}
            <div className="TotalAmountAndCheckout">
                <div className={"left-content"}>
                    <p className={"TotalAmount"}>Łączna cena: {totalZl} zł {totalGr.toString().padStart(2, "0")} gr</p>

                </div>
                <div className="right-content">
                    <Link to="/">Cofnij</Link>
                </div>
                <div className={"right-content"}>
                    <Link className={"Checkout"} to={"/checkout"}>Podsumuj zamówienie</Link>
                </div>
            </div>
        </div>
    )
}

