import React from 'react';


import './item.styles.css';
const ItemSpinner = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default ItemSpinner;