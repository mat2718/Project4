import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import FipsItem from "./src/components/fipsItem";
import FipsInput from "./src/components/fipsInput";
import Header from "./src/components/header";
import StartScreen from "./src/screens/startScreen"
import GameScreen from "./src/screens/gameScreen";
import Colors from "./src/constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = (selectedNumber: any) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartScreen onStartGame={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen />
  }


  return (
    <View style={styles.screen}> 
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

// various style objects for easy updates
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.bkg
  },
});
