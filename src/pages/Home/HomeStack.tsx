import React, { useContext, useRef, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Center } from "../../components/Center";
import { Text, TouchableOpacity, FlatList, Button } from "react-native";
import faker from "faker";
import { HomeParamList, HomeStackNavProps } from "./types";
import { addProductRoutes } from "../Product/AddProductRoutes";

interface HomeStackProps {}

const Stack = createStackNavigator<HomeParamList>();

function Feed({ navigation }: HomeStackNavProps<"Feed">) {
  return (
    <Center>
      <FlatList
        style={{ width: "100%" }}
        renderItem={({ item }) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate("Product", {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
    </Center>
  );
}

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      {/* {addProductRoutes(Stack)} */}
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
};
