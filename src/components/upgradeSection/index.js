import React from "react";
import UpgradeCard from "../upgradeCard";

const UpgradeSection = ({
  counter,
  upgrades = [],
  setLatestUpgradeId,
  upgradeLevels = [],
  isAvailable = []
}) => (
  <div>
    <p>Upgrades</p>
    {upgrades.map((e, i) => (
      <UpgradeCard
        description={e.description}
        price={e.basePrice}
        title={e.title}
        setLatestUpgradeId={setLatestUpgradeId}
        upgradeId={e.id}
        level={upgradeLevels[i]}
        isAvailable={isAvailable[i]}
      />
    ))}
  </div>
);

export default UpgradeSection;
