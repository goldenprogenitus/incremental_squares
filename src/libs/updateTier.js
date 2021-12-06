import { UpgradeList } from "./upgradeList";

const previousTiersMap = {};

export const updateTier =
  (
    upgradePrices,
    setUpgradePrices,
    upgradeLevels,
    setUpgradeLevels,
    upgradeTiers,
    setUpgradeTiers,
    upgradeEffects,
    setUpgradeEffects
  ) =>
  (upgradeId, increment) => {
    const newUpgradeTiers = [...upgradeTiers];
    if (newUpgradeTiers[upgradeId] + increment !== 0) {
      const newUpgradePrices = [...upgradePrices];
      const newUpgradeLevels = [...upgradeLevels];
      const newUpgradeEffects = [...upgradeEffects];
      newUpgradeTiers[upgradeId] += increment;
      newUpgradeEffects[upgradeId] =
        UpgradeList[upgradeId].effect[newUpgradeTiers[upgradeId] - 1];

      if (previousTiersMap[upgradeId] === undefined) {
        // To not break when setting sub-level
        previousTiersMap[upgradeId] = {};
      }
      if (
        previousTiersMap[upgradeId][newUpgradeTiers[upgradeId]] === undefined
      ) {
        newUpgradePrices[upgradeId] =
          UpgradeList[upgradeId].basePrice[newUpgradeTiers[upgradeId] - 1];
        newUpgradeLevels[upgradeId] = 0;
      } else {
        newUpgradePrices[upgradeId] =
          previousTiersMap[upgradeId][newUpgradeTiers[upgradeId]].price;
        newUpgradeLevels[upgradeId] =
          previousTiersMap[upgradeId][newUpgradeTiers[upgradeId]].levels;
      }
      setUpgradeTiers(newUpgradeTiers);
      setUpgradePrices(newUpgradePrices);
      setUpgradeLevels(newUpgradeLevels);
      setUpgradeEffects(newUpgradeEffects);
      // here
      previousTiersMap[upgradeId][upgradeTiers[upgradeId]] = {
        levels: upgradeLevels[upgradeId],
        price: upgradePrices[upgradeId]
      };
    }
  };
