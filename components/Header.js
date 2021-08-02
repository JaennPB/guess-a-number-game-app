import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../theme/colors";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
  },
  text: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
