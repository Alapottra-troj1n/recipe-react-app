import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <h2 className="app-title">Recipe React App</h2>
            <div className="meal-input-container">
            <input type="text" className="meal-input" />
            </div>
        </div>
    );
};

export default Home;