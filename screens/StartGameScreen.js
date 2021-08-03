import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import NumberBox from "../components/NumberBox";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const enteredValueHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetValueHanlder = () => {
    setEnteredValue("");
    if (isConfirmed) {
      setIsConfirmed(false);
    }
  };

  const confirmValueHandler = () => {
    const number = parseInt(enteredValue);

    if (isNaN(number) || number <= 0 || number > 99) {
      Alert.alert("Invalid Number", "Please choose a valid number", [
        { text: "Okay", style: "cancel", onPress: resetValueHanlder },
      ]);
      return;
    }

    setSelectedNumber(number);
    setIsConfirmed(true);
    resetValueHanlder();
    Keyboard.dismiss();
  };

  let confirmedValueOutput;
  if (isConfirmed) {
    confirmedValueOutput = (
      <Card style={styles.selectedNumContainer}>
        <Text style={[styles.message, defaultStyles.regularText]}>
          You selected number:
        </Text>
        <NumberBox>{selectedNumber}</NumberBox>
        <Button
          title="Start Game"
          color={colors.accent}
          onPress={props.startGame.bind(this, selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Card style={styles.inputcontainer}>
          <Text style={[styles.message, defaultStyles.regularText]}>
            Select a number:
          </Text>
          <Input
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChangeText={enteredValueHandler}
            returnKeyType="done"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.secondary}
                onPress={resetValueHanlder}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={confirmValueHandler}
                disabled={isConfirmed}
              />
            </View>
          </View>
        </Card>
        {confirmedValueOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
  },
  inputcontainer: {
    width: "80%",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
  selectedNumContainer: {
    alignItems: "center",
    marginVertical: 30,
    width: "80%",
  },
});

export default StartGameScreen;
