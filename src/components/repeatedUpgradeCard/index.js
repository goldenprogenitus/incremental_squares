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
  IconLevel,
  HidableIconContainer
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
  setUpgradeTier = () => {},
  effectLength,
  unlockNextTierPrice
}) => {
  const isUpVisible =
    effectLength !== upgradeTier && level >= unlockNextTierPrice;
  const isDownVisible = upgradeTier !== 1;
  return (
    <Container>
      <IconLevel>{upgradeTier}</IconLevel>
      <IconSection>
        <HidableIconContainer isVisible={isUpVisible}>
          <StyledFontAwesomeIcon
            icon={faAngleUp}
            size="sm"
            onClick={
              isUpVisible ? () => setUpgradeTier(upgradeId, 1) : () => {}
            }
          />
        </HidableIconContainer>
        <IconContainer>
          <StyledFontAwesomeIcon icon={faCoffee} size="lg" />
        </IconContainer>
        <HidableIconContainer isVisible={isDownVisible}>
          <StyledFontAwesomeIcon
            icon={faAngleDown}
            size="sm"
            onClick={
              isDownVisible ? () => setUpgradeTier(upgradeId, -1) : () => {}
            }
          />
        </HidableIconContainer>
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
};

export default RepeatedUpgradeCard;
