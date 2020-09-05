import React from 'react';

function Dropdown({ options }) {
  const renderedOptions = options.map((option, i) => {
    return (
      <div key={i} className="item">
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <div className="label">Select a color</div>
      </div>
      <div className="ui selection dropdown visible active">
        <i className="dropdown icon"></i>
        <div className="text">Select Color</div>
        <div className="menu visible transition">{renderedOptions}</div>
      </div>
    </div>
  );
}

export default Dropdown;
