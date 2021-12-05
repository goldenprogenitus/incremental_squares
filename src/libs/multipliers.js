export const updateMultipliers =
  (
    simpleClickMultiplier,
    setSimpleClickMultiplier,
    passiveIncrementPerSecond,
    setPassiveIncrementPerSecond,
    basicRegenTimer,
    setBasicRegenTimer,
    upgradeLevels,
    setUpgradeLevels,
    counter,
    setCounter,
    upgradePrices,
    setUpgradePrices,
    passiveCounter,
    setPassiveCounter,
    setNextClickWillRandomize
  ) =>
  upgradeId => {
    if (counter + passiveCounter > upgradePrices[upgradeId]) {
      let wasIncrementPerSecondChanged = false;
      switch (upgradeId) {
        case 0:
          setSimpleClickMultiplier(simpleClickMultiplier + 0.2);
          break;
        case 1:
          wasIncrementPerSecondChanged = true;
          setNextClickWillRandomize(true);
          // setPassiveIncrementPerSecond(passiveIncrementPerSecond + 1);
          break;
        case 2:
          setBasicRegenTimer(basicRegenTimer * 0.9);
          break;
        default:
          console.log("No Upgrade");
          break;
      }
      if (upgradeLevels[upgradeId] >= 0) {
        const newUpgradeLevels = [...upgradeLevels];
        newUpgradeLevels[upgradeId] = newUpgradeLevels[upgradeId] + 1;
        setUpgradeLevels(newUpgradeLevels);
        if (passiveCounter > 0) {
          if (passiveCounter >= upgradePrices[upgradeId]) {
            setPassiveCounter(
              passiveCounter -
                upgradePrices[upgradeId] +
                (wasIncrementPerSecondChanged ? passiveIncrementPerSecond : 0)
            );
          } else {
            setCounter(
              counter -
                (upgradePrices[upgradeId] - passiveCounter) +
                (wasIncrementPerSecondChanged ? passiveIncrementPerSecond : 0)
            );
            setPassiveCounter(0);
          }
        } else {
          setCounter(
            counter -
              upgradePrices[upgradeId] +
              (wasIncrementPerSecondChanged ? passiveIncrementPerSecond : 0)
          );
        }

        const newUpgradePrices = [...upgradePrices];
        newUpgradePrices[upgradeId] =
          Math.round(newUpgradePrices[upgradeId] * 1.2 * 100) / 100;

        setUpgradePrices(newUpgradePrices);
      }
    } else {
      return;
    }
  };
