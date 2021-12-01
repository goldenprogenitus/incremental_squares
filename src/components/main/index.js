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
  console.log(upgradeLevels);
  return (
    <>
      <MainCounters balance={counter} />
      <BlockGroup simpleBlockClick={simpleClick} fadeOut={fadeOut} />
      <UpgradeSection
        upgrades={UpgradeList}
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
