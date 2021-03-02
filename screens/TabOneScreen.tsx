import * as React from "react";
import { StyleSheet, Button } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View, TextInput } from "../components/Themed";
import { pinkColor } from "../constants/Colors";

type Props = {
  message: string;
  onChange: (v: string) => void;
};

export const TabOneScreen: React.FC<Props> = ({ message, onChange }) => {
  const [value, onChangeText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <TextInput
        style={styles.input}
        placeholder={"Please insert value here"}
        onChangeText={onChangeText}
        value={value}
      />
      <Button title={"submit"} onPress={() => alert(value)} />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderColor: pinkColor,
    borderWidth: 3.0,
    borderRadius: 30,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
