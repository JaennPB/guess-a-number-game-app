import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

import colors from "../theme/colors";

const MainButton = (props) => {
  const buttonStyles = (pressed) => {
    let updatedStyles = [styles.buttonContainer];

    if (props.primary) {
      updatedStyles.push({ backgroundColor: colors.primary });
      pressed && updatedStyles.push({ backgroundColor: colors.primaryPressed });
    }

    if (props.accent) {
      updatedStyles.push({ backgroundColor: colors.accent });
      pressed && updatedStyles.push({ backgroundColor: colors.accentPressed });
    }

    if (props.disabled) {
      updatedStyles.push({ backgroundColor: colors.disabled });
    }

    return updatedStyles;
  };

  return (
    <Pressable
      style={({ pressed }) => buttonStyles(pressed)}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
  },
});

export default MainButton;
