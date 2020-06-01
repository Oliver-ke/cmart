import React, { useState, useEffect, Fragment } from 'react';
import FilterCard from '../../components/filterCard/FilterCard';
import Spinner from '../../components/spinner/Spinner';

import './filterPage.styles.css';

const FilterPage = () => {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const corsProxy = 'https://cors-anywhere.herokuapp.com'
        const filterRes = await fetch(`${corsProxy}/https://ven10.co/assessment/filter.json`);
        const resFilters = await filterRes.json()
        setFilters(resFilters);
      } catch (err) {
        console.error("error fetching filter", err)
      }
    }
    )()
  }, [])
  return (
    <div>
      {
        filters.length > 0 ? (
          <Fragment>
            <div className="filter-ind">
              <i className="fa fa-filter"></i>
              <h3>Filters ({filters.length})</h3>
            </div>
            <div className="filters-container">
              {
                filters.map((filter) => (
                  <FilterCard filter={filter} key={filter.id} />
                ))
              }
            </div>
          </Fragment>
        ) : <Spinner />
      }
    </div>
  )
}

export default FilterPage;