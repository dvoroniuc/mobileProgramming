import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import React from "react";

export type ProductParamList = {
  FirstScreen: {
    message: string;
  };
  SecondScreen: {
    message: string;
  };
};

export type HomeStackNavProps<T extends keyof ProductParamList> = {
  navigation: StackNavigationProp<ProductParamList, T>;
  route: RouteProp<ProductParamList, T>;
};
