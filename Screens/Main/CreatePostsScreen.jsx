import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const CreatePostScreen = () => {
    const [photo, setPhoto] = useState("");
  return (
    <View style={styles.container}>
      <Text>CreatePostScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CreatePostScreen;