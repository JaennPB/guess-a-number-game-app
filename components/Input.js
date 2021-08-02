import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../theme/colors";

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    width: 80,
    height: 80,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 8,
    textAlign: "center",
    fontSize: 25,
    marginVertical: 20,
    borderRadius: 10,
  },
});

export default Input;
