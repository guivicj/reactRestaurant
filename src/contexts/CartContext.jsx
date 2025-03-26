import {createContext, useState} from "react";

export const CartContext = createContext()

export function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = (dish) => {
        setCart(prevCart => {
            const exists = prevCart.find(item => item.id === dish.id)
            if (exists) {
                return prevCart.map(item =>
                    item.id === dish.id ? {...item, quantity: item.quantity + 1} : item)
            } else {
                return [...prevCart, {...dish, quantity: 1}]
            }
        })
    }
    const removeFromCart = (dishId) => {
        setCart(prevCart => {
            const item = prevCart.find(d => d.id === dishId)
            if (item.quantity > 1) {
                return prevCart.map(d =>
                    d.id === dishId ? {...d, quantity: d.quantity - 1} : d
                )
            } else {
                return prevCart.filter(d => d.id !== dishId)
            }
        })
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}