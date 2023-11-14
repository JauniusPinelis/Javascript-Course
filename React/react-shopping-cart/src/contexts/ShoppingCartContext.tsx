import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

type CartItem = {
    id: number,
    quantity: number
}


type ShoppingCartContext = {
    cartItems: CartItem[],
    openCart: () => void,
    closeCart: () => void,
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    getItemQuantity: (id: number) => number
    removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

type ShoppingCartProviderProps = {
    children: ReactNode
}

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isShopCartOpen, setShopCartOpen] = useState(false)

    const openCart = () => setShopCartOpen(true);
    const closeCart = () => setShopCartOpen(false);

    const getItemQuantity = (id: number): number => {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    const removeFromCart = (id: number): void => {
        setCartItems(items => {
            return items.filter(item => item.id !== id);
        })
    }

    const increaseCartQuantity = (id: number): void => {
        setCartItems(items => {
            if (items.find(item => item.id == id) == null) {
                return [...items, { id, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQuantity = (id: number): void => {
        setCartItems(items => {
            if (items.find(item => item.id == id)?.quantity === 1) {
                return items.filter(item => item.id != id)
            } else {
                return items.map(item => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    return (
        <ShoppingCartContext.Provider value={{
            cartItems, openCart, removeFromCart,
            closeCart, increaseCartQuantity, decreaseCartQuantity, getItemQuantity
        }}>
            {children}
            <ShoppingCart isOpen={isShopCartOpen} />
        </ ShoppingCartContext.Provider>
    )
}

