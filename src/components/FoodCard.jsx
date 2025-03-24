import BlackButton from "./BlackButton";

export default function FoodCard({item, name, description}) {
    return (
        <div>
            <img src={item} alt={name}/>
            <div className="food-card">
                <h1 className="card-name">{name}</h1>
                <h2 className="card-description">{description}</h2>
                <p className="stars">★★★★★</p>
                <BlackButton value="ORDER NOW  ———"/>
            </div>
        </div>
    )
}