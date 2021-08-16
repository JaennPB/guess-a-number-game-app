import React from "react";
import { Text, View, StyleSheet, useWindowDimensions } from "react-native";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const Header = (props) => {
  if (useWindowDimensions().height < 500) {
    styles.container = { ...styles.container, height: 50, paddingVertical: 15 };
  }
  if (useWindowDimensions().height > 500) {
    styles.container = { ...styles.container, height: 90, paddingVertical: 36 };
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, defaultStyles.regularText]}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: colors.primary,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

export default Header;
