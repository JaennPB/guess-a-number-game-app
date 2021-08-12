import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import NumberBox from "../components/NumberBox";
import Card from "../components/Card";
import MainButton from "../components/MainButton";

import defaultStyles from "../theme/defaultStyles";
import colors from "../theme/colors";

const generateRdmNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRdmNum(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = (props) => {
  const initalGuess = generateRdmNum(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  const [guesses, setGuesses] = useState([initalGuess.toString()]);

  const { userChoice, endGame } = props;

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      endGame(guesses);
    }
  }, [currentGuess, userChoice, endGame]);

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
      currentLow.current = currentGuess + 1;
    }

    const nextGuess = generateRdmNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextGuess);
    setGuesses((oldstate) => [nextGuess.toString(), ...oldstate]);
  };

  const renderGuessesList = (guessesArrayLength, itemDataObject) => (
    <View style={styles.listItem}>
      <Text style={[styles.listItemText, defaultStyles.regularText]}>
        Round:{" "}
        <Text style={styles.listItemNumber}>
          {guessesArrayLength - itemDataObject.index}
        </Text>
      </Text>
      <Text style={[styles.listItemText, defaultStyles.regularText]}>
        Guess: <Text style={styles.listItemNumber}>{itemDataObject.item}</Text>
      </Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={[styles.message, defaultStyles.regularText]}>
        Opponent's guess:
      </Text>
      <NumberBox>{currentGuess}</NumberBox>
      <Card style={styles.buttonContainer}>
        <View style={styles.button}>
          <MainButton accent onPress={nextGuessHandler.bind(this, "lower")}>
            <FontAwesome name="angle-down" size={25} />
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton accent onPress={nextGuessHandler.bind(this, "higher")}>
            <FontAwesome name="angle-up" size={25} />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {guesses.map((guess, index) =>
            renderGuessesList(guess, guesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={guesses}
          renderItem={renderGuessesList.bind(this, guesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
  },
  message: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
  },
  button: {
    width: "20%",
  },
  listContainer: {
    width: "100%",
    marginTop: 20,
    flex: 1,
    backgroundColor: colors.primary,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 20,
  },
  list: {
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.accent,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginHorizontal: 30,
  },
  listItemText: {
    fontSize: 20,
    color: "white",
  },
  listItemNumber: {
    color: "white",
  },
});

export default GameScreen;
