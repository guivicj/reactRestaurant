import './App.css';
import logo from './assets/logo.png'
import tunasushi from './assets/tuna-sushi.png'
import salmonsushi from './assets/salmon-sushi.png'
import justsushi from './assets/just-sushi.png'
import restaurant from './assets/restaurant.png'
import separator from './assets/separator.png'
import about1 from './assets/about-us1.png'
import about2 from './assets/about-us2.png'
import about3 from './assets/about-us3.png'
import Reservation from "./pages/Reservation";
import BlackButton from "./components/BlackButton";
import YellowButton from "./components/YellowButton";
import Spacer from "./components/Spacer"
import FoodCard from "./components/FoodCard";
import RestaurantMenu from "./components/RestaurantMenu";
import Title from "./components/Title";
import EventsMenu from "./components/EventsMenu";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {useContext, useEffect} from "react";
import ScrollLink from "./components/ScrollLink";
import {CartContext} from "./contexts/CartContext";
import Cart from "./pages/Cart";

function App() {
    const {cart} = useContext(CartContext)
    const navigate = useNavigate()
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);


    return (
        <div className="container">
            <Background/>
            <Header/>
            <div className="floating-cart" onClick={() => navigate("/cart")}>
                🛒 {totalItems}
            </div>
            <Spacer size={128}/>
            <Routes>
                <Route path="/" element={<MainContent/>}/>
                <Route path="/reserve" element={<Reservation/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </div>
    );
}

function Background() {
    return (
        <div className="background-container">
            <div className="background"></div>
            <div className="overlay"></div>
            <div className="footer-background"></div>
        </div>
    )
}

function NavMenu() {
    return (
        <header className="top-nav-menu">
            <ScrollLink className="links" targetId="menu" confirmOnExit>MENU</ScrollLink>
            <ScrollLink className="links" targetId="fine-dining" confirmOnExit>FINE DINING</ScrollLink>
            <ScrollLink className="links" targetId="about-us" confirmOnExit>ABOUT</ScrollLink>
            <ScrollLink className="links" targetId="footer-content" confirmOnExit>CONTACT</ScrollLink>
        </header>
    );
}

function Header() {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"/>
            <NavMenu/>
            <BlackButton value="RESERVATION  ———" destination="/reserve"/>
        </header>
    )
}

function MainContent() {
    useEffect(() => {
        const targetId = sessionStorage.getItem('scrollTarget');
        if (targetId) {
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({behavior: 'smooth'});
            }
            sessionStorage.removeItem('scrollTarget');
        }
    }, []);
    return (
        <div className="main-content">
            <Title
                subtitle="Best Sushi in Town"
                title="TASTE THE RICH FLAVOR OF\nHIGH QUALITY SUSHI"
                description="We only use the five star quality for\nour menu, come and get the richness in\n every food we serve."
            />
            <YellowButton value="GO TO MENU  ———"/>
            <Spacer size={128}/>
            <Specials/>
            <Spacer size={128}/>
            <img src={restaurant} alt="restaurant"/>
            <Spacer size={128}/>
            <Specialities/>
            <Spacer size={128}/>
            <DiningEvents/>
            <Spacer size={128}/>
            <img src={separator} alt="restaurant"/>
            <Spacer size={128}/>
            <AboutUs/>
            <Spacer size={128}/>
            <Footer/>
        </div>
    )
}

function Specials() {
    return (
        <div>
            <SpecialsTitle/>
            <div className="specials-cards">
                <FoodCard item={tunasushi} name="TUNA SUSHI"
                          description={`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nEtiam ut imperdiet lectus.`}
                />
                <FoodCard item={salmonsushi} name="SALMON SUSHI"
                          description={`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nEtiam ut imperdiet lectus.`}
                />
                <FoodCard item={justsushi} name="JUST SUSHI"
                          description={`Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nEtiam ut imperdiet lectus.`}
                />
            </div>
        </div>
    )
}

function SpecialsTitle() {
    return (
        <Title subtitle="Special Menu" title="Today's Special" description="This is our special food for today"/>
    )
}

function Specialities() {
    return (
        <div className="specialities" id="menu">
            <SpecialitiesTitle/>
            <RestaurantMenu/>
        </div>
    )
}

function SpecialitiesTitle() {
    return (
        <Title subtitle="Quality food for you" title="Our Specialitites"
               description="Authentic food from our restaurant"/>
    )
}


function DiningEvents() {
    return (
        <div className="events" id="fine-dining">
            <DiningTitle/>
            <EventsMenu/>
        </div>
    );
}

function DiningTitle() {
    return (
        <Title subtitle="Choose your event" title="Dining Events"
               description="We provide dining event for your special day\nwith your important people"/>
    )
}

function AboutUs() {
    return (
        <div className="about-us" id="about-us">
            <AboutUsTitle/>
            <AboutUsContent/>
        </div>
    )
}

function AboutUsTitle() {
    return (
        <Title subtitle="About Us" title="Our Story"
               description="A journey for making successful luxury restaurant\nwith the best services"/>
    )
}

function AboutUsContent() {
    return (
        <div className="about-us-container">
            <div className="about-us-images">
                <img src={about1} alt="employee cooking"/>
                <div>
                    <img src={about2} alt="employee cooking"/>
                    <img src={about3} alt="employee cooking"/>
                </div>
            </div>
            <div className="about-us-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna id leo euismod rhoncus.
                    Aliquam erat volutpat. Nulla id aliquam neque, at dignissim quam. Praesent et lacus accumsan,
                    consequat nisl a, mattis sapien.
                </p>
                <p>Nam sodales ullamcorper aliquet. Phasellus ut pretium libero, vitae imperdiet purus. Sed sed
                    tincidunt velit. Aliquam vitae ipsum molestie, vehicula nisi quis, finibus leo.</p>
                <BlackButton value="MORE ABOUT US ———"/>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <div className="footer" id="footer-content">
            <h1 className="main-title">
                WE READY TO HAVE YOU<br/>
                THE BEST DINING EXPERIENCES</h1>
            <FooterContent/>
        </div>
    )
}

function FooterContent() {
    return (
        <div className="footer-content">
            <div className="contact-info">
                <p>Jendral Sudirman Street Pahoman<br/>
                    Bandar Lampung, Lampung, 35222</p>
                <p>Call us:<br/>
                    +0721 471 285</p>
            </div>
            <Spacer size={64}/>
            <Spacer size={256}/>
            <div className="socials-container">
                <img className="logo" src={logo} alt="logo"/>
                <div className="socials">
                    <a href="https://www.instagram.com/">INSTAGRAM</a>
                    <a href="https://twitter.com/">TWITTER</a>
                    <a href="https://www.facebook.com">FACEBOOK</a>
                </div>
            </div>
        </div>
    )
}

export default App;