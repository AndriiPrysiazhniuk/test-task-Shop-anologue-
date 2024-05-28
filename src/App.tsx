// src/App.tsx
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductView from './components/ProductView';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<ProductsList/>}/>
                <Route path={"/products/:id"} element={<ProductView/>}/>
            </Routes>
        </Router>
    );
};

export default App;
