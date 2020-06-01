import React from 'react';
import AppHeader from './components/appHeader/AppHeader.jsx'
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import FilterPage from './pages/Filter/FilterPage.jsx';
import CarPage from './pages/CarOwer/CarOwnerPage.jsx';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <Router>
        <Route exact component={FilterPage} path="/" />
        <Route exact component={CarPage} path="/filter/:filterId" />
      </Router>
    </div>
  );
}

export default App;
