import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, {id:Math.random().toString(), value:goalTitle}]);

    setIsAddMode(false);
  };

  const cancleGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  const removeGaolHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    } );
  };
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput vis={isAddMode} onAddGoal={addGoalHandler} cancle={cancleGoalAdditionHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem = {itemData => <GoalItem id={itemData.item.id} onDelete={removeGaolHandler} title={itemData.item.value}/>}
      />
      <View>

      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
});
