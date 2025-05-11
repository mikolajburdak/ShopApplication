import { ProductWithButtons } from "../components/shop/ProductWithButtons";
import "../styles/ProductList.css"

type ProductListProps = {
    cart: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }[];
    products: { id: number; name: string; price: { main: number; fractional: number } }[];
    onAddToCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onUpdateCart: (product: { id: number; name: string; price: { main: number; fractional: number }; quantity: number }) => void;
    onRemoveFromCart: (productId: number) => void;
};

export const ProductPage = ({
    cart, products, onAddToCart,onUpdateCart,onRemoveFromCart
}: ProductListProps) => {
    return (
        <div>
            <div className="ProductList">
                {products.map((product) => {
                    const cartItem = cart.find((item) => item.id === product.id);
                    const quantity = cartItem ? cartItem.quantity : 0;
                    return (
                    <ProductWithButtons
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        quantity={quantity}
                        onAddToCart={onAddToCart}
                        onUpdateCart={onUpdateCart}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                    )
                })}
            </div>
        </div>
    );
};