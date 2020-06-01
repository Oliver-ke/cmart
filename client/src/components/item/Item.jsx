import React from 'react';
import { Link } from 'react-router-dom';
import carImg from '../../assets/car.png';

import './item.styles.css'
const Item = ({ carOwner }) => {
  const {
    bio,
    car_color,
    car_model,
    first_name,
    last_name,
    car_model_year,
    country, email,
    gender,
    job_title
  } = carOwner;

  return (
    <div className="item">
      <div className="car-img">
        <img src={carImg} alt="car" />
      </div>
      <div className="property-wrapper">
        <h3>{`${first_name} ${last_name}`}</h3>
        <div className="properties">
          <div className="property">
            <h4 className="property-name">Brand</h4>
            <h4>{car_model}</h4>
          </div>
          <div className="property with-bars">
            <h4 className="property-name">Year</h4>
            <h4>{car_model_year}</h4>
          </div>
          <div className="property">
            <h4 className="property-name">Color</h4>
            <div style={{ background: car_color }} className="color" />
          </div>
        </div>
        <div className="properties">
          <div className="property">
            <h4 className="property-name">Country</h4>
            <h4>{country}</h4>
          </div>
          <div className="property">
            <h4 className="property-name">Gender</h4>
            <h4>{gender}</h4>
          </div>
          <div className="property">
            <h4 className="property-name">Job</h4>
            <h4>{job_title}</h4>
          </div>
        </div>
        <h4>
          <span>Email:</span> {email}
        </h4>
        <h4>
          <span>Bio:</span> {bio && bio.length >= 100 ? `${bio.slice(0, 100)}...` : bio}
        </h4>
      </div>
    </div>
  )
}

export default Item;