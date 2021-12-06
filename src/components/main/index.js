import React, { useState, useEffect, useCallback } from "react";
import BlockGroup from "../blockGroup/index";
import MainCounters from "../mainCounters";
import UpgradeSection from "../upgradeSection";
import { UpgradeList } from "../../libs/upgradeList";
import { updateMultipliers } from "../../libs/multipliers";
import { rareBlockGenerator } from "../../libs/rareBlockGenerator";
import { formatNumbers } from "../../libs/bigNumbers";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const [passiveCounter, setPassiveCounter] = useState(0);
  const [passiveIncrementPerSecond, setPassiveIncrementPerSecond] = useState(0);
  const [simpleClickMultiplier, setSimpleClickMultiplier] = useState(1);
  const [nextClickWillRandomize, setNextClickWillRandomize] = useState(false);
  const [basicRegenTimer, setBasicRegenTimer] = useState(12000);
  const [upgradeLevels, setUpgradeLevels] = useState(UpgradeList.map(() => 0));
  const [upgradePrices, setUpgradePrices] = useState(
    UpgradeList.map((e, i) => UpgradeList[i].basePrice)
  );
  const [colorList, setColorList] = useState(
    [...Array(16)].map(() => "#ffffff")
  );
  const [isUpgradeAvailable, setIsUpgradeAvailable] = useState(
    UpgradeList.map(() => false)
  );

  useEffect(() => {
    if (passiveIncrementPerSecond !== 0) {
      const interval = setInterval(() => {
        setPassiveCounter(passiveCounter + passiveIncrementPerSecond);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [passiveCounter, passiveIncrementPerSecond]);

  useEffect(() => {
    const isUpgradeAvailableBuffer = [...isUpgradeAvailable];
    for (let i = 0; i < UpgradeList.length; i++) {
      isUpgradeAvailableBuffer[i] =
        upgradePrices[i] <= counter + passiveCounter;
    }
    setIsUpgradeAvailable(isUpgradeAvailableBuffer);
  }, [counter, passiveCounter, upgradePrices]);

  const simpleClick = useCallback(
    (index, setColor) => {
      setCounter(1 * simpleClickMultiplier + counter);
      if (nextClickWillRandomize) {
        setPassiveIncrementPerSecond(passiveIncrementPerSecond + 1);
        setNextClickWillRandomize(false);
        setColor(index);
      }
    },
    [
      counter,
      simpleClickMultiplier,
      nextClickWillRandomize,
      passiveIncrementPerSecond
    ]
  );

  return (
    <>
      <MainCounters balance={formatNumbers(counter + passiveCounter)} />
      <BlockGroup
        simpleBlockClick={simpleClick}
        basicRegenTimer={basicRegenTimer}
        colorList={colorList}
        setColorList={rareBlockGenerator(colorList, setColorList)}
      />
      <UpgradeSection
        upgrades={UpgradeList}
        upgradeLevels={upgradeLevels}
        upgradePrices={upgradePrices}
        isUpgradeAvailable={isUpgradeAvailable}
        nextClickWillRandomize={nextClickWillRandomize}
        setLatestUpgradeId={updateMultipliers(
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
        )}
      />
    </>
  );
};

export default Main;
