import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const layout = () => {
  return (
    <View className="flex justify-center items-center" style={styles.container}>
      <Text className="text-3xl font-pblack">React Native</Text>
      <StatusBar style="auto" />
      <Link href="/profile">profile</Link>
    </View>
  );
};

export default layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
