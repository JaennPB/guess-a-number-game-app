import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const Input = (props) => {
  return (
    <TextInput {...props} style={[styles.input, defaultStyles.lightText]} />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 80,
    borderBottomColor: colors.primary,
    paddingBottom: 10,
    color: colors.primary,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 35,
    marginVertical: 30,
  },
});

export default Input;
