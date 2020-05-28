import React, { useState, useEffect, Fragment } from 'react';
import AppHeader from './components/appHeader/AppHeader.jsx'
import FilterCardContainer from './components/filterCard/FilterCardContainer.jsx';
import ItemsContainer from './components/item/ItemsContainer';
import Spinner from './components/spinner/Spinner'
import filterIcon from './assets/filter.svg'

import './App.css';
const App = () => {
  const [filters, setFilters] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const corsProxy = 'https://cors-anywhere.herokuapp.com'
        const filterRes = await fetch(`${corsProxy}/https://ven10.co/assessment/filter.json`);
        const resFilters = await filterRes.json()
        setFilters(resFilters);
      } catch (err) {
        //alert("Error getting app filters");
        console.error("error fetching filter", err)
      }
    }
    )()
  }, [])

  return (
    <div className="app">
      <AppHeader />
      {!filters ? <Spinner /> : (
        <Fragment>
          <div className="filter-ind">
            <img src={filterIcon} alt="filter icon" />
            <h3>Filters({filters.length})</h3>
          </div>
          <FilterCardContainer updateCars={setSelectedFilter} filters={filters} />
          <ItemsContainer selectedFilter={selectedFilter} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
