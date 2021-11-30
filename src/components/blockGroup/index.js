import React from "react";
import Block from "../block";
import { Container } from "./styledComponents";

const BlockGroup = ({ simpleBlockClick, fadeOut }) => (
  <Container>
    {fadeOut.map((isFadeOut, i) => (
      <Block
        simpleBlockClick={simpleBlockClick}
        fadeOut={isFadeOut}
        key={`simpleBlock-${i}`}
        index={i}
      />
    ))}
  </Container>
);

export default BlockGroup;
