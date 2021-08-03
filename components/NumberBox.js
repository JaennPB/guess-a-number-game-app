import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const NumberBox = (props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.number, defaultStyles.lightText]}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderColor: colors.accent,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 30,
  },
  number: {
    fontSize: 35,
    color: colors.accent,
  },
});

export default NumberBox;
