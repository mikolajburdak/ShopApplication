type QuantitySelectorProps = {
    value: number;
    onChange: (newValue: number) => void;
    min?: number;
    max?: number;
};

export const QuantityOfProductsButton = ({
    value,
    onChange,
    min = 1,
    max = 99,
}: QuantitySelectorProps) => {
    const decrease = () => {
        if (value > min){
            onChange(value - 1);
        }
    };
    const increase = () => {
        if (value < max) {
            onChange(value + 1);
        }
    };
    return (
        <div>
            <button onClick={decrease}>⬇️</button>
            <div>{value}</div>
            <button onClick={increase}>⬆️</button>
        </div>
    )
}