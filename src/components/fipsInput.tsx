import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal, Text } from "react-native";
import Input from "./input";

/**
 *
 * @param props
 * @returns
 */
const FipsInput = (props: any) => {
  const [enteredFips, setEnteredFips] = useState("");
  const [enteredCounty, setEnteredCounty] = useState("");
  const [enteredState, setEnteredState] = useState("");
  const [enteredStateCode, setEnteredStateCode] = useState("");
  const [enteredPopulation, setEnteredPopulation] = useState("");

  // first hook that captures text as typed and updates the state
  const fipsInputHandler = (enteredText: string) => {
    setEnteredFips(enteredText);
  };
  const countyInputHandler = (enteredText: string) => {
    setEnteredCounty(enteredText);
  };
  const stateInputHandler = (enteredText: string) => {
    setEnteredState(enteredText);
  };
  const stateCodeInputHandler = (enteredText: string) => {
    setEnteredStateCode(enteredText);
  };
  const populationInputHandler = (enteredText: string) => {
    setEnteredPopulation(enteredText);
  };

  // Activates when add is pressed
  const fipsHandler = () => {
    props.onAddFips(enteredFips);
    setEnteredFips("");
    setEnteredCounty("");
    setEnteredState("");
    setEnteredStateCode("");
    setEnteredPopulation("");
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={{ fontSize: 20, textAlign: "center", padding: 5 }}>
          Fill in the boxes below to add new Fips to the Database.
        </Text>
        {/* text input box that updates the state enteredGoal onChangeText */}
        <Input
          placeholder="Fips Code"
          style={styles.input}
          onChangeText={fipsInputHandler}
          value={enteredFips}
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={5}

        />
        <Input
          placeholder="County"
          style={styles.input}
          onChangeText={countyInputHandler}
          value={enteredCounty}
        />
        <Input
          placeholder="State"
          style={styles.input}
          onChangeText={stateInputHandler}
          value={enteredState}
        />
        <Input
          placeholder="StateCode"
          style={styles.input}
          onChangeText={stateCodeInputHandler}
          value={enteredStateCode}
        />
        <Input
          placeholder="Population"
          style={styles.input}
          onChangeText={populationInputHandler}
          value={enteredPopulation}
          keyboardType="number-pad"
        />
        <View style={styles.buttonStyle}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          {/* just a button that takes the enteredGoal and adds it to the array via addGoalHandler 
       i could also use props.onAddGoal.bind(this, enteredGoal) instead of () => props.onAddGoal(enteredGoal)*/}
          <View style={styles.button}>
            <Button title="Add" onPress={fipsHandler} />
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
    margin: 5
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default FipsInput;
