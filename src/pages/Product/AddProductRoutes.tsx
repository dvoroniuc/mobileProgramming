import React from "react";
import { TouchableOpacity, Text, Button } from "react-native";
import { HomeStackNavProps, HomeParamList } from "../Home/types";
import { Center } from "../../components/Center";
import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import { SearchParamList } from "../Search/types";

function Product({ route, navigation }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}

function EditProduct({ route, navigation }: HomeStackNavProps<"EditProduct">) {
  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit the form
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}
              style={{ paddingRight: 8 }}
            >
              <Text
                style={{
                  color: "red",
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          ),
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`,
        })}
        name="Product"
        component={Product}
      />
    </>
  );
};
