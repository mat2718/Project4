import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/card";
import FipsFlatList from "../components/fipsFlatList";
import Header from "../components/header";
import Input from "../components/input";
import Color from "../constants/colors";
import NumberContainer from "../components/numberContainer";

const ViewFIPs = (props: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const numberInputHandler = (inputText: any) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, "")); // input validation
  };

  const deleteInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmedInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 100) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 01 and 99",
        [{ text: "Okay", style: "destructive", onPress: deleteInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredValue));
    setEnteredValue("");
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game!" />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.header}>
        <Header title="Disease Tracking System" />
        <View style={styles.screen}>
          <Card style={styles.inputContainer}>
            <Text>Current Fips</Text>
            <Input
              style={styles.button}
              blurOnSubmit
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={5}
              onChangeText={numberInputHandler}
              value={enteredValue}
            ></Input>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Confirm"
                  onPress={confirmedInputHandler}
                  color={Color.accent}
                ></Button>
              </View>
              <View style={styles.button}>
                <Button
                  title="Reset"
                  onPress={deleteInputHandler}
                  color={Color.delete}
                ></Button>
              </View>
            </View>
          </Card>
          {confirmedOutput}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
    width: 100,
  },
  header: {
    flex: 1,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default ViewFIPs;
