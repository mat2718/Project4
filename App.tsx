import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import FipsItem from "./src/components/fipsItem";
import FipsInput from "./src/components/fipsInput";
import Header from "./src/components/header";
import ViewFIPs from "./src/screens/viewAllFIPSScreen"
import FipsFlatList from "./src/components/fipsFlatList"

export default function App() {
  

  return (
    <View style={styles.screen}> 
      
      <ViewFIPs/>
    </View>
  );
}

// various style objects for easy updates
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
