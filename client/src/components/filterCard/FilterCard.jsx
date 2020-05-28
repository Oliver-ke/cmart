import React from 'react'


import './filterCard.styles.css';
const FilterCard = ({ isSelected, filter, filterClickHandler }) => {
  const { colors, countries, end_year, gender, start_year, id } = filter;
  return (
    <div
      onClick={() => filterClickHandler(id, filter)}
      className={isSelected === id ? "filter-card swiper-slide active" : "filter-card swiper-slide"}
    >
      {isSelected === id && (
        <div className="click-icon">
          <i className="fa fa-check-circle"></i>
        </div>
      )}
      <h3 className="date">{`${start_year} - ${end_year}`}</h3>
      <h4 className="gender">{gender === '' ? 'None' : gender}</h4>
      <div className="countries">
        {countries.length > 0 ? (
          countries.map((country, idx) => (
            <div key={idx} className="country">{country}</div>
          ))
        ) : <div className="country">Any Country</div>}
      </div>
      <div className="colors">
        {colors.length > 0 ? (
          colors.map((color, idx) => (
            <div key={idx} style={{ background: color }} className="color" />
          ))
        ) : <div>Any Color</div>}
      </div>
    </div>
  )
}

export default FilterCard