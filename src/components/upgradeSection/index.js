import React from "react";
import UpgradeCard from "../upgradeCard";

const UpgradeSection = ({
  counter,
  upgrades = [],
  setLatestUpgradeId,
  upgradeLevels = [],
  upgradePrices = [],
  isUpgradeAvailable = [],
  nextClickWillRandomize = false
}) => (
  <div>
    <p>Upgrades</p>
    {upgrades.map((e, i) => (
      <UpgradeCard
        description={e.description}
        price={upgradePrices[i]}
        title={e.title}
        setLatestUpgradeId={setLatestUpgradeId}
        upgradeId={e.id}
        level={upgradeLevels[i]}
        isAvailable={
          isUpgradeAvailable[i] &&
          !(e.twoClickUpgrade && nextClickWillRandomize)
        }
        nextClickWillRandomize={e.twoClickUpgrade && nextClickWillRandomize}
      />
    ))}
  </div>
);

export default UpgradeSection;
