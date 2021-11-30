import React from "react";
import { StyledBlock } from "./styledComponents";

const Block = ({ simpleBlockClick, fadeOut, index }) => {
  return (
    <StyledBlock
      onClick={fadeOut ? () => {} : () => simpleBlockClick(index)}
      fadeOut={fadeOut}
    />
  );
};

export default Block;
