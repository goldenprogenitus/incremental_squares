export const updateMultipliers = (
  latestUpgradeId,
  simpleClickMultiplier,
  setSimpleClickMultiplier,
  passiveIncrementPerSecond,
  setPassiveIncrementPerSecond,
  basicRegenTimer,
  setBasicRegenTimer
) => {
  switch (latestUpgradeId) {
    case 1:
      setSimpleClickMultiplier(simpleClickMultiplier * 2);
      break;
    case 2:
      setPassiveIncrementPerSecond(passiveIncrementPerSecond + 1);
      break;
    case 3:
      setBasicRegenTimer(basicRegenTimer / 2);
      break;
    default:
      console.log("No Upgrade");
      break;
  }
};
