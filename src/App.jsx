// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './HomePage';
import Login from './Login'; // Import other components if needed
// import "./index.css"

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
