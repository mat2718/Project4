import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import FipsInput from "./fipsInput";
import FipsItem from "./fipsItem";
import Color from "../constants/colors";

const FipsFlatList = (props: any) => {
  // set my states
  const [isFips, setFips]: any = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // called onpress and grabs collected text and adds it to an array
  const addFipsHandler = (fipsTitle: any) => {
    setFips((currentFips: any) => [
      ...currentFips,
      { id: Math.random().toString(), value: fipsTitle },
    ]);
    setIsAddMode(false);
  };

  // onpress of the goalitem  it deletes the item
  const removeFipsHandler = (FipsId: any) => {
    setFips((currentFips: any) => {
      return currentFips.filter((Fips: any) => Fips.id !== FipsId);
    });
  };

  const cancelFipsInputHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View>
        <Button
          title="Add New FIPS"
          onPress={() => setIsAddMode(true)}
          color={Color.accent}
        />
      </View>
      {/* goalinput is passed the prop addGoalHandler */}
      <FipsInput
        isVisible={isAddMode}
        onAddFips={addFipsHandler}
        onCancel={cancelFipsInputHandler}
      />
      {/* flatlist that calls the goal items object after the goal input updates the array for it */}
      <View style={styles.screen}>
        <FlatList
          style={styles.cardContainer}
          keyExtractor={(item, index) => item.id}
          data={isFips}
          renderItem={(itemData) => (
            <FipsItem
              id={itemData.item.id}
              onDelete={removeFipsHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    // padding: 10,
    // justifyContent: "center",
    // width: 300,
    // maxWidth: "80%",
    // alignItems: "center",
  },
});

export default FipsFlatList;
