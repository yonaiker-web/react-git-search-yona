import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const handledAdd = (e) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{value}</h2>

      <button onClick={handledAdd}>+1</button>
    </div>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
