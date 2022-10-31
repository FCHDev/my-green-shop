// @ts-ignore
import {useShoppingCart} from "../context/ShoppingCartContext";
// @ts-ignore
import storeItems from "../data/dailygreen-db.json"
import {Button, Stack} from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null


    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} alt={item.name} style={{width: "125px", height: "125px", objectFit: "cover"}}/>
            <div className="me-auto">
                <div>
                    <span style={{fontSize: "1rem"}}>{item.name}</span> <br/>
                    {quantity > 1 &&
                    <span className="text-muted" style={{fontSize: "1rem", fontWeight: "bold"}}>x{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>X</Button>
        </Stack>
    );
};

export default CartItem;