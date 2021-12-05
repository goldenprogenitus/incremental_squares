import React, { useState } from "react";
import { StyledBlock } from "./styledComponents";

const Block = ({
  simpleBlockClick,
  index,
  color,
  setColor,
  basicRegenTimer
}) => {
  const [wasClicked, setWasClicked] = useState(false);
  return (
    <StyledBlock
      onClick={
        wasClicked
          ? () => {}
          : () => {
              setWasClicked(true);
              simpleBlockClick(index, setColor);
              setTimeout(() => {
                setWasClicked(false);
              }, basicRegenTimer);
            }
      }
      fadeOut={wasClicked}
      color={color}
    />
  );
};

export default Block;
