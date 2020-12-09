import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { FaRegCircle, FaPlus, FaMinusCircle } from 'react-icons/fa';
import { BiArrowFromLeft } from 'react-icons/bi';

export const PlusIcon = styled(FaPlus)`
  cursor: pointer;
  color: ${(props) => props.theme.primaryColor};
`;

export const RegIcon = styled(FaRegCircle)`
  cursor: pointer;
  color: ${(props) => props.theme.grayDarkColor};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.1, props.theme.grayDarkColor)};
  }
  &:active {
    color: ${(props) => darken(0.1, props.theme.grayDarkColor)};
  }
`;

export const DeleteIcon = styled(FaMinusCircle)`
  cursor: pointer;
  color: ${(props) => props.theme.alertColor};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.1, props.theme.alertColor)};
  }
  &:active {
    color: ${(props) => darken(0.1, props.theme.alertColor)};
  }
`;

export const CloseIcon = styled(BiArrowFromLeft)`
  cursor: pointer;
  color: ${(props) => props.theme.grayDarkColor};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => lighten(0.2, props.theme.grayDarkColor)};
  }
  &:active {
    color: ${(props) => darken(0.2, props.theme.grayDarkColor)};
  }
`;
