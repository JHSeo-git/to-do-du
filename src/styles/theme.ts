import { DefaultTheme } from "styled-components";

const fontSizes = [
  "0.4rem",
  "0.6rem",
  "0.8rem",
  "1rem",
  "1.2rem",
  "1.4rem",
  "1.6rem",
  "1.8rem",
  "2.4rem",
  "2.8rem",
  "3.2rem",
  "4.0rem",
  "4.8rem",
  "6.4rem",
];
const space = [
  "0.4rem",
  "0.6rem",
  "0.8rem",
  "1rem",
  "1.2rem",
  "1.6rem",
  "2.0rem",
  "3.2rem",
  "4.8rem",
  "6.4rem",
  "9.6rem",
];

const commonTheme = {
  whiteColor: "#ffffff",
  blackColor: "#000000",
  grayColor: "#9e9e9e",
  grayLightColor: "#eeeeee",
  grayDarkColor: "#616161",
  fontSizes,
  space,
};

const lightTheme: DefaultTheme = {
  ...commonTheme,
  primaryColor: "#64b5f6",
  primaryLightColor: "#9be7ff",
  primaryDarkColor: "#2286c3",
  secondaryColor: "$4dd0e1",
  secondaryLightColor: "$88ffff",
  secondaryDarkColor: "$009faf",
};

const darkTheme: DefaultTheme = {
  ...commonTheme,
  primaryColor: "#263238",
  primaryLightColor: "#4f5b62",
  primaryDarkColor: "#000a12",
  secondaryColor: "$006064",
  secondaryLightColor: "$428e92",
  secondaryDarkColor: "$00363a",
};

export const theme = {
  lightTheme,
  darkTheme,
};
