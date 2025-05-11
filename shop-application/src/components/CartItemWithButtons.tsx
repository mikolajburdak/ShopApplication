import { QuantityOfProductsButton } from "./shop/QuantityOfProductsButton";
import { HandleCartButton } from "./shop/HandleCartButton.tsx";
import {useEffect, useState} from "react";
import {CartItem} from "./CartItem.tsx";
import "../styles/CartItemWithButtons.css"

type CartItemWithButtonProps = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    quantity: number;
    onAddToCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onUpdateCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onRemoveFromCart: (productId: number) => void;
};

export const CartItemWithButtons = ({
    id,
    name,
    price,
    quantity,
    onAddToCart,
    onUpdateCart,
    onRemoveFromCart,
}: CartItemWithButtonProps) => {
    const [value, setValue] = useState<number>(quantity);
    const [partialPrice, setPartialPrice] = useState<number>(
        (price.main + price.fractional / 100) * quantity
    );

    const handleValueChange = (newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        const calculatedPrice = (price.main + price.fractional / 100) * value;
        setPartialPrice(calculatedPrice);
    }, [value, price.main, price.fractional]);

    return (
        <div className={"CartItemWithButtons"}>
            <div className={"left-content"}>
                <CartItem id={id} name={name} price={price} partialPrice={partialPrice} quantity={quantity}></CartItem>
            </div>
            <div className={"right-content"}>
                <QuantityOfProductsButton value={value} onChange={handleValueChange}></QuantityOfProductsButton>
                <HandleCartButton
                    value={value}
                    quantity={quantity}
                    onAddToCart={() => onAddToCart({ id, name, price, quantity: value })}
                    onUpdateCart={() => onUpdateCart({ id, name, price, quantity: value })}
                    onRemoveFromCart={() => onRemoveFromCart(id)}>
                </HandleCartButton>
            </div>
        </div>
    )

}