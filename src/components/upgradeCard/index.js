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
  level,
  isAvailable,
  nextClickWillRandomize
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
      <UpgradeButton
        onClick={isAvailable ? () => setLatestUpgradeId(upgradeId) : () => {}}
        isAvailable={isAvailable}
      >
        {nextClickWillRandomize ? (
          "Waiting"
        ) : (
          <>
            <UpgradeButtonSpan>■</UpgradeButtonSpan>
            {price}
          </>
        )}
      </UpgradeButton>
    </UpgradeButtonContainer>
  </Container>
);

export default UpgradeCard;
