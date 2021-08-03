import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "../theme/colors";
import defaultStyles from "../theme/defaultStyles";

const Header = (props) => {
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
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
  },
  text: {
    color: "white",
    fontSize: 25,
  },
});

export default Header;
