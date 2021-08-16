import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import MainButton from "../components/MainButton";
import Card from "../components/Card";
import NumberBox from "../components/NumberBox";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={[styles.text, defaultStyles.regularText]}>
          Your phone has guessed correctly!{" "}
          <Feather name="check-square" size={24} color={colors.accent} />
        </Text>
        <Card style={styles.gameOverCard}>
          <View style={styles.infoContainer}>
            <Text style={[styles.text, defaultStyles.regularText]}>
              The secret number was:
            </Text>
            <NumberBox>{props.guessedNumber}</NumberBox>
          </View>
          <Text style={[styles.text, defaultStyles.regularText]}>
            Number of rounds it took to beat you:{" "}
            <Text style={styles.numberText}>{props.rounds}</Text>
          </Text>
        </Card>
        <MainButton primary onPress={props.startNewGame}>
          NEW GAME
        </MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  gameOverCard: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  numberText: {
    color: colors.primary,
    fontSize: 18,
  },
  infoContainer: {
    alignItems: "center",
  },
});

export default GameOverScreen;
