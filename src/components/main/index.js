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
  const [latestUpgradeId, setLatestUpgradeId] = useState(0);
  const [basicRegenTimer, setBasicRegenTimer] = useState(12000);

  useEffect(() => {
    console.log("here", latestUpgradeId);
    updateMultipliers(
      latestUpgradeId,
      simpleClickMultiplier,
      setSimpleClickMultiplier,
      passiveIncrementPerSecond,
      setPassiveIncrementPerSecond,
      basicRegenTimer,
      setBasicRegenTimer
    );
  }, [latestUpgradeId]);

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
    [counter, simpleClickMultiplier, fadeOut]
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
        setLatestUpgradeId={setLatestUpgradeId}
      />
    </>
  );
};

export default Main;
