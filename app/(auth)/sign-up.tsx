import { images } from "@/constants";
import { createUser } from "@/lib/appwrite";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import FormField from "../components/FormFeild";

const signUp = () => {
  const [from, setForm] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const onsubmit = async () => {
    if (!from.email || !from.password || !from.name) {
      Alert.alert("Error", "Please Fill All Fields");
    }
    setSubmitting(true);

    try {
      const res = await createUser(from.email, from.password, from.name);

      router.replace("/home");
    } catch (e: any) {
      console.log(e);
      Alert.alert("Error", e.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <View className="justify-center w-full h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="mt-10 text-2xl text-white font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            title="User name"
            value={from.name}
            handleChangeText={(e) => setForm({ ...from, name: e })}
            otherStyles="mt-5"
            placeholder="Enter your name"
            keyboardType="default"
          />
          <FormField
            title="Email"
            value={from.email}
            handleChangeText={(e) => setForm({ ...from, email: e })}
            otherStyles="mt-5"
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={from.password}
            handleChangeText={(e) => setForm({ ...from, password: e })}
            otherStyles="mt-5"
            placeholder="Enter your password"
            keyboardType="default"
          />
          <CustomButton
            title="sign-Up"
            isLading={submitting}
            handlePress={onsubmit}
            containerStyle="mt-7"
          />
          <View className="flex-row justify-center gap-2 pt-5">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link href="/sign-in" className="text-secondary-200 font-pmedium">
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signUp;
