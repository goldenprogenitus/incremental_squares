import React from "react";
import UpgradeCard from "../upgradeCard";

const UpgradeSection = ({ counter, upgrades = [], setLatestUpgradeId }) => (
  <div>
    <p>Upgrades</p>
    {upgrades.map((e, i) => (
      <UpgradeCard
        description={e.description}
        price={e.basePrice}
        title={e.title}
        setLatestUpgradeId={setLatestUpgradeId}
        upgradeId={e.id}
      />
    ))}
  </div>
);

export default UpgradeSection;
