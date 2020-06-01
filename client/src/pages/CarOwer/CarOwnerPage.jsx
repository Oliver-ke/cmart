import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/item/Item'
import Spinner from '../../components/spinner/Spinner';

import './carOwnerPage.style.css';
const CarOwnerPage = ({ history }) => {
  const [carOwners, setCarOwners] = useState(null);
  const [count, setCount] = useState(null);
  const { location: { filter } } = history;
  console.log(filter);
  const baseUri = 'https://carmart.herokuapp.com/';
  useEffect(() => {
    (async () => {
      try {
        const selectedFilter = { ...filter, start_page: 1, end_page: 600 }
        const query = selectedFilter ? (
          Object.keys(selectedFilter).map(key => key + '=' + selectedFilter[key]).join('&')
        ) : null;

        const apiUri = `${baseUri}api/v1/carowner/query?${query}`;
        const res = await fetch(apiUri);
        const { data, count } = await res.json();

        setCarOwners(data);
        setCount(count);
      } catch (error) {
        console.log('Error fetch from local api')
      }
    })()
  }, [])

  return (
    <div className="main-wrapper">
      <div className="header">
        <Link to="/">
          <h4><span><i className="fa fa-arrow-left"></i></span>Back</h4>
        </Link>
      </div>
      {carOwners ? (
        <Fragment>
          {carOwners.length > 0 ? (
            <Fragment>
              <div className="item-container">
                {carOwners.map((carOwner, idx) => (
                  <Item key={idx} carOwner={carOwner} />
                ))}
              </div>
            </Fragment>
          ) : (<div className="centered">
            <i className="fas fa-hdd"></i>
            <h4>No item found Found</h4>
          </div>)}
        </Fragment>
      ) : <div className="centered"> <Spinner /></div>}
    </div>
  )
}


export default CarOwnerPage;