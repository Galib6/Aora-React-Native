import { icons } from "@/constants";
import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

interface IProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField: React.FC<IProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row items-center w-full h-16 px-4 border-2 bg-black-200 rounded-2xl focus:border-secondary">
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          className="flex-1 text-base text-white font-pmedium"
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
