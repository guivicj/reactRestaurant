import {useContext, useState} from "react";
import {CartContext} from "../contexts/CartContext";
import "../App.css";

function Cart() {
    const {cart, addToCart, removeFromCart, clearCart} = useContext(CartContext);
    const [message, setMessage] = useState("")

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleClearCart = () => {
        clearCart()
        setMessage("Cart Emptied Successfully")
        setTimeout(() => {
            setMessage("")
        }, 3000)
    }

    return (
        <div className="cart-page">
            <h2 className="main-title">YOUR CART️</h2>

            {message && <p className="cart-message">{message}</p>}

            {cart.length === 0 ? (
                <p className="empty-cart">YOUR CART IS EMPTY</p>
            ) : (
                <>
                    <div className="cart-list">
                        {cart.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-info">
                                    <h3 className="card-name">{item.name}</h3>
                                    <p className="card-description">{item.description}</p>
                                </div>
                                <div className="cart-controls">
                                    <button onClick={() => removeFromCart(item.id)} className="black-btn">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="black-btn">+</button>
                                </div>
                                <div className="cart-price">{item.price * item.quantity} €</div>
                            </div>
                        ))}
                    </div>

                    <h3 className="cart-total">Total: {totalPrice} €</h3>

                    <div className="cart-actions">
                        <button className="black-btn" onClick={handleClearCart}>EMPTY CART️</button>
                        <button className="yellow-btn">FINALIZE ORDER</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
