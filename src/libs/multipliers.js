export const updateMultipliers = (
  simpleClickMultiplier,
  setSimpleClickMultiplier,
  passiveIncrementPerSecond,
  setPassiveIncrementPerSecond,
  basicRegenTimer,
  setBasicRegenTimer,
  upgradeLevels,
  setUpgradeLevels
) => upgradeId => {
  switch (upgradeId) {
    case 0:
      setSimpleClickMultiplier(simpleClickMultiplier + 0.2);
      break;
    case 1:
      setPassiveIncrementPerSecond(passiveIncrementPerSecond + 1);
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
  }
};
