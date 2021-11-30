import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  border: 0.5px solid #221c34;
  width: 90%;
  margin: auto;
  margin-bottom: 8px;
  display: flex;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)``;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
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
`;

export const UpgradeButtonSpan = styled.span`
  font-size: 16px;
  padding-right: 2px;
`;
