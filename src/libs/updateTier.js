import { UpgradeList } from "./upgradeList";

export const updateTier = (
  upgradePrices,
  setUpgradePrices,
  upgradeLevels,
  setUpgradeLevels,
  upgradeTiers,
  setUpgradeTiers
) => (upgradeId, increment) => {
  const newUpgradeTiers = [...upgradeTiers];
  if (newUpgradeTiers[upgradeId] + increment !== 0) {
    newUpgradeTiers[upgradeId] += increment;
    setUpgradeTiers(newUpgradeTiers);
    const newUpgradePrices = [...upgradePrices];
    newUpgradePrices[upgradeId] =
      UpgradeList[upgradeId].basePrice[newUpgradeTiers[upgradeId] - 1];
    setUpgradePrices(newUpgradePrices);
  }
};
