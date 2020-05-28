import React from 'react';


import './appHeader.styles.css'
const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-logo">
        <h1>
          <i className="fa fa-car"></i>
          <span> - {" "}Mar<span className="wave">t</span></span>
        </h1>
      </div>
    </div>
  )
}

export default AppHeader;