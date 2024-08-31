import { images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "./components/CustomButton";

const Index = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[90vh] justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-center text-white">
              Discover Endless possibilities{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-center text-gray-100 font-pregular mt-7">
            Where creativity meets innovations: embark on a journey of limitless
            exploration with aura{" "}
          </Text>
          <CustomButton
            handlePress={() => {
              router.push("/sign-in");
            }}
            title="Discover"
            containerStyle="w-full mt-[20px]"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Index;
