import dragonsushi from '../assets/dragon-sushi.png';
import creamysushi from '../assets/creamy-sushi.png';
import rowsalmonsushi from '../assets/roll-salmon-sushi.png';

const menuData = {
    specialities: [
        {
            id: "special-1",
            name: "Dragon Sushi",
            image: dragonsushi,
            price: 50,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            id: "special-2",
            name: "Creamy Sushi",
            image: creamysushi,
            price: 50,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            id: "special-3",
            name: "Roll Salmon Sushi",
            image: rowsalmonsushi,
            price: 50,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    homestyle: [
        {
            id: "home-1",
            name: "Home Sushi",
            image: "home-sushi",
            price: 40,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            id: "home-2",
            name: "Rice Sushi",
            image: "rice-sushi",
            price: 45,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    steak: [
        {
            id: "steak-1",
            name: "Steak Sushi",
            image: "steak-sushi",
            price: 55,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ],
    rice: [
        {
            id: "rice-1",
            name: "Rice Sushi",
            image: "rice-sushi",
            price: 55,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        },
        {
            id: "rice-2",
            name: "Steak & Rice Sushi",
            image: "steak-rice-sushi",
            price: 55,
            description: "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna."
        }
    ]
};

export default menuData;
