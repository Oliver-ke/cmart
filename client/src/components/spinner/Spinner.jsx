import React from 'react';

import './spinner.styles.css';

const Spinner = () => (
  <div className="spinner-wrapper">
    <div className="sk-wander sk-center">
      <div className="sk-wander-cube"></div>
      <div className="sk-wander-cube"></div>
      <div className="sk-wander-cube alternate"></div>
      <div className="sk-wander-cube"></div>
    </div>
  </div>
)

export default Spinner