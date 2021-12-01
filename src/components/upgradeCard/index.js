import React from "react";
import {
  Container,
  StyledFontAwesomeIcon,
  IconContainer,
  DescriptionContainer,
  UpgradeName,
  UpgradeDescription,
  UpgradeButtonContainer,
  UpgradeButton,
  UpgradeButtonSpan
} from "./styledComponents";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const UpgradeCard = ({
  title,
  description,
  price,
  setLatestUpgradeId,
  upgradeId,
  level
}) => (
  <Container>
    <IconContainer>
      <StyledFontAwesomeIcon icon={faCoffee} size="lg" />
    </IconContainer>
    <DescriptionContainer>
      <UpgradeName>
        {title}
        {`(${level})`}
      </UpgradeName>
      <UpgradeDescription> {description} </UpgradeDescription>
    </DescriptionContainer>
    <UpgradeButtonContainer>
      <UpgradeButton onClick={() => setLatestUpgradeId(upgradeId)}>
        <UpgradeButtonSpan>■</UpgradeButtonSpan>
        {price}
      </UpgradeButton>
    </UpgradeButtonContainer>
  </Container>
);

export default UpgradeCard;
