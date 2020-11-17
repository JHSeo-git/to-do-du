import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: string[];
    space: string[];
    whiteColor: string;
    blackColor: string;
    grayColor: string;
    grayLightColor: string;
    grayDarkColor: string;
    primaryColor: string;
    primaryLightColor: string;
    primaryDarkColor: string;
    secondaryColor: string;
    secondaryLightColor: string;
    secondaryDarkColor: string;
    blueColor: string;
    blueDarkColor: string;
    blueLightColor: string;
    redColor: string;
    redDarkColor: string;
    redLightColor: string;
    alertColor: string;
    informColor: string;
  }
}
