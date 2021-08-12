import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The computer guessed correctly 💻</Text>
      <Text>The secret number was: {props.guessedNumber}</Text>
      <Text>Number of rounds it took to beat you: {props.rounds}</Text>
      <MainButton primary onPress={props.startNewGame}>
        NEW GAME
      </MainButton>
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
