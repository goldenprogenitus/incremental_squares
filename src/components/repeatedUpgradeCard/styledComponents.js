import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  border: 0.5px solid #221c34;
  width: 90%;
  margin: auto;
  margin-bottom: 8px;
  display: flex;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

export const IconSection = styled.div`
  margin: auto;
  position: relative;
  padding: 0 16px;
  height: 100%;
`;

export const HidableIconContainer = styled.div`
  ${props =>
    !props.isVisible &&
    css`
      opacity: 0;
    `}
`;

export const IconContainer = styled.div``;

export const IconLevel = styled.div`
  position: absolute;
  background-color: pink;
  width: 16px;
  color: black;
  font-size: 14px;
  font-weight: 800;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;

export const DescriptionContainer = styled.div`
  width: 60%;
`;

export const UpgradeName = styled.p`
  font-size: 12px;
`;

export const UpgradeDescription = styled.p`
  font-size: 10px;
`;

export const UpgradeButtonContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UpgradeButton = styled.button`
  border: 2px solid purple;
  background-color: lightBlue;
  border-radius: 6px;
  width: 60px;
  height: 45px;
  font-size: 11px;
  text-align: center;
  ${({ isAvailable }) =>
    !isAvailable &&
    css`
      background-color: gray;
    `};
`;

export const UpgradeButtonSpan = styled.span`
  font-size: 16px;
  padding-right: 2px;
`;
