import React from "react";

const Divider = ({ text }) => {
  if (text) {
    return (
      <div className="row align-items-center py-3">
        <div className="col">
          <hr />
        </div>
        <div className="col-auto font-weight-bold" style={{ color: "#666" }}>
          {text}
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    );
  } else {
    return (
      <div className="row py-3">
        <div className="col">
          <hr />
        </div>
      </div>
    );
  }
};

export default Divider;
