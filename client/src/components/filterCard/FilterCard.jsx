import React from 'react'
import { Link } from 'react-router-dom';
import './filterCard.styles.css';

const FilterCard = ({ filter }) => {
  const { colors, countries, end_year, gender, start_year, id } = filter;
  return (
    <Link className="filter-card" to={{ pathname: `/filter/${id}`, filter }}>
      <h3 className="date">{`${start_year} - ${end_year}`}</h3>
      <h4 className="gender">{gender === '' ? null : `${gender.charAt(0).toUpperCase()}${gender.slice(1)}`}</h4>
      <div className="countries">
        {countries.length > 0 ? (
          countries.map((country, idx) => (
            <div key={idx} className="country">{`${country.charAt(0).toUpperCase()}${country.slice(1)}`}</div>
          ))
        ) : null}
      </div>
      <div className="colors">
        {colors.length > 0 ? (
          colors.map((color, idx) => (
            <div key={idx} style={{ background: color }} className="color" />
          ))
        ) : null}
      </div>
    </Link>
  )
}

export default FilterCard