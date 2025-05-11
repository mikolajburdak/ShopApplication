import "../../styles/CartItem.css"

export type CartItemProps = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    };
    quantity: number;
    partialPrice: number;
};

export const CartItem = ({
    name,
    price,
    partialPrice
}: CartItemProps) => {
    return (
        <div className={"CartItem"}>
            <div className="left-content">
                <h3>{name}</h3>
                <p>{price.main},{price.fractional.toString().padStart(2, "0")} zł</p>

            </div>
            <div className="right-content">
                <p>Cena częściowa: {partialPrice.toFixed(2)} zł</p>
            </div>
        </div>
    );
};