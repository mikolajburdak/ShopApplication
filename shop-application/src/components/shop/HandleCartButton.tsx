type HandleCartButtonProps = {
    value: number;
    quantity: number;
    onAddToCart: () => void;
    onUpdateCart: () => void;
    onRemoveFromCart: () => void;
};

export const HandleCartButton = ({
         value,
         quantity,
         onAddToCart,
         onUpdateCart,
         onRemoveFromCart,
     }: HandleCartButtonProps) => {
    const handleAction = () => {
        if (value < quantity) {
            onUpdateCart();
        } else if (value === quantity) {
            onRemoveFromCart();
        } else if (value > quantity) {
            onAddToCart();
        }
    };

    return (
        <button className="HandleCartButton" onClick={handleAction}>
            {value < quantity
                ? 'Zaktualizuj koszyk'
                : value === quantity
                    ? 'Usuń z koszyka'
                    : 'Dodaj do koszyka'}
        </button>
    );
};