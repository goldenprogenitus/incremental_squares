import React from "react";
import UpgradeButton from "../upgradeButton";

const UpgradeSection = ({ counter, upgrades = [] }) => (
  <div>
    <p>Upgrades</p>
    {upgrades.map((e, i) => (
      <UpgradeButton description={e.description} price={e.basePrice} />
    ))}
  </div>
);

export default UpgradeSection;
