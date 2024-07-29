import React from "react";
import ReactDOM from 'react-dom/client';
import pizzaData from "./data";
import './index.css'


function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header footer">
            <h1>React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const pizzaNumber = pizzas.length;
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {pizzaNumber > 0 ?
                (
                    <>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                        </p>
                        <ul class="pizzas">
                            {
                                pizzas.map(pizza => (
                                    <Pizza key={pizza.name} pizzaObj={pizza} />
                                ))
                            }
                        </ul>
                    </>) : <p>W'ere still working on our menu. Please come back later.</p>}
        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className="footer">
        {isOpen ?
            <Order closeHour={closeHour} />
            : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
    </footer>
}

function Order({ closeHour }) {
    return (<div className="order">
        <p>We're open until {closeHour}:00. Come visit us or order online. </p>
        <button className="btn">Order</button>
    </div>)
}

function Pizza({ pizzaObj }) {

    return (
        <>
            <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
                <img src={pizzaObj.photoName} alt={pizzaObj.name} className="pizza-img" />
                <div>
                    <h3 className="pizza-name">{pizzaObj.name}</h3>
                    <p className="pizza-ingredients">{pizzaObj.ingredients}</p>
                    <span className="pizza-price">{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
                </div>
            </li >
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);