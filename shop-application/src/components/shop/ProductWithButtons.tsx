import {Product} from "../Product.tsx";
import {QuantityOfProductsButton} from "./QuantityOfProductsButton.tsx";
import {useState} from "react";

type ProductWithButtonsProps = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    onAddToCart: () => void;
};

export const ProductWithButtons = ({
    id,
    name,
    price,
    onAddToCart,
 }: ProductWithButtonsProps) => {

const [quantity, setQuantity] = useState(1);


    return (
        <div>
            <Product id={id} name={name} price={price} />
            <QuantityOfProductsButton value={quantity} onChange={setQuantity} ></QuantityOfProductsButton>
            <button onClick={onAddToCart}>Dodaj do koszyka</button>
        </div>
    )
};
