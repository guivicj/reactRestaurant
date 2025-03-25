import {useContext, useState} from "react";
import menuData from "../data/menuData";
import {CartContext} from "../contexts/CartContext";

export default function RestaurantMenu() {
    const [selectedCategory, setSelectedCategory] = useState("specialities");
    const {addToCart} = useContext(CartContext);


    return (
        <div className="menu-container">
            <div className="menu-buttons">
                {Object.keys(menuData).map((category) => (
                    <button
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.replace(/^\w/, (c) => c.toUpperCase())}
                    </button>
                ))}
            </div>

            <div className="menu-content">
                {menuData[selectedCategory].map((item, index) => (
                    <div key={index} className={`menu-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <img src={item.image} alt={item.name}/>
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p className="menu-price">{item.price}$</p>
                            <button onClick={() => addToCart(item)} className={"yellow-btn"}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
