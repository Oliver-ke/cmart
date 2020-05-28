import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import FilterCard from './FilterCard';
import swiperConfig from './swiperConfig';

import './filterCard.styles.css'
const FilterCardContainer = ({ filters, updateCars }) => {
  const [filterSelected, setFilterSelected] = useState(null);

  const filterClickHandler = (id, filter) => {
    if (id === filterSelected) {
      setFilterSelected(null)
      updateCars(null);
      return;
    }
    setFilterSelected(id)
    updateCars(filter)
  }
  return (
    <Swiper {...swiperConfig}>
      {filters.map((filter) => (
        <FilterCard
          isSelected={filterSelected}
          filterClickHandler={filterClickHandler}
          filter={filter} key={filter.id}
        />
      ))}
    </Swiper>
  )
}

export default FilterCardContainer;