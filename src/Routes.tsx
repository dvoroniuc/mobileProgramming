import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { AppTabs } from "./AppTabs/AppTabs";
import { ColorSchemeName } from "react-native";

type RoutesProps = { colorScheme: ColorSchemeName };

export const Routes: React.FC<RoutesProps> = ({ colorScheme }) => {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AppTabs />
    </NavigationContainer>
  );
};
