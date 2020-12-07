import { css, keyframes } from "styled-components";

const fadeInKeyframes = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

export const fadeInWithDelay = (delay: number = 0) => css`
  animation: ${fadeInKeyframes} 0.5s linear forwards;
  animation-delay: ${delay};
`;
