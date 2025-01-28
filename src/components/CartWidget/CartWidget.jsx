
import { GrCart } from "react-icons/gr";

function CartWidget() {
    const contador = 20;

    return (
        <button className="cart-widget">
            <GrCart className="cart-icon"/>
            <div className="cantidad-cart">{contador}</div>
        </button>
    )
}

export default CartWidget;