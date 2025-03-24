import { useState } from "react";
import dragonsushi from '../assets/dragon-sushi.png';
import creamysushi from '../assets/creamy-sushi.png';
import rowsalmonsushi from '../assets/roll-salmon-sushi.png';

const menuData = {
    specialities: [
        {
            name: "Dragon Sushi",
            image: dragonsushi,
            price: "$50",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            name: "Creamy Sushi",
            image: creamysushi,
            price: "$50",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            name: "Roll Salmon Sushi",
            image: rowsalmonsushi,
            price: "$50",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    homestyle: [
        {
            name: "Home Sushi",
            image: "home-sushi.png",
            price: "$40",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            name: "Rice Sushi",
            image: "rice-sushi.png",
            price: "$45",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    steak: [
        {
            name: "Steak Sushi",
            image: "steak-sushi.png",
            price: "$55",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    rice: [
        {
            name: "Rice Sushi",
            image: "rice-sushi.png",
            price: "$55",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            name: "Steak & Rice Sushi",
            image: "steak-rice-sushi",
            price: "$55",
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ]
};

export default function RestaurantMenu() {
    const [selectedCategory, setSelectedCategory] = useState("specialities");

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
                        <img src={item.image} alt={item.name} />
                        <div className="menu-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="menu-price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
