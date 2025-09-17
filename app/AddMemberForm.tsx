// AddMemberForm.tsx
import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AddMemberForm() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top }}>
      {/* Header */}
      <View className="bg-[#FCD96F] px-4 py-3 flex-row items-center">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={22} color="black" />
        </TouchableOpacity>
        <Text className="ml-3 font-bold text-lg text-black">Add New Member</Text>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <View className="px-5 mt-6 space-y-5">
          {/* Member Type */}
          <TextInput
            placeholder="Member Type *"
            placeholderTextColor="#999"
            className="border border-gray-300 rounded-lg px-4 py-3 text-black"
          />

          {/* Email */}
          <TextInput
            placeholder="Email *"
            placeholderTextColor="#999"
            className="border border-gray-300 rounded-lg px-4 py-3 text-black"
          />

          {/* Password */}
          <TextInput
            placeholder="Password *"
            placeholderTextColor="#999"
            secureTextEntry
            className="border border-gray-300 rounded-lg px-4 py-3 text-black"
          />

          {/* Token */}
          <TextInput
            placeholder="Token *"
            placeholderTextColor="#999"
            className="border border-gray-300 rounded-lg px-4 py-3 text-black"
          />

          {/* Add Member Button */}
          <TouchableOpacity className="bg-black py-3 rounded-lg shadow-md">
            <Text className="text-white font-semibold text-center text-base">
              Add Member
            </Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity className="border border-black py-3 rounded-lg">
            <Text className="text-black font-semibold text-center text-base">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 flex-row bg-white border-t border-gray-200 py-3 justify-around">
        <TouchableOpacity>
          <Ionicons name="home-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="people-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="refresh-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
