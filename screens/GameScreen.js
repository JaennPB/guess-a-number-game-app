import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";

import NumberBox from "../components/NumberBox";
import Card from "../components/Card";

import defaultStyles from "../theme/defaultStyles";

const generateRandomNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomNum(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNum(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);

  const { userChoice, endGame } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      endGame(rounds);
    }
  }, [currentGuess, userChoice, endGame]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "higher" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Wait a minute...", "You can't lie to a computer 😉", [
        { text: "Try again", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else if (direction === "higher") {
      currentLow.current = currentGuess;
    }

    const nextGuess = generateRandomNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextGuess);
    setRounds((oldState) => oldState + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={[styles.message, defaultStyles.regularText]}>
        Opponent's guess:
      </Text>
      <NumberBox>{currentGuess}</NumberBox>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="Higher"
          onPress={nextGuessHandler.bind(this, "higher")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  message: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
});

export default GameScreen;
