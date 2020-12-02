import styled from "styled-components";
import { lighten, darken } from "polished";
import { FaRegCircle, FaPlus, FaMinusCircle } from "react-icons/fa";
import { BiArrowFromLeft } from "react-icons/bi";

export const PlusIcon = styled(FaPlus)`
  color: ${(props) => props.theme.primaryColor};
`;

export const RegIcon = styled(FaRegCircle)`
  color: ${(props) => props.theme.grayDarkColor};
`;

export const DeleteIcon = styled(FaMinusCircle)`
  color: ${(props) => props.theme.alertColor};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.1, props.theme.alertColor)};
  }
  &:active {
    color: ${(props) => darken(0.1, props.theme.alertColor)};
  }
`;

export const CloseIcon = styled(BiArrowFromLeft)`
  color: ${(props) => props.theme.grayDarkColor};
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.2, props.theme.grayDarkColor)};
  }
  &:active {
    color: ${(props) => darken(0.2, props.theme.grayDarkColor)};
  }
`;
