import React, { useState, useEffect, useCallback } from "react";
import BlockGroup from "../blockGroup/index";
import MainCounters from "../mainCounters";
import UpgradeSection from "../upgradeSection";
import { UpgradeList } from "../../libs/upgradeList";
import { updateMultipliers } from "../../libs/multipliers";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [passiveIncrementPerSecond, setPassiveIncrementPerSecond] = useState(0);
  const [simpleClickMultiplier, setSimpleClickMultiplier] = useState(1);
  const [effectIndex, setEffectIndex] = useState(-1);
  const [fadeOut, setFadeOut] = useState([...Array(16)].map(() => false));
  const [basicRegenTimer, setBasicRegenTimer] = useState(12000);
  const [upgradeLevels, setUpgradeLevels] = useState(UpgradeList.map(() => 0));
  const [upgradePrices, setUpgradePrices] = useState(
    UpgradeList.map((e, i) => UpgradeList[i].basePrice)
  );
  const [isUpgradeAvailable, setIsUpgradeAvailable] = useState(
    UpgradeList.map(() => false)
  );

  useEffect(() => {
    const isUpgradeAvailableBuffer = [...isUpgradeAvailable];
    for (let i = 0; i < UpgradeList.length; i++) {
      if (upgradePrices[i] <= counter) {
        isUpgradeAvailableBuffer[i] = true;
      }
    }
    setIsUpgradeAvailable(isUpgradeAvailableBuffer);
  }, [counter]);

  useEffect(() => {
    if (passiveIncrementPerSecond !== 0) {
      const timeout = setTimeout(() => {
        setCounter(counter + passiveIncrementPerSecond);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [counter, passiveIncrementPerSecond]);

  const simpleClick = useCallback(
    index => {
      setCounter(1 * simpleClickMultiplier + counter);
      fadeOut[index] = true;
      setFadeOut(fadeOut);
      const timeout = setTimeout(() => {
        setEffectIndex(index);
      }, basicRegenTimer);

      return () => {
        clearTimeout(timeout);
      };
    },
    [counter, simpleClickMultiplier, fadeOut, basicRegenTimer]
  );

  useEffect(() => {
    fadeOut[effectIndex] = false;
    setFadeOut([...fadeOut]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectIndex]);
  return (
    <>
      <MainCounters balance={counter} />
      <BlockGroup simpleBlockClick={simpleClick} fadeOut={fadeOut} />
      <UpgradeSection
        upgrades={UpgradeList}
        upgradeLevels={upgradeLevels}
        setLatestUpgradeId={updateMultipliers(
          simpleClickMultiplier,
          setSimpleClickMultiplier,
          passiveIncrementPerSecond,
          setPassiveIncrementPerSecond,
          basicRegenTimer,
          setBasicRegenTimer,
          upgradeLevels,
          setUpgradeLevels
        )}
      />
    </>
  );
};

export default Main;
