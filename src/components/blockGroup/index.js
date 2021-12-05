import React from "react";
import Block from "../block";
import { Container } from "./styledComponents";

const BlockGroup = ({
  simpleBlockClick,
  colorList,
  setColorList,
  basicRegenTimer
}) => (
  <Container>
    {colorList.map((color, i) => (
      <Block
        simpleBlockClick={simpleBlockClick}
        basicRegenTimer={basicRegenTimer}
        key={`simpleBlock-${i}`}
        index={i}
        color={color}
        setColor={setColorList}
      />
    ))}
  </Container>
);

export default BlockGroup;
