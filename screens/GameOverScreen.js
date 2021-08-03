import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The computer guessed correctly 💻</Text>
      <Text>The secret number was: {props.guessedNumber}</Text>
      <Text>Number of rounds it took to beat you: {props.rounds}</Text>
      <Button title="New Game" onPress={props.startNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameOverScreen;
