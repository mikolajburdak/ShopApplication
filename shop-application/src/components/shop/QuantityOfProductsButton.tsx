import "../../styles/QuantityOfProductsButton.css";

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
        <div className={"QuantityOfProductsButtons"}>
            <button className={"DecreaseButton"} onClick={decrease}>⬇️</button>
            <div className={"Quantity"}>{value}</div>
            <button className={"IncreaseButton"} onClick={increase}>⬆️</button>
        </div>
    )
}