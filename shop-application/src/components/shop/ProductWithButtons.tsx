import { Product } from "./Product";
import { QuantityOfProductsButton } from "./QuantityOfProductsButton";
import "../../styles/ProductWithButtons.css";
import {HandleCartButton} from "./HandleCartButton.tsx";
import {useState} from "react";


type ProductWithButtonsProps = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    quantity: number;
    onAddToCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onUpdateCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onRemoveFromCart: (productId: number) => void;};

export const ProductWithButtons = ({
   id,
   name,
   price,
   quantity,
   onAddToCart,
    onUpdateCart,
    onRemoveFromCart,
}: ProductWithButtonsProps) => {
    const [value, setValue] = useState<number>(quantity > 0 ? quantity : 1);
    const handleValueChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={"ProductWithButtons"}>
            <div className="left-content">
                <Product id={id} name={name} price={price} />
            </div>
            <div className="right-content">
                <QuantityOfProductsButton value={value} onChange={handleValueChange} />
                <HandleCartButton
                    value={value}
                    quantity={quantity}
                    onAddToCart={() => onAddToCart({ id, name, price, quantity: value })}
                    onUpdateCart={() => onUpdateCart({ id, name, price, quantity: value })}
                    onRemoveFromCart={() => onRemoveFromCart(id)}
                />
            </div>
        </div>
    );
};