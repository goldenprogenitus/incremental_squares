import React from "react";

const MainCounters = ({ balance }) => (
  <>
    <div>■{Math.round(balance * 100) / 100}</div>
  </>
);

export default MainCounters;
