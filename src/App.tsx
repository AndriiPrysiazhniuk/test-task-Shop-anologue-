// src/App.tsx
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ProductsList from './components/ProductsList';
import ProductView from './components/ProductView';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Route path="/" render={() => <ProductsList/>}/>
                <Route path="/products/:id" render={() => <ProductView/>}/>
            </div>
        </Router>
    );
};

export default App;
