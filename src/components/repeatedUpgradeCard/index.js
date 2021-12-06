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
  UpgradeButtonSpan,
  IconSection,
  IconLevel
} from "./styledComponents";
import {
  faCoffee,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import { formatNumbers } from "../../libs/bigNumbers";

const RepeatedUpgradeCard = ({
  title,
  description,
  price,
  setLatestUpgradeId,
  upgradeId,
  level,
  isAvailable,
  nextClickWillRandomize,
  upgradeTier,
  setUpgradeTier = () => {}
}) => (
  <Container>
    <IconSection>
      <IconLevel>{upgradeTier}</IconLevel>
      <IconContainer>
        <StyledFontAwesomeIcon
          icon={faAngleUp}
          size="sm"
          onClick={() => setUpgradeTier(upgradeId, 1)}
        />
      </IconContainer>
      <IconContainer>
        <StyledFontAwesomeIcon icon={faCoffee} size="lg" />
      </IconContainer>
      <IconContainer>
        <StyledFontAwesomeIcon
          icon={faAngleDown}
          size="sm"
          onClick={() => setUpgradeTier(upgradeId, -1)}
        />
      </IconContainer>
    </IconSection>

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
            {formatNumbers(price)}
          </>
        )}
      </UpgradeButton>
    </UpgradeButtonContainer>
  </Container>
);

export default RepeatedUpgradeCard;
