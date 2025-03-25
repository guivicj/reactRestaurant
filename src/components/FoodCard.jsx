import BlackButton from "./BlackButton";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext";

export default function FoodCard({item, name, description}) {
    const {addToCart} = useContext(CartContext);
    return (
        <div>
            <img src={item} alt={name}/>
            <div className="food-card">
                <h1 className="card-name">{name}</h1>
                <h2 className="card-description">{description}</h2>
                <p className="stars">★★★★★</p>
                <button onClick={addToCart} className="black-btn">ORDER NOW  ———</button>
            </div>
        </div>
    )
}