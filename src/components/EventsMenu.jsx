import {useState} from "react";
import finedining from '../assets/fine-dining.png'
import golddining from '../assets/gold-dining.png'
import royaltydining from '../assets/royalty-dining.png'

const eventsData = {
    privateEvents: [
        {
            name: "Fine Dining",
            image: finedining,
            price: "$500",
            description: [
                "Bottle of Champagne",
                "Fine Sushi Tower For 2+",
                "Dessert"
            ]
        },
        {
            name: "Gold Dining",
            image: golddining,
            price: "$1000",
            description: [
                "Bottle of Champagne",
                "Secret Menu Sushi For 2+",
                "Dessert"
            ]
        },
        {
            name: "Royalty Dining",
            image: royaltydining,
            price: "$1500",
            description: [
                "Bottle of Luxury Champagne",
                "Special Menu Sushi For 2+",
                "Royal Dessert"
            ]
        }
    ],
    corporateEvents: [
        {
            name: "Business Dining",
            image: "business-dining.png",
            price: "$1200",
            description: [
                "Exclusive Corporate Menu",
                "Premium Wine Selection",
                "Private Lounge Experience"
            ]
        },
        {
            name: "Executive Dining",
            image: "executive-dining.png",
            price: "$1800",
            description: [
                "Luxury Dining Experience",
                "Customized Gourmet Menu",
                "VIP Service"
            ]
        }
    ]
};

export default function EventsMenu() {
    const [selectedCategory, setSelectedCategory] = useState("privateEvents")

    return (
        <div className="events-container">
            <div className="events-buttons">
                {Object.keys(eventsData).map((category) => (
                    <button key={category}
                            className={selectedCategory === category ? "active" : ""}
                            onClick={() => setSelectedCategory(category)}
                    >
                        {category.replace(/^\w/, (c) => c.toUpperCase()).replace(/([A-Z])/g, ' $1').trim()}
                    </button>
                ))}
            </div>
            <div className="event-content">
                {eventsData[selectedCategory].map((item, index) => (
                    <div key={index} className={`event-item ${index % 2 === 0 ? "left" : "right"}`}>
                        <img src={item.image} alt={item.name}/>
                        <div className="event-info">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <span className="event-price">{item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
