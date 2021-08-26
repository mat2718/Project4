import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./src/components/goalItem";
import GoalInput from "./src/components/goalInput";

export default function App() {
  // set my states
  const [courseGoals, setCourseGoals]: any = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  // called onpress and grabs collected text and adds it to an array
  const addGoalHandler = (goalTitle: any) => {
    setCourseGoals((currentGoals: any) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  // onpress of the goalitem  it deletes the item
  const removeGoalHandler = (goalId: any) => {
    setCourseGoals((currentGoals: any) => {
      return currentGoals.filter((goal: any) => goal.id !== goalId);
    });
  };

  const cancelGoalInputHandler = () => {
    setIsAddMode(false);
    
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      {/* goalinput is passed the prop addGoalHandler */}
      <GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalInputHandler}/>
      {/* flatlist that calls the goal items object after the goal input updates the array for it */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

// various style objects for easy updates
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
