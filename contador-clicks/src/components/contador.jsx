import React from "react";
import '../stylesheets/contador.css';

function Counter({ numClics }) {
  return (
    <div className="contador">
      {numClics}
    </div>
  )
}

export default Counter;
