import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import BaseInput from './components/BaseInput';
import BaseItem from './components/BaseItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setGoals((currentGoals) => [...currentGoals, enteredGoal]);
    setOpen(false);
  };

  function handlePress(goal) {
    setGoals((currentGoals) =>
      currentGoals.filter((currGoal) => currGoal !== goal)
    );
  }

  const handleModal = () => {
    setOpen(true);
  };

  function endModal() {
    setOpen(false);
  }

  return (
    <>
      <StatusBar style='auto' />
      <View style={styles.container}>
        <Button title='Add New Goal' color='red' onPress={handleModal} />
        <BaseInput
          onPressHandler={addGoalHandler}
          visible={open}
          endModal={endModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <BaseItem item={item} handlePress={handlePress} />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 4,
  },
});
