import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [gameOverRounds, setGameOverRounds] = useState(0);

  let [fontsLoaded] = useFonts({
    customLight: require("./assets/fonts/Quicksand-Light.ttf"),
    customRegular: require("./assets/fonts/Quicksand-Regular.ttf"),
  });

  const startGameHandler = (userSelectedNumber) => {
    setSelectedNumber(userSelectedNumber);
  };

  const endGameHandler = (guesses) => {
    setGameOverRounds(guesses.length);
  };

  const newGameHandler = () => {
    setGameOverRounds(0);
    setSelectedNumber(null);
  };

  let currentScreen = <StartGameScreen startGame={startGameHandler} />;

  if (selectedNumber && gameOverRounds <= 0) {
    currentScreen = (
      <GameScreen userChoice={selectedNumber} endGame={endGameHandler} />
    );
  } else if (gameOverRounds > 0) {
    currentScreen = (
      <GameOverScreen
        rounds={gameOverRounds}
        guessedNumber={selectedNumber}
        startNewGame={newGameHandler}
      />
    );
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.screenContainer}>
        <Header title="Guess a Number" />
        {currentScreen}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});

export default App;
