import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"
import { StoreItem } from "./StoreItem";
import { formatCurrency } from "../utils/formatCurrency";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {

    const { cartItems, closeCart } = useShoppingCart();

    return <>
        <Offcanvas onHide={closeCart} show={isOpen}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack direction="vertical" gap={3}>
                    {cartItems.map(item => (
                        <div className="p-2">
                            <CartItem key={item.id} {...item} />
                        </div>
                    ))}
                </Stack>
                <div className="fw-bold fs-5">
                    Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                        const storeItem = storeItems.find(storeItem => storeItem.id == cartItem.id)
                        return total + (storeItem?.price || 0) * cartItem.quantity
                    }, 0))}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
}