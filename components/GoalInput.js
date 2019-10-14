import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };
    return(
        <Modal visible={props.vis} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course goal" style={styles.input}
         onChangeText={goalInputHandler} value={enteredGoal}/>
         <View style={styles.buttonContainer}>
         <Button title="CANCLE" color="red" onPress={props.cancle}/>
        <Button title="ADD" onPress={addGoalHandler}/>
        </View>
      </View>
      </Modal>
    );

};
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
      },
      input:{
        borderColor:'grey', 
        borderWidth:1, 
        padding:10, 
        marginBottom:10,
        width:'80%'
      },
      buttonContainer:{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'70%'
      }
});
export default GoalInput;