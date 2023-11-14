import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utils/formatCurrency"
import { useShoppingCart } from "../contexts/ShoppingCartContext"

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(id)

    return <>
        <Card className="h-100">
            <Card.Img src={imgUrl}
                height="200px" />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex flex-row justify-content-between align-items-start mb-2">
                    <span className="fs-5">{name}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                    {quantity === 0 ? (
                        <Button onClick={() => increaseCartQuantity(id)}> Add To Cart</Button>

                    ) : (
                        <div className="d-flex flex-column align-items-center" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                <Button onClick={() => increaseCartQuantity(id)}> + </Button>
                                <span className="fs-3">{quantity}</span> in cart
                                <Button onClick={() => decreaseCartQuantity(id)}> - </Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Remove Item</Button>
                        </div>
                    )}
                </div>
            </Card.Body>
        </Card>
    </>
}