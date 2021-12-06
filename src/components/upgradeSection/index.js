import React from "react";
import UpgradeCard from "../upgradeCard";
import RepeatedUpgradeCard from "../repeatedUpgradeCard";

const UpgradeSection = ({
  counter,
  upgrades = [],
  setLatestUpgradeId,
  upgradeLevels = [],
  upgradePrices = [],
  isUpgradeAvailable = [],
  nextClickWillRandomize = false,
  upgradeTiers = [],
  setUpgradeTier
}) => (
  <div>
    <p>Upgrades</p>
    {upgrades.map((e, i) =>
      e.unique ? (
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
      ) : (
        <RepeatedUpgradeCard
          description={e.description[0]}
          price={upgradePrices[i]}
          title={e.title[0]}
          setLatestUpgradeId={setLatestUpgradeId}
          upgradeId={e.id}
          level={upgradeLevels[i]}
          isAvailable={
            isUpgradeAvailable[i] &&
            !(e.twoClickUpgrade && nextClickWillRandomize)
          }
          nextClickWillRandomize={e.twoClickUpgrade && nextClickWillRandomize}
          upgradeTier={upgradeTiers[i]}
          setUpgradeTier={setUpgradeTier}
        />
      )
    )}
  </div>
);

export default UpgradeSection;
