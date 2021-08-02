import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../theme/colors";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const enteredValueHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetValueHanlder = () => {
    setEnteredValue("");
  };

  const confirmValueHandler = () => {
    const number = parseInt(enteredValue);

    if (number === NaN || number <= 0 || number > 99) {
      return;
    }

    setSelectedNumber(number);
    setIsConfirmed(true);
    resetValueHanlder();
  };

  let confirmedValueOutput;
  if (isConfirmed) {
    confirmedValueOutput = <Text>Selected number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game!</Text>
        <Card style={styles.inputcontainer}>
          <Text>Select a number</Text>
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
                color={colors.accent}
                onPress={resetValueHanlder}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={confirmValueHandler}
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
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputcontainer: {
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "35%",
  },
});

export default StartGameScreen;
