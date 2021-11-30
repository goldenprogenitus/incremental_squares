import React, { useState, useEffect, useCallback } from "react";
import BlockGroup from "../blockGroup/index";
import MainCounters from "../mainCounters";
import UpgradeSection from "../upgradeSection";
import { UpgradeList } from "../../libs/upgradeList";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [passiveIncrementPerSecond] = useState(0);
  const [simpleClickMultiplier] = useState(1);
  const [effectIndex, setEffectIndex] = useState(-1);
  const [fadeOut, setFadeOut] = useState([...Array(16)].map(() => false));

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
      }, 12000);

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
      <UpgradeSection upgrades={UpgradeList} />
    </>
  );
};

export default Main;
