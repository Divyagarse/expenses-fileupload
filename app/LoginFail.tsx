// LoginFail.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function LoginFail() {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      className="flex-1 bg-white"
      style={{ paddingTop: insets.top }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="px-6"
      >
        {/* Back Button */}
        <View className="mt-2">
          <TouchableOpacity>
            <Ionicons name="arrow-back" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* Logo */}
        <View className="items-center mt-6 mb-4">
          <Image
            source={{ uri: "https://via.placeholder.com/150x50?text=CASE" }}
            className="w-32 h-12 resize-contain"
          />
        </View>

        {/* Title */}
        <Text className="text-center font-extrabold text-xl text-black mb-2">
          Login With Us!
        </Text>
        <Text className="text-center text-gray-600 mb-6">
          Efficiently manage journeys and streamline expense reporting
        </Text>

        {/* Email Input */}
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email *"
          keyboardType="email-address"
          className="border border-red-500 rounded-md px-4 py-3 mb-4 text-black"
          placeholderTextColor="#999"
        />

        {/* Password Input */}
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password *"
          secureTextEntry
          className="border border-red-500 rounded-md px-4 py-3 mb-2 text-black"
          placeholderTextColor="#999"
        />

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text className="text-sm text-gray-700 mb-2">Forgot Password?</Text>
        </TouchableOpacity>

        {/* Error Message */}
        <View className="flex-row items-center mb-4">
          <Ionicons name="close-circle" size={18} color="red" />
          <Text className="ml-2 text-red-600 text-sm">Invalid Form Details</Text>
        </View>

        {/* Login Button */}
        <TouchableOpacity className="bg-[#1A1E27] rounded-lg py-4 mb-6 shadow-md shadow-black/30">
          <Text className="text-center text-white font-bold text-base">
            Login
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text className="text-center text-gray-700">
          Don’t Have An Account?{" "}
          <Text className="text-black font-semibold underline">Register</Text>
        </Text>

        <Text className="text-center text-gray-500 mt-4 text-xs px-2">
          By logging in or registering, you agree to our{" "}
          <Text className="font-semibold">Terms of service</Text> and{" "}
          <Text className="font-semibold">Privacy policy</Text>.
        </Text>
      </ScrollView>
    </View>
  );
}
