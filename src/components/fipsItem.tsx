import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Card from "./card";

/**
 *
 * @param props
 * @returns
 */
const FipsItem = (props: any) => {
  return (
      // <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <Card style={styles.inputContainer}>
          <Text>{props.title}</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="View"
                onPress={() => {}}
                color={Colors.accent}
              ></Button>
            </View>
            <View style={styles.button}>
              <Button
                title="Delete"
                onPress={() => {}}
                color={Colors.delete}
              ></Button>
            </View>
          </View>
        </Card>
      // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
  inputContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    width: 300,
    // maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default FipsItem;
