import React, { useState, useEffect, Fragment } from 'react';
import Item from './Item.jsx'
import ItemSpinner from './ItemSpinner'

const ItemsContainer = ({ selectedFilter }) => {
  const [carOwners, setCarOwners] = useState(null);
  const [count, setCount] = useState(null);
  const [initialPayload, setInitialPayload] = useState(null);
  const baseUri = 'https://carmart.herokuapp.com/';
  // runs once the component is mounted
  useEffect(() => {
    (async () => {
      try {
        const apiUri = `${baseUri}api/v1/carowner/page?start=1&stop=10`;
        const res = await fetch(apiUri);
        const { data } = await res.json();
        setCarOwners(data);
        setInitialPayload(data);
      } catch (error) {
        console.log('Error fetch from local api')
      }
    })();
  }, [])

  useEffect(() => {
    (async () => {
      try {
        if (selectedFilter === null) return setCarOwners(initialPayload);
        selectedFilter = { ...selectedFilter, start_page: 1, end_page: 20 }
        const query = selectedFilter ? (
          Object.keys(selectedFilter).map(key => key + '=' + selectedFilter[key]).join('&')
        ) : null;
        setCarOwners(null);
        const apiUri = `${baseUri}api/v1/carowner/query?${query}`;
        const res = await fetch(apiUri);
        const { data, count } = await res.json();

        setCarOwners(data);
        setCount(count);
      } catch (error) {
        console.log('Error fetch from local api')
      }
    })()
  }, [selectedFilter])

  return (
    <div className="main-wrapper">
      {carOwners ? (
        <Fragment>
          {carOwners.length > 0 ? (
            <Fragment>
              {selectedFilter && <h3>Search Results ({count})</h3>}
              <div className="item-container">
                {carOwners.map((carOwner, idx) => (
                  <Item key={idx} carOwner={carOwner} />
                ))}
              </div>
            </Fragment>
          ) : (<div className="centered">
            <i className="fas fa-hdd"></i>
            <h4>No item found with the given filter</h4>
          </div>)}
        </Fragment>
      ) : <div className="centered"> <ItemSpinner /></div>}
    </div>
  )
}


export default ItemsContainer;