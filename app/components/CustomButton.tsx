import { images } from "@/constants";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface IProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyles?: string;
  isLading?: boolean;
}

const CustomButton: React.FC<IProps> = ({
  title,
  handlePress,
  containerStyle,
  textStyles,
  isLading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLading}
      className={`bg-secondary rounded-xl min-h-[55px] justify-center items-center ${containerStyle} ${
        isLading ? "opacity-50" : ""
      }`}
    >
      <View className="flex-row items-center justify-center gap-2">
        {isLading && (
          <View>
            <Image
              source={images.spinner}
              className="animate-spin h-[15px] w-[15px]"
            />
          </View>
        )}
        <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
