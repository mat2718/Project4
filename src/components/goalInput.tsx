import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props: any) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  // first hook that captures text as typed and updates the state
  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        {/* text input box that updates the state enteredGoal onChangeText */}
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          {/* just a button that takes the enteredGoal and adds it to the array via addGoalHandler 
       i could also use props.onAddGoal.bind(this, enteredGoal) instead of () => props.onAddGoal(enteredGoal)*/}
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%"
  },
  button: {
    width: "40%",
  }
});

export default GoalInput;
