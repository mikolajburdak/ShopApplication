import "../../styles/Product.css";

type ProductProps = {
    id: number;
    name: string;
    price: {
        main: number;
        fractional: number;
    }
}

export const Product = ({name, price}: ProductProps) => {
    return(
        <div className={"product"}>
            <h3>{name}</h3>
            <p>{price.main},{price.fractional.toString().padStart(2, "0")} zł</p>
        </div>
    )
}