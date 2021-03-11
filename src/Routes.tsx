import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Center } from "./components/Center";
import { Button, Text, TextInput } from "react-native";
import { HomeStackNavProps } from "./types";

interface RoutesProps {}

const Stack = createStackNavigator();

const FirstScreen = ({
  route,
  navigation,
}: HomeStackNavProps<"FirstScreen">) => {
  const [text, setText] = React.useState("");
  console.log(route);

  React.useEffect(() => {
    route.params?.message !== undefined ? setText(route.params.message) : "";
  }, [route.params?.message]);

  return (
    <Center>
      <Text>FirstScreen</Text>

      <TextInput
        style={{
          backgroundColor: "pink",
        }}
        placeholder={"enter you'r message here"}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="send data to the second page"
        onPress={() => {
          navigation.navigate("SecondScreen", {
            message: text,
          });
        }}
      />
    </Center>
  );
};

const SecondScreen = ({
  route,
  navigation,
}: HomeStackNavProps<"SecondScreen">) => {
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    route.params?.message !== undefined ? setText(route.params.message) : "";
  }, [route.params.message]);
  return (
    <Center>
      <Text>SecondScreen</Text>
      <TextInput
        placeholder={"enter you'r message here"}
        style={{
          backgroundColor: "pink",
        }}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="send data to the first page"
        onPress={() => {
          navigation.navigate("FirstScreen", {
            message: text,
          });
        }}
      />
    </Center>
  );
};

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
