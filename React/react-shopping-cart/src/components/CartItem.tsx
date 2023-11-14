import { Stack } from "react-bootstrap"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number
}

export const CartItem = ({ id, quantity }: CartItemProps) => {

    const storeItem = storeItems.find(storeItem => storeItem.id == id)

    return <>
        <Stack direction="horizontal" gap={2} className="f-flex align-items-center">
            <img src={storeItem?.imgUrl} style={{ width: "125px", height: "75px" }} />
            <div>
                {storeItem?.name}{" "}{quantity}
            </div>
            <div className="text-muted">
                {formatCurrency(storeItem?.price || 0)}
            </div>
            <div className="text-muted">
                {formatCurrency(quantity * (storeItem?.price || 0))}
            </div>
        </Stack>
    </>
}
